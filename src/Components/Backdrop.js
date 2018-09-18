import React, { Component } from 'react'



export default class Backdrop extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
    
  }

  render() {
    let background = this.props.background.backdropBg
    let backdropStyle = {
      backgroundImage: `url(${background})`,
      width: "100%",
      height: "250px",
      backgroundSize: "cover"
    };
    return (
      <div>
        <div className="backdrop" style={backdropStyle} ></div>
      </div>
    )
  }
}
