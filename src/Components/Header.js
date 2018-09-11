import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <NavLink to="/" exact activeClassName="active" >
            <button className="back"> <img src="http://res.cloudinary.com/nahov91/image/upload/f_auto,fl_sanitize,q_auto/v1536674640/icons8-back-50.png" alt="navigate back"/> <span> Back</span></button>
          </NavLink>
        </div>
      </div>
    );
  }
}
