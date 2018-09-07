import React, { Component } from "react";
import * as Data from "../data.js";

export default class Schools extends Component {
  render() {
    return (
      <div id="schoolComponent">
        <h2 className="categoryHeading">Iskolák</h2>
        <ul>
          {Data.schools.map(school => (
            <li className="schoolItem" key={school.schoolName}>
              <img className="schoolImage" src={school.schoolImage} alt="" />
              <h3 className="courseName"> {school.courseName} </h3>
              <h5 className="schoolName">{school.schoolName}</h5>
              <p className="shortDescription"> {school.shortDescription} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
