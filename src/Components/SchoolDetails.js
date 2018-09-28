import React, { Component } from "react";
import Backdrop from "./Backdrop";
import * as Data from "../data";
import Overdrive from "react-overdrive";

export default class SchoolDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: {}
    };
  }

  componentWillMount() {
    Data.schools.filter(school => {
      if (school.url === this.props.match.params.surl) {
        this.setState({
          school: school
        });
      }
    });
  }

  render() {
    const { school } = this.state;
    return (
      <div id="details">
        <Backdrop background={this.state.school} />
        <Overdrive id={school.schoolImage} duration={200} easing="ease-in-out">
          <img
            className="detailImage"
            src={school.schoolImage}
            alt={school.schoolName}
          />
        </Overdrive>
        <div className="detailsWrapper">
          <div className="introductionWrapper">
            <Overdrive
              id={school.courseName}
              duration={200}
              easing="ease-in-out"
            >
              <h1 className="detailName"> {school.courseName} </h1>
            </Overdrive>
            <h5 className="subDetailName"> {school.schoolName} </h5>
            <h5 className="subDetailDuration"> {school.courseDuration} </h5>
            <p className="detailDescription"> {school.shortDescription} </p>
            {school.links.length >= 1 && (
              <div>
                <h3 className="categoryHeading">Tanusítvány</h3>
                <ul>
                  {school.links.map(link => (
                    <li key={link}>
                      <a href={link} className="projectlink">
                        Tanusítvány megtekintése
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <section className="problemsToSolve">
            <h3 className="categoryHeading">A képzésről </h3>
            <p> {school.problemsToSolve} </p>
          </section>
          <div className="otherInfo">
            {school.technologies.length >= 1 && (
              <div>
                <h3 className="categoryHeading">Elsajátított technológiák</h3>
                <p className="detailTechnologies"> {school.technologies} </p>
              </div>
            )}
            <h3 className="categoryHeading">Tanáraim</h3>
            <p className="detailTeachers"> {school.teachers} </p>
          </div>
        </div>
      </div>
    );
  }
}
