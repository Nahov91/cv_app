import React, { Component } from "react";
import * as Data from "../data.js";
import { Link } from "react-router-dom";

export default class Schools extends Component {
  render() {
    return (
      <div id="schoolComponent">
        <h2 className="categoryHeading">Iskolák</h2>
        <ul>
          {Data.schools.map(school => (
            <li className="schoolItem" key={school.schoolName}>
              <Link to={`/${school.url}`}>
                <img className="schoolImage" src={school.schoolImage} alt="" />
              </Link>
              <Link to={`/${school.url}`}>
                <h3 className="courseName"> {school.courseName} </h3>
              </Link>
              <h5 className="schoolName">{school.schoolName}</h5>
              <p className="shortDescription"> {school.shortDescription} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
