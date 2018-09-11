import React, { Component } from "react";
import Backdrop from "./Backdrop";
import * as Data from "../data";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: {}
    };
  }

  componentDidMount() {
    Data.schools.filter(school => {
      if (school.url === this.props.match.params.url) {
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
        <img
          className="schoolDetailImage"
          src={school.schoolImage}
          alt={school.schoolName}
        />
        <div className="detailsWrapper">
          <div className="introductionWrapper">
            <h1 className="courseDetailName"> {school.courseName} </h1>
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
