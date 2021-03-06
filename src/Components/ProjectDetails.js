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
        <Backdrop background={this.state.project} />
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
            {project.links.length >= 1 && (
              <div>
                <h3 className="categoryHeading">Linkek</h3>
                <ul>
                  {project.links.map(link => (
                    <li key={link} >
                      <a href={link} className="projectlink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <section className="problemsToSolve">
            <h3 className="categoryHeading">A projektről</h3>
            <p> {project.problemsToSolve} </p>
            {project.galleryImages.length >= 1 && (
              <div>
                <h3 className="categoryHeading">Képek</h3>
                <div className="gallery">
                  {project.galleryImages.map(galleryImage => (
                    <img key={galleryImage}
                      src={galleryImage}
                      alt={`${project.projectName} képernyőkép`}
                      className="galleryImage"
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
          <div className="otherInfo">
            <h3 className="categoryHeading">Használt technológiák</h3>
            <p className="detailTechnologies"> {project.technologies} </p>
          </div>
        </div>
      </div>
    );
  }
}
