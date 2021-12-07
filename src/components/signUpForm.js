import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import useTranslation from "../context/useTranslation";
import "../styles/formStyles.css";

function SignUpForm(props) {
  const { translator } = useTranslation()
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
      <h4>{translator("signUp")}</h4>
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
          error={errors.pwconfirm}
          helperText={errors.pwconfirm}
        />
        <br />
        <TextField
          type="number"
          className="inputBoxWidth"
          name="mobileNumber"
          placeholder="mobile Numner"
          value={user.mobileNumber}
          onChange={onChange}
          error={errors.mobileNumber}
          helperText={errors.mobileNumber}
        />
        <br />
        <FormControl className="inputBoxWidth">
        <InputLabel htmlFor="country" >Select Country...</InputLabel>
        <Select
          name="country"
          label="Select country..."
          placeholder="Select country..."
          value={user.country}
          onChange={onChange}
          error={errors.country}
        >
          {countryList?.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label ?? option.value}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText className="selectErrorMsg">{errors.country}</FormHelperText>
        </FormControl>
        <br />
        <FormControl className="inputBoxWidth">
        <InputLabel htmlFor="selectedState" >Select State...</InputLabel>
        <Select
          name="selectedState"
          label="Select State..."
          placeholder="Select State..."
          value={user.selectedState}
          onChange={onChange}
          error={errors.selectedState}
          helperText={errors.selectedState}
        >
          {stateList?.map((option) => {
            return (
              <MenuItem key={option.location} value={option.location}>
                {option.label ?? option.location}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText className="selectErrorMsg">{errors.selectedState}</FormHelperText>
        </FormControl>
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
          label={translator("Submit")}
        />
      </form>
      <p>
      {translator("accountVerify")}? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
}
export default SignUpForm;
