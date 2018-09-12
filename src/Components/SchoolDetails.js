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
        <Backdrop />
        <Overdrive id={school.schoolImage} duration={200} easing='ease-in-out'>
          <img
            className="schoolDetailImage"
            src={school.schoolImage}
            alt={school.schoolName}
          />
        </Overdrive>
        <div className="detailsWrapper">
          <div className="introductionWrapper">
            <Overdrive
              id={school.courseName}
              duration={200}
              easing='ease-in-out'
            >
              <h1 className="courseDetailName"> {school.courseName} </h1>
            </Overdrive>
            <h5 className="schoolDetailName"> {school.schoolName} </h5>
            <h5 className="courseDetailDuration"> {school.courseDuration} </h5>
            <p className="shortDetailDescription">
              {" "}
              {school.shortDescription}{" "}
            </p>
          </div>
          <p className="problemsToSolve"> {school.problemsToSolve} </p>
          <div className="otherInfo">
            <p className="detailTechnologies"> {school.technologies} </p>
            <p className="detailTeachers"> {school.teachers} </p>
          </div>
        </div>
      </div>
    );
  }
}
