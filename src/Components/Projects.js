import React, { Component } from "react";
import * as Data from "../data";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

export default class Projects extends Component {
  render() {
    return (
      <div id="projectComponent">
        <h2 className="categoryHeading">Projektek</h2>
        <ul>
          {Data.projects.map(project => (
            <li className="projectItem" key={project.projectName}>
              <Link to={`/project/${project.url}`}>
                <Overdrive
                  id={project.projectImage}
                  duration={200}
                  easing="ease-in-out"
                >
                  <img
                    src={project.projectImage}
                    alt={project.projectName}
                    className="projectImage"
                  />
                </Overdrive>
              </Link>
              <Overdrive
                id={project.projectName}
                duration={200}
                easing="ease-in-out"
              >
                <Link to={`/project/${project.url}`}>
                  <h3 className="projectName">{project.projectName} </h3>
                </Link>
              </Overdrive>
              <h5 className="projectType">{project.projectType} </h5>
              <p className="projectDescription">
                {project.projectDescription}{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
