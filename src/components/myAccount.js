import { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function MyAccount(props) {
    const[image,setImage]=useState("")
  const [authToken, setAuth] = useContext(AuthContext);

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
  const handleUpdateProfile=()=>{
    props.history.push(`/users/updateProfile`);
  }
  return (
    // <div className="container">
    <div className="row accountDetailsPd">
      <div className="col-lg-4 myAccountText">
        <h4>My Account</h4>
        <div className="AccountDetails">
          <h6>my Account Details</h6>
          <br />
          <div>
            <p onClick={handleUpdateProfile}>Update Personal Data</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 userPersonalInfo">
        <h5>Personal information</h5>
        <div className="userDetails">
          <br />
          <br />
          <p>Email: &nbsp; &nbsp; {authToken?.userInfo?.email}</p>
          <br />
          <p>Name: &nbsp;&nbsp; {authToken?.userInfo?.username}</p>
          <p></p>
          <br />
          <p>Country: &nbsp;&nbsp; {authToken?.userInfo?.country}</p>
          <br />
          <p>Mobile Number:&nbsp;&nbsp; {authToken?.userInfo?.mobileNumber}</p>
          <br />
          <p>Designation: &nbsp;&nbsp; {authToken?.userInfo?.designation}</p>
        </div> 

        <input type="file" className="hidden" id="fileupload" accept=".jpg, .png, .jpeg" onChange={(e)=>handlechange(e)}/>
        <button onClick={updateProfile}>upload</button>
      </div>
    </div>
    // </div>
  );
}

export default withRouter(MyAccount);
