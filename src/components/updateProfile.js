import { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import InputTextField from '../components/inputTextField'
import { db } from "../firebase";

function UpdateProfile(props) {
    const[image,setImage]=useState("")
  const [authToken, setAuth] = useContext(AuthContext);
  const [userName, setUserName]=useState("")
  const [errors, setErrors]=useState("")

  const updateProfile= async()=>{
      const userDoc = doc(db, "users",authToken.userInfo.id)
      const newFields = {profile:image}
    await updateDoc(userDoc,newFields)
  }

  const handlechange=(e)=>{
        console.log("e",e.target.files[0]);
        let file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () =>{
                setImage(reader.result.toString())
            }
        reader.readAsDataURL(file)
  }
  const handleInputValueChange =(e)=>{

  }
console.log("image",image);
  return (
    <div className="row accountDetailsPd">
      <div className="col-lg-4 myAccountText">
        <h4> Update Personal Data</h4>
        <div className="AccountDetails">
          <h6>my Account Details</h6>
          <br />
          <div>
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 userPersonalInfo">
        <h5>Confirm your information</h5>
        <div className="userDetails">
          <br />
          <br />
          <InputTextField   
          id="userName"
          label="userName"
          multiline
          maxRows={4}
          value={userName}
          onChange={handleInputValueChange}
          error={errors}
          helperText={errors}/>
        </div> 

        <input type="file" className="hidden" id="fileupload" accept=".jpg, .png, .jpeg" onChange={(e)=>handlechange(e)}/>
        <button onClick={updateProfile}>upload</button>
      </div>
    </div>
  );
}

export default withRouter(UpdateProfile);
