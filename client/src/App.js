import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layouts/Landing";
import NavBar from "./components/layouts/NavBar";

import Feature from "./pages/features/Feature";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/features" component={Feature} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    );
  }
}

export default App;
