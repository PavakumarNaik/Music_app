import React, { Component } from "react";
import LoginForm from "../components/loginForm";
const FormValidators = require("../components/validate");
const validateSignUpForm = FormValidators.validateSignUpForm;

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

  submitSignup = (user) => {
    var params = { password: user.pw, email: user.email };
    console.log("params", params);
  };
  validateForm = (event) => {
    event.preventDefault();
    var payload = validateSignUpForm(this.state.user);
    if (payload.success) {
      console.log("success");
      this.setState({
        errors: {},
      });
      var user = {
        pw: this.state.user.password,
        email: this.state.user.email,
      };
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
    console.log("this.state.stateLists", this.state.stateLists);
    return (
      <div>
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
    );
  }
}

export default LoginContainer;
