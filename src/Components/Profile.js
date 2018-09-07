import React, { Component } from "react";
import * as Data from "../data.js";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div id="card">
          <img id="profileIMG" src="http://res.cloudinary.com/nahov91/image/upload/f_auto,fl_any_format,q_auto:best/v1536314979/profile.jpg" alt="profilkép" />
          <div id="mail">
            <img id="mailIcon"  src="http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536314978/mailicon.png" alt="email" />
            <p id="mail-data">{Data.myProfile.email}</p>
          </div>
          <div id="location">
            <img id="locatioIcon" src="http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536314978/locationicon.png" alt="location pin" />
            <p id="locationData" >{Data.myProfile.location}</p>
          </div>
          <div id="tags">
            <p>
            {Data.myProfile.tags}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
