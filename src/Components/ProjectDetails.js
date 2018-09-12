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
            <h5 className="subDetailName">{project.projectType} </h5>
            <p className="detailDescription">{project.projectDescription}</p>
          </div>
          <section className="problemsToSolve">
            <h3 className="categoryHeading">A projektről</h3>
            <p className="problemsToSolve"> {project.problemsToSolve} </p>
          </section>
          <div className="otherInfo">
            <h3 className="categoryHeading">Használt technológák</h3>
            <p className="detailTechnologies"> {project.technologies} </p>
          </div>
        </div>
      </div>
    );
  }
}
