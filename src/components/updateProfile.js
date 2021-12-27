import { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { collection,getDocs, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import InputTextField from '../components/inputTextField'
import { db } from "../firebase";
import TextField from "@material-ui/core/TextField";
import useTranslation from "../context/useTranslation";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from 'react-redux';
import { formSubmittionStatus} from '../redux/actions/ActionCreators';

import "../styles/formStyles.css";

function UpdateProfile(props) {
  const usersCollectionRef = collection(db, "users");
  const { translator } = useTranslation();
    const[image,setImage]=useState("")
  const [authToken, setAuth] = useContext(AuthContext);
  const [user, setUser] = useState({ username: "", mobileNumber: "",country:"",selectedState:"",designation:""  });
  const [errors, setErrors]=useState("")

  useEffect(async () => {
    props.formSubmittionStatus(true)
    const userEmail = localStorage.getItem("userEmail");
    const data = await getDocs(usersCollectionRef);
    let userList = [];
    data.docs.forEach((doc) => {
      userList.push({ ...doc.data(), id: doc.id });
    });
    let currentUserInfo = userList?.find((x) => x.email === userEmail);
    setUser(currentUserInfo);
    props.formSubmittionStatus(false)
  }, []);

  // const updateProfile= async()=>{
  //   console.log("image",image);
  //     debugger;
  //     const userDoc = doc(db, "users",authToken.userInfo.id)
  //     const newFields = {profile:image}
  //   await updateDoc(userDoc,newFields)
  // }

  const handlechange=(e)=>{
        console.log("e",e.target.files[0]);
        let file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () =>{
                setImage(reader.result.toString())
            }
        reader.readAsDataURL(file)
  }
  const handleInputValueChange =(event)=>{
    const field = event.target.name;
    const users = user;
    users[field] = event.target.value;
    setUser({ ...user, users });
  }
  const onSubmit =async()=>{
    props.formSubmittionStatus(true)
    const userDoc = doc(db, "users",authToken.userInfo.id)
    await updateDoc(userDoc, {
      username: user.username,
      profile:image
    });
    props.formSubmittionStatus(false)
    props.history.push(`/users/myAccount`);
    window.location.reload();
  }
  const myAccount = () =>{
    props.history.push(`/users/myAccount`);
  }

console.log("updateuser",user);
  return (
    <div className="row accountDetailsPd">
         <Backdrop className="backdrop" sx={{ color: "#fff", zIndex: 10 }} open={props.userData.formSubmitted}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="col-lg-4 myAccountText">
        <h4> Update Personal Data</h4>
        <div className="AccountDetails">
          <h6>my Account Details</h6>
          <br />
          <div className="my-accountText" onClick={myAccount}>
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 userUpdatePersonalInfo">
        <h5>Confirm your information</h5>
        <div className="userDetails">

        <form>
        {/* <form onSubmit={onSubmit}> */}
          <br />
          <br />
          <TextField
          id="username"
          label="username"
          multiline
          maxRows={4}
          name="username"
          className="userNameField"
          value={user.username}
          onChange={handleInputValueChange}
          error={errors.username}
          helperText={errors.username}
        />
          {/* <TextField   
          id="username"
          label="username"
          multiline
          maxRows={4}
          value={user.username}
          handleInputValueChange={handleInputValueChange}
          error={errors}
          helperText={errors}/> */}
          <br />
          <br />
          <TextField   
          id="mobileNumber"
          label="mobileNumber"
          name="mobileNumber"
          multiline
          maxRows={4}
          value={user.mobileNumber}
          onChange={handleInputValueChange}
          error={errors.mobileNumber}
          helperText={errors.mobileNumber}/>
          <br />
          <br />
          <TextField   
          id="country"
          label="country"
          name="country"
          multiline
          maxRows={4}
          value={user.country}
          onChange={handleInputValueChange}
          error={errors.country}
          helperText={errors.country}/>
          <br />
          <br />

          <TextField   
          id="selectedState"
          label="selectedState"
          name="selectedState"
          multiline
          maxRows={4}
          value={user.selectedState}
          onChange={handleInputValueChange}
          error={errors.selectedState}
          helperText={errors.selectedState}/>
          <br />
          <br />

          <TextField   
          id="designation"
          label="designation"
          name="designation"
          multiline
          maxRows={4}
          value={user.designation}
          onChange={handleInputValueChange}
          error={errors.designation}
          helperText={errors.designation}/>
           <br />
           <br />
        </form>
        <button className="updateUserSubmit" onClick={onSubmit}>
          {translator("updateUser")}
        </button>
       
        </div> 
        <input type="file" className="hidden" id="fileupload" accept=".jpg, .png, .jpeg" onChange={(e)=>handlechange(e)}/>

      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = {
  formSubmittionStatus,
};

const updateUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);

export default withRouter(updateUserContainer);
