import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PageSwitch from "../../components/PageSwitcher";
// import Logo from "../../images/one-scrin.png";

import { withRouter } from "react-router-dom"

class Auth extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="signUpSignIn">
            <div className="App-Aside">
              {/* <img src={Logo} alt="" className="logo" /> */}
              {/* <h2></h2> */}
            </div>
            <div className="App-Form">
              <PageSwitch />
              <Route exact path="/sign-up" component={SignUp}></Route>
              <Route exact path="/sign-in" component={SignIn}></Route>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(Auth);
