import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p id="builtwith">Ez az oldal React-tel készült.</p>
        <a href="https://github.com/Nahov91" className="github">GitHub profil</a>
      </div>
    )
  }
}
