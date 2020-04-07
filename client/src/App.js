import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import NavBar from "./pages/nav-bar/NavBar";

import Auth from "./pages/auth/Auth";

import ChattRoom from "./pages/chat-room/ChattRoom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Route exact path="/" component={Landing} />
        <Route exact path="/sign-up" component={Auth} />
        <Route exact path="/dashboard" component={ChattRoom} />
      </Router>
    );
  }
}

export default App;
