import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <Link to="/">
            <button id="back">back</button>
          </Link>
        </div>
      </div>
    );
  }
}
