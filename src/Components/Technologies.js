import React, { Component } from "react";
import * as Data from "../data";

export default class Technologies extends Component {
  render() {
    return (
      <div id="technologyComponent">
        <h2 className="categoryHeading"> Ismert technológiák </h2>
        <ul className="technologyList" >
          {Data.technologies.map(technology => (
            <li key={technology.name} className="technologyItem">
              <img
                src={technology.technologyImage}
                alt=""
                className="technologyImage"
              />
              <h6 className="technologyName"> {technology.name} </h6>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
