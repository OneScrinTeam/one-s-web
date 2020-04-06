import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

import { Link, withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    // console.log(userData);

    const target = "http://onescrin.citural.com.ng";
    // this.props.history.push(target)

    axios
      .post("http://localhost:23005/api/users/login", userData)
      .then((res) => this.props.history.push("/dashboard"))
      .catch((err) => this.setState({ errors: err.response.data }));
    // this.setState({ newUser });this.props.history.push(`${baseUrl}`))
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.onSubmit}>
            <div className="FormField">
              <label htmlFor="email" className="FormField-Label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className={classnames("FormField-Input", {
                  "is-invalid": errors.email,
                })}
                className="FormField-Input"
                placeholder="Enter your Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="FormField">
              <label htmlFor="password" className="FormField-Label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={classnames("FormField-Input", {
                  "is-invalid": errors.password,
                })}
                className="FormField-Input"
                placeholder="***********"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="FormField">
              <button className="FormField-Button mr-20">Sign In</button>{" "}
              <Link exact to="/dashboard" className="FormField-Link">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
