import React, { Component } from "react";
import * as Data from "../data.js";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

export default class Schools extends Component {
  render() {
    return (
      <div id="schoolComponent">
        <h2 className="categoryHeading">Iskolák</h2>
        <ul>
          {Data.schools.map(school => (
            <li className="schoolItem" key={school.schoolName}>
              <Link to={`/school/${school.url}`}>
                <Overdrive id={school.schoolImage} duration={200} easing='ease-in-out'>
                  <img
                    className="schoolImage"
                    src={school.schoolImage}
                    alt={school.schoolName}
                  />
                </Overdrive>
              </Link>
              <Overdrive
                id={school.courseName}
                duration={200}
                easing='ease-in-out'
              >
                <Link to={`/school/${school.url}`}>
                  <h3 className="courseName"> {school.courseName} </h3>
                </Link>
              </Overdrive>
              <h5 className="schoolName">{school.schoolName}</h5>
              <p className="shortDescription"> {school.shortDescription} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
