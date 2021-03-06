import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import SchoolDetails from "./Components/SchoolDetails";
import ProjectDetails from "./Components/ProjectDetails";
import Footer from "./Components/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/school/:surl" component={SchoolDetails} />
            <Route exact path="/project/:purl" component={ProjectDetails} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
