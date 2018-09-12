import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import SchoolDetails from "./Components/SchoolDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:url" component={SchoolDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
