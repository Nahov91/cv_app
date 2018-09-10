import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import * as Data from "./data";
import Backdrop from "./Components/Backdrop";
import Schools from "./Components/Schools";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
