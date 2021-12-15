import React, { useState, useContext, useEffect } from "react";
import LoginForm from "../components/loginForm";
import { login } from "../firebase";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import { AuthContext } from "../context/auth-context";
import CircularProgress from "@material-ui/core/CircularProgress";
const FormValidators = require("../components/validate");
const validateLoginForm = FormValidators.validateLoginForm;

function LoginContainer(props) {
  const usersCollectionRef = collection(db, "usersCredentials");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({ email: "", password: "" });
  const [btnTxt, setBtnTxt] = useState("show");
  const [type, setType] = useState("password");
  const [score, setScore] = useState("0");
  const [currentUsers, setCurrentUsers] = useState("");
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");
  const [CircularProgressOpen, setCircularProgressOpen] = useState(false);
  const [authToken, setAuth] = useContext(AuthContext);

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUsers(currentUser);
    });
  },[currentUsers])
 
  
  
 
  const handleChange = (event) => {
    const field = event.target.name;
    const users = user;
    users[field] = event.target.value;
    setUser({ ...user, users });
  };

  const pwHandleChange = (event) => {
    const field = event.target.name;
    const users = user;
    users[field] = event.target.value;
    setUser({ ...user, users });
  };

  const getUserInfo = () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      let userList = [];
      snapshot.docs.forEach((doc) => {
        userList.push({...doc.data(),id:doc.id});
      });
      console.log('currentUsers.email----',currentUsers);

      let userInformation = userList.find(
        (x) => x.email === currentUsers.email
      );
      console.log("userInformation1234",userInformation);
      setAuth({ ...authToken, userInfo: userInformation });
    });
  };
  const submitSignup = async (user) => {
    setCircularProgressOpen(true);
    var params = { password: user.password, email: user.email };
    try {
      await login(user.email, user.password);
      await addDoc(usersCollectionRef, {
        password: user.password,
        email: user.email,
      });
      setCircularProgressOpen(false);
      setOpen(true);
      console.log('currentUsers.email',currentUsers.email);
      const idToken = await currentUsers.getIdToken();
      await getUserInfo();
      setAuth({ ...authToken, idToken: idToken });
      localStorage.setItem("userID", idToken);
    } catch {
      setCircularProgressOpen(false);
      alert("You have entered invalid credentials");
    }
    if (params) {
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    props.handleLoginClose()
  };

  const validateForm = async (event) => {
    event.preventDefault();
    var payload = validateLoginForm(user);
    if (payload.success) {
      setErrors({});
      submitSignup(user);
    } else {
      const errorMessage = payload.errors;
      setErrors(errorMessage);
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message="you have been logged in successfully"
        key={vertical + horizontal}
      />

      <Backdrop className="backdrop" sx={{ color: "#fff", zIndex: 10 }} open={CircularProgressOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <LoginForm
        onSubmit={validateForm}
        onChange={handleChange}
        onPwChange={pwHandleChange}
        errors={errors}
        user={user}
        score={score}
        btnTxt={btnTxt}
        type={type}
      />
    </div>
  );
}

export default LoginContainer;
