import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import '../styles/formStyles.css';

function SignUpForm (props) {
const {history,
  onSubmit,
  onChange,
  errors,
  user,
  type,
  pwMask,
  onPwChange,
  countryList} = props
  console.log("user",props.user);
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="user name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <br/>
        <TextField
          name="email"
          floatingLabelText="email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <br/>

        <TextField
          type={type}
          name="password"
          floatingLabelText="password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

         <br/>

        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br />

        <TextField
          type="number"
          name="mobileNumner"
          floatingLabelText="mobile Numner"
          value={user.mobileNumner}
          onChange={onChange}
          errorText={errors.mobileNumner}
        />
        <br />
        <Select name="country" value={user.country}
          onChange={onChange}>
      {countryList?.map(option => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label ?? option.value}
            </MenuItem>
          );
      })}
    </Select>
    <br />
    <TextField
          name="designation"
          floatingLabelText="designation"
          value={user.designation}
          onChange={onChange}
          errorText={errors.designation}
        />
       
    
    <br />
    <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
