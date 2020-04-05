import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PageSwitch from './components/PageSwitcher';
import Logo from './images/one-scrin.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-Aside">
              <img src={Logo} alt="" className="logo"/>
              <h2>OneScrin</h2>
          </div>
          <div className="App-Form">
          
              <PageSwitch/>
              <Route exact path="/" component={SignUp}></Route>
              <Route path="/sign-in" component={SignIn}></Route>          
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
