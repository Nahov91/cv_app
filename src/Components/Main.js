import React, { Component } from "react";
import "../App.css";
import Profile from "../Components/Profile";
import * as Data from "../data";
import Backdrop from "../Components/Backdrop";
import Schools from "../Components/Schools";
import Projects from "../Components/Projects";
import Technologies from "../Components/Technologies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <div className="App">
          <Backdrop />
          <Profile />
          <main id="content">
            <Schools />
            <Projects />
            <Technologies />
          </main>
        </div>
    );
  }
}

export default Main;
