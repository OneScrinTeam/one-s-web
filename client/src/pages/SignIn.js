import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("the form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label htmlFor="email" className="FormField-Label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="FormField-Input"
                placeholder="Enter your Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label htmlFor="password" className="FormField-Label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField-Input"
                placeholder="***********"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <button className="FormField-Button mr-20">Sign In</button>{" "}
              <Link to="/" className="FormField-Link">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
