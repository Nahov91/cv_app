import React, { Component } from "react";
import * as Data from "../data.js";
import Backdrop from "./Backdrop";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: {}
    };
  }


  componentDidMount() {
    this.setState( {
     myProfile : Data.myProfile
    })
  }

  render() {
    return (
      <div>
        <Backdrop background={this.state.myProfile}/>
        <div id="card">
          <img id="profileIMG" src="http://res.cloudinary.com/nahov91/image/upload/f_auto,fl_any_format,q_auto:best/v1536314979/profile.jpg" alt="profilkép" />
          <div id="profileName">
          <h1> {Data.myProfile.name} </h1>
          </div>
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
