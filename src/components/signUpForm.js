import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import "../styles/formStyles.css";

function SignUpForm(props) {
  const {
    onSubmit,
    onChange,
    errors,
    user,
    type,
    onPwChange,
    countryList,
    stateList,
  } = props;
  console.log("errors", errors);
  return (
    <div className="signUpBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          className="inputBoxWidth userNameField"
          placeholder="user name"
          value={user.username}
          onChange={onChange}
          error={errors.username}
          helperText={errors.username}
        />
        <br />
        <TextField
          name="email"
          className="inputBoxWidth"
          placeholder="email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          helperText={errors.email}
        />
        <br />
        <TextField
          type={type}
          className="inputBoxWidth"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={onPwChange}
          error={errors.password}
          helperText={errors.password}
        />
        <br />
        <TextField
          type={type}
          className="inputBoxWidth"
          name="pwconfirm"
          placeholder="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
          helperText={errors.pwconfirm}
        />
        <br />
        <TextField
          type="number"
          className="inputBoxWidth"
          name="mobileNumner"
          placeholder="mobile Numner"
          value={user.mobileNumner}
          onChange={onChange}
          error={errors.mobileNumner}
          helperText={errors.mobileNumner}
        />
        <br />
        <Select
          className="inputBoxWidth"
          name="country"
          label="Select country..."
          placeholder="Select country..."
          value={user.country}
          onChange={onChange}
        >
          {countryList?.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label ?? option.value}
              </MenuItem>
            );
          })}
        </Select>
        <br />
        <Select
          className="inputBoxWidth"
          name="selectedState"
          label="Select State..."
          placeholder="Select State..."
          value={user.selectedState}
          onChange={onChange}
        >
          {stateList?.map((option) => {
            return (
              <MenuItem key={option.location} value={option.location}>
                {option.label ?? option.location}
              </MenuItem>
            );
          })}
        </Select>
        <br />
        <TextField
          name="designation"
          className="inputBoxWidth"
          placeholder="designation"
          value={user.designation}
          onChange={onChange}
          error={errors.designation}
          helperText={errors.designation}
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
}
export default SignUpForm;
