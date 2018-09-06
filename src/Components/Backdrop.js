import React, { Component } from 'react'
import maindrop from '../image/mainbackdrop.jpg';

var backdropStyle = {
  backgroundImage: 'url(' + maindrop + ')',
  width: "100%",
  height: "250px",
  backgroundSize: "cover"
};

export default class Backdrop extends Component {
  render() {
    return (
      <div>
        <div style={backdropStyle} ></div>
      </div>
    )
  }
}
