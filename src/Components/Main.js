import React, { Component } from "react";
import "../App.css";
import Profile from "../Components/Profile";
import Backdrop from "../Components/Backdrop";
import Schools from "../Components/Schools";
import Projects from "../Components/Projects";
import Technologies from "../Components/Technologies";

class Main extends Component {
  render() {
    return (
      <div className="App">
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
