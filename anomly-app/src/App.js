import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Applicant from "./Applicant";
import Hiring from "./Hiring";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='rootContainer'>
          <Route exact path="/" component={Applicant} />
          <Route path="/Hiring" component={Hiring} />
        </div>
      </Router>
    );
  }
}

export default App;
