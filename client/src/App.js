import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import NavBar from "./pages/nav-bar/NavBar";

// import Auth from "./pages/auth/Auth";
import ChatRoom from "./pages/chat-room/ChatRoom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/chat-room" component={ChatRoom} />
        </Switch>
      </Router>
    );
  }
}

export default App;
