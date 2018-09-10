import React, { Component } from 'react'

var backdropStyle = {
  backgroundImage: 'url(http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536314457/mainbackdrop.jpg',
  width: "100%",
  height: "250px",
  backgroundSize: "cover"
};

export default class Backdrop extends Component {
  render() {
    return (
      <div>
        <div className="backdrop" style={backdropStyle} ></div>
      </div>
    )
  }
}
