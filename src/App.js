import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import * as Data from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profile />
        </main>
      </div>
    );
  }
}

export default App;
