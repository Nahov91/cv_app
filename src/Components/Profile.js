import React, { Component } from "react";
import * as Data from "../data.js";
import profileIMG from "../image/profile.jpg";
import mailicon from "../image/mailicon.png";
import locationicon from "../image/locationicon.png";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div id="card">
          <img id="profileIMG" src={profileIMG} alt="profilkép" />
          <div id="mail">
            <img id="mailIcon"  src={mailicon} alt="email" />
            <p id="mail-data">{Data.myProfile.email}</p>
          </div>
          <div id="location">
            <img id="locatioIcon" src={locationicon} alt="location pin" />
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
