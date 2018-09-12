import React, { Component } from "react";
import Backdrop from "./Backdrop";
import * as Data from "../data";
import Overdrive from "react-overdrive";

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }

  componentWillMount() {
    Data.projects.filter(project => {
      if (project.url === this.props.match.params.purl) {
        this.setState({
          project: project
        });
      }
    });
  }

  render() {
    const { project } = this.state;
    return (
      <div id="details">
        <Backdrop />
        <Overdrive
          id={project.projectImage}
          duration={200}
          easing="ease-in-out"
        >
          <img
            className="detailImage"
            src={project.projectImage}
            alt={project.projectName}
          />
        </Overdrive>
        <div className="detailsWrapper">
          <div className="introductionWrapper">
            <Overdrive
              id={project.projectName}
              duration={200}
              easing="ease-in-out"
            >
              <h1 className="detailName"> {project.projectName} </h1>
            </Overdrive>
            <p className="detailDescription">
              {project.projectDescription}
            </p>
          </div>
          <p className="problemsToSolve"> {project.problemsToSolve} </p>
          <div className="otherInfo">
            <p className="detailTechnologies"> {project.technologies} </p>
          </div>
        </div>
      </div>
    );
  }
}
