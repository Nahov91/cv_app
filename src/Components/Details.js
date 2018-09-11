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
        console.log(school.courseName);
        this.setState({
          school: school
        });
      }
    });
  }

  render() {
    const { school } = this.state;
    return (
      <div>
        <Backdrop />
        <h1 className="schoolDetailName"> {school.schoolName} </h1>
        <h5 className="courseDetailName"> {school.courseName} </h5>
        <h5 className="courseDetailDuration"> {school.courseDuration} </h5>
        <img
          className="schoolDetailImage"
          src={school.schoolImage}
          alt={school.schoolName}
        />
        <p className="shortDetailDescription"> {school.shortDescription} </p>
        <p className="problemsToSolve"> {school.problemsToSolve} </p>
        <p className="detailTechnologies"> {school.technologies} </p>
        <p className="detailTeachers"> {school.teachers} </p>
      </div>
    );
  }
}
