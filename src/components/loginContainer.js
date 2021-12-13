import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import {login} from '../firebase';
import {db} from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {  collection, addDoc } from "firebase/firestore";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AuthContext } from "../context/auth-context";
const FormValidators = require("../components/validate");
const validateLoginForm = FormValidators.validateLoginForm;

const usersCollectionRef = collection(db,"usersCredentials");

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
      },
      btnTxt: "show",
      type: "password",
      score: "0",
      currentUsers:"",
      open: false,
      vertical: "top",
      horizontal: "center",
      CircularProgressOpen: false,
      idToken:""
    };
  }

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  };

  pwHandleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user,
    });
    if (event.target.value === "") {
      this.setState((state) =>
        Object.assign({}, state, {
          score: "null",
        })
      );
    } else {
    }
  };


  submitSignup = async (user) => {
    this.setState({ CircularProgressOpen: true });
    var params = { password: user.pw, email: user.email };
    try{
      await login(user.email, user.pw,)
      await addDoc(usersCollectionRef,{ password: user.pw, email: user.email})
      const idToken = await this.state.currentUsers.getIdToken();
      this.setState({ idToken: idToken });
      localStorage.setItem('userID', idToken);
      this.setState({ CircularProgressOpen: false });
      this.setState({ open: true });
     }catch{
      this.setState({ CircularProgressOpen: false });
      alert("You have entered invalid credentials")
     }
    if(params){
      
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    this.props.history.push(`/`);
  };

  validateForm = async(event) => {
    event.preventDefault();
    var payload = validateLoginForm(this.state.user);
    if (payload.success) {
      console.log("success");
      this.setState({
        errors: {},
      });
      var user = {
        pw: this.state.user.password,
        email: this.state.user.email,
      };
      const auth = getAuth();
      const currentuser = await onAuthStateChanged(auth, user=> this.setState({currentUsers:user}));
      console.log("currentuser+_+",currentuser);
      this.submitSignup(user);
    } else {
      console.log("Fail");

      const errors = payload.errors;

      this.setState({
        errors,
      });
    }
  };

  render() {
    const { vertical, horizontal, open, CircularProgressOpen } = this.state;
    return (
      <AuthContext.Provider value={this.state.idToken}>
      <div>
          <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={2000}
          message="You have login successfully"
          key={vertical + horizontal}
        />

        <Backdrop sx={{ color: "#fff", zIndex: 7 }} open={CircularProgressOpen}>
          <CircularProgress color="inherit" />
        </Backdrop>
       
        <LoginForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
        />
      </div>
      </AuthContext.Provider>
    );
  }
}

export default LoginContainer;


// import React, { Component, useState } from "react";
// import LoginForm from "../components/loginForm";
// import {login} from '../firebase';
// import {db} from '../firebase';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import {  collection, addDoc } from "firebase/firestore";
// import Snackbar from "@material-ui/core/Snackbar";
// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";
// const FormValidators = require("../components/validate");
// const validateLoginForm = FormValidators.validateLoginForm;


// const LoginContainer =(props)=> {
//   const usersCollectionRef = collection(db,"usersCredentials");
// const [errors,setErrors]=useState({})
// const [user,setUser]=useState({email: "", password: "",})
// const [btnTxt,setBtnTxt]=useState("show");
// const [type,setType]=useState("password")
// const [score,setScore]=useState("0")
// const [currentUsers,setCurrentUsers]=useState("")
// const [open,setOpen]=useState(false)
// const [vertical,setVertical]=useState("top")
// const [horizontal,setHorizontal]=useState("center")
// const [CircularProgressOpen,setCircularProgressOpen]=useState(false)



//  const handleChange = (event) => {
//     const field = event.target.name;
//     const users = user;
//     users[field] = event.target.value;

//     setUser({users});
//   };

//   const pwHandleChange = (event) => {
//     const field = event.target.name;
//     const users = user;
//     users[field] = event.target.value;
//     setUser({
//       users,
//     });
//     // if (event.target.value === "") {
//     //   this.setState((state) =>
//     //     Object.assign({}, state, {
//     //       score: "null",
//     //     })
//     //   );
//     // } else {
//     // }
//   };


//   const submitSignup = async (user) => {
//     setCircularProgressOpen( true );
//     var params = { password: user.pw, email: user.email };
//     try{
//       await login(user.email, user.pw,)
//       await addDoc(usersCollectionRef,{ password: user.pw, email: user.email})
//       const idToken = await currentUsers.getIdToken();
//       localStorage.setItem('userID', idToken);
//       setCircularProgressOpen( false );
//       setOpen(true);
//      }catch{
//       setCircularProgressOpen( false );
//       alert("You have entered invalid credentials")
//      }
//     if(params){
      
//     }
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//     props.history.push(`/`);
//   };

//   const  validateForm = async(event) => {
//     event.preventDefault();
//     var payload = validateLoginForm(user);
//     if (payload.success) {
//       console.log("success");
//       setErrors(
//         {}
//       );
//       var user = {
//         pw: user.password,
//         email: user.email,
//       };
//       const auth = getAuth();
//       const currentuser = await onAuthStateChanged(auth, user=> setCurrentUsers(user));
//       console.log("currentuser+_+",currentuser);
//       submitSignup(user);
//     } else {
//       console.log("Fail");

//       const errors = payload.errors;

//       // setErrors(
//       //   {errors},
//       // );
//     }
 
//   }
  
//     return (
//       <div>
//           <Snackbar
//           anchorOrigin={{ vertical, horizontal }}
//           open={open}
//           onClose={handleClose}
//           autoHideDuration={2000}
//           message="You have login successfully"
//           key={vertical + horizontal}
//         />

//         <Backdrop sx={{ color: "#fff", zIndex: 7 }} open={CircularProgressOpen}>
//           <CircularProgress color="inherit" />
//         </Backdrop>
       
//         <LoginForm
//           onSubmit={validateForm}
//           onChange={handleChange}
//           onPwChange={pwHandleChange}
//           errors={errors}
//           user={user}
//           score={score}
//           btnTxt={btnTxt}
//           type={type}
//         />
//       </div>
//     );
  
// }

// export default LoginContainer;