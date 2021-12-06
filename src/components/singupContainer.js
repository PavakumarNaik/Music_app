import React, { Component } from "react";
import SignUpForm from './signUpForm';

const countryList = [
    {id: 1,      value: 'India'},
    {id: 2, value: 'America'   },
    {id: 3, value: 'China'   }
];
const locationList = { 
    id:1,
    india:[
    {id: 1, location: 'Dheli'},
    {id: 2, location: 'Bangalore'},
    {id: 3, location: 'kolkata'},
    {id: 4, location: 'Mumbai'},
    ],
    America:[
        {id: 1, location: 'Dheli'},
        {id: 2, location: 'Bangalore'},
        {id: 3, location: 'kolkata'},
        {id: 4, location: 'Mumbai'},
       ],
       China:[
            {id: 1, location: 'Dheli'},
            {id: 2, location: 'Bangalore'},
            {id: 3, location: 'kolkata'},
            {id: 4, location: 'Mumbai'},
        ]
};


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
        country:"",
        mobileNumner:"",
        designation:""
      },
      btnTxt: "show",
      type: "password",
      score: "0"
    };
  }

  handleChange=(event)=> {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange=(event)=> {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (event.target.value === "") {
      this.setState((state) =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
   
    }
  }

  submitSignup=(user)=> {
    var params = { username: user.usr, password: user.pw, email: user.email,country:user.country,mobileNumner:user.mobileNumner,designation:user.designation };
    console.log("params",params);

  }

  validateForm=(event)=> {
    event.preventDefault();
    var payload = this.state.user;
    if (!payload.success) {
        console.log("success");
      this.setState({
        errors: {}
      });
      var user = {
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email,
        country:this.state.country,
        mobileNumner:this.state.mobileNumner,
        designation:this.state.designation
      };
      this.submitSignup(user);
    } 
    else {
        console.log("Fail");

      const errors = payload.errors;

      this.setState({
        errors
      });
    }
  }

  render() {
      console.log("this.state.user",this.state.user);
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
        />
      </div>
    );
  }
}

export default SignUpContainer;
