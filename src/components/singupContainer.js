import React, { Component } from "react";
import SignUpForm from "./signUpForm";
const FormValidators = require("../components/validate");
const validateSignUpForm = FormValidators.validateSignUpForm;

const countryList = [
  { id: 1, value: "India" },
  { id: 2, value: "America" },
  { id: 3, value: "China" },
];
const stateList = [
  {
    id: 1,
    country: "India",
    states: [
      { id: 1, location: "Dheli" },
      { id: 2, location: "Bangalore" },
      { id: 3, location: "kolkata" },
      { id: 4, location: "Mumbai" },
      { id: 4, location: "channi" },
    ],
  },
  {
    id: 2,
    country: "America",
    states: [
      { id: 1, location: "Texas" },
      { id: 2, location: "Maryland" },
      { id: 3, location: "Florida" },
      { id: 4, location: "California" },
      { id: 5, location: "New York" },
    ],
  },
  {
    id: 3,
    country: "China",
    states: [
      { id: 1, location: "Anhui" },
      { id: 2, location: "Fujian" },
      { id: 3, location: "Gansu" },
      { id: 4, location: "Hainan" },
      { id: 5, location: "Heilongjiang" },
    ],
  },
];

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
        pwconfirm: "",
        country: "",
        mobileNumner: "",
        designation: "",
        selectedState: "",
      },
      btnTxt: "show",
      type: "password",
      score: "0",
      stateLists: [],
    };
  }

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
    console.log("value", event.target.value);
    if (event.target.name === "country") {
      const result = stateList.find(
        (name) => name.country === event.target.value
      );
      this.setState({ stateLists: result.states });
    }
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
    var params = {
      username: user.usr,
      password: user.pw,
      email: user.email,
      country: user.country,
      mobileNumner: user.mobileNumner,
      designation: user.designation,
      selectedState: user.selectedState,
    };
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
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email,
        country: this.state.country,
        mobileNumner: this.state.mobileNumner,
        designation: this.state.designation,
        selectedState: this.state.selectedState,
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
        <SignUpForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
          countryList={countryList}
          stateList={this.state.stateLists}
        />
      </div>
    );
  }
}

export default SignUpContainer;
