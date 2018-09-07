import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import * as Data from "./data";
import Backdrop from './Components/Backdrop'
import Schools from "./Components/Schools";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Backdrop />
        <main>
          <Profile />
          <Schools />
          <Projects />
          <Technologies/>
        </main>
      </div>
    );
  }
}

export default App;
