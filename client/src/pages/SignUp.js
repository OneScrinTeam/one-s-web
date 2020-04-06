import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

import { Link, withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      hasAgreed: false,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  UNSAFE_componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    axios
      .post("http://localhost:23005/api/users/signup", newUser)

      .then((res) => this.props.history.push("/sign-in")) //console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));

    // this.setState({ newUser });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.onSubmit}>
          <div className="FormField">
            <label htmlFor="name" className="FormField-Label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={classnames("FormField-Input", {
                "is-invalid": errors.name,
              })}
              placeholder="Enter your Fullname"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
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
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
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
              className="FormField-Input"
              placeholder="***********"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="FormField">
            <label htmlFor="password" className="FormField-Label">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              className="FormField-Input"
              placeholder="***********"
              name="password2"
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>

          <div className="FormField">
            <label htmlFor="" className="FormField-CheckboxLabel">
              <input
                type="checkbox"
                className="FormField-Checkbox"
                name="hasAgreed"
                onChange={this.onChange}
                value={this.state.hasAgreed}
              />{" "}
              I agree to{" "}
              <Link to="/" className="FormField-TermsLink">
                Terms & condition
              </Link>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField-Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField-Link">
              Already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
