import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import "../styles/formStyles.css";

function LoginForm(props) {
  const { onSubmit, onChange, errors, user, type, onPwChange } = props;
  console.log("errors", errors);
  return (
    <div className="loginBox">
      <h1>Login</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          className="loginInputBoxWidth"
          placeholder="email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          helperText={errors.email}
        />
        <br />
        <TextField
          type={type}
          className="loginInputBoxWidth"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={onPwChange}
          error={errors.password}
          helperText={errors.password}
        />
        <br />
        <br />
        <RaisedButton
          className="loginSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        <a href="/">Forgot Password?</a>
      </p>
    </div>
  );
}
export default LoginForm;
