import { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function MyAccount(props) {
    const[image,setImage]=useState("")
  const [authToken, setAuth] = useContext(AuthContext);

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
            <p className="personal-info-text" onClick={handleUpdateProfile}>Update Personal Data</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 userPersonalInfo">
        <h5 className="">Personal information</h5>
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
      </div>
    </div>
    // </div>
  );
}

export default withRouter(MyAccount);
