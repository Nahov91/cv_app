import React, { Component } from "react";
import * as Data from "../data";

export default class Projects extends Component {
  render() {
    return (
      <div id="projectComponent">
        <h2 className="categoryHeading">Projektek</h2>
        <ul>
          {Data.projects.map(project => (
            <li className="projectItem" key={project.projectName}>
            <img src={project.projectImage} alt="" className="projectImage"/>
              <h2 className="projectName">{project.projectName} </h2>
              <h5 className="projectType">{project.projectType} </h5>
              <p className="projectDescription">{project.projectDescription} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
