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
import { connect } from 'react-redux';
import { userLogin, formSubmittionStatus, currentUserInfo} from '../redux/actions/ActionCreators';
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
  const [authToken, setAuth] = useContext(AuthContext);

  
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUsers(currentUser);
    });
 

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

  const getUserInfo = (params) => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      let userList = [];
      snapshot.docs.forEach((doc) => {
        userList.push({...doc.data(),id:doc.id});
      });
      console.log('currentUsers.email----',currentUsers);

      let userInformation = userList.find(
        (x) => x.email === params.email
      );
      setAuth({ ...authToken, userInfo: userInformation });
    });
  };
  const submitSignup = async (user) => {
    props.formSubmittionStatus(true)
    var params = { password: user.password, email: user.email };
    try {
      await props.userLogin(user);
      await props.currentUserInfo()
      props.formSubmittionStatus(false)

      // await login(user.email, user.password);
      // await addDoc(usersCollectionRef, {
      //   password: user.password,
      //   email: user.email,
      // });
      await getUserInfo(params);
      setOpen(true);
      console.log('currentUsers.email',currentUsers.email);
      const idToken = await currentUsers.getIdToken();
      localStorage.setItem("userEmail",user.email)
      localStorage.setItem("userID", idToken);
      setAuth({ ...authToken, idToken: idToken });
    } catch {
      props.formSubmittionStatus(false)
      alert("You have entered invalid credentials");
    }
  };

  const handleClose = async(event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // setOpen(false);
    // props.handleLoginClose()
    // window.location.reload();
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
console.log("this.props.user.user",props.userData);
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

      <Backdrop className="backdrop" sx={{ color: "#fff", zIndex: 10 }} open={props.userData.formSubmitted}>
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
        userData={props.userData}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = {
  userLogin,
  formSubmittionStatus,
  currentUserInfo
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

export default AppContainer;
