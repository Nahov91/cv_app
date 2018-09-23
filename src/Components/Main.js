import React, { Component } from "react";
import "../App.css";
import Profile from "../Components/Profile";
import Backdrop from "../Components/Backdrop";
import Schools from "../Components/Schools";
import Projects from "../Components/Projects";
import Technologies from "../Components/Technologies";
import Languages from "../Components/Languages"

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <main id="content">
          <Schools />
          <Projects />
          <Technologies />
          <Languages />
        </main>
      </div>
    );
  }
}

export default Main;
