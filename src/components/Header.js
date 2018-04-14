import React, { Component } from 'react';
import background from '../assets/images/as8nzKo.jpg'

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: `url("${background}")`}}>
        <div className="title-bar">
          <h1>Mark Goldstein</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    );
  }
}

export default Header;
