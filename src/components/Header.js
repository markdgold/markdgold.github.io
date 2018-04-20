import React, { Component } from 'react';
import background from '../assets/images/as8nzKo.jpg'

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: `url("${background}")`}}>
        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-5Ocm6pB-LY?rel=0&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;iv_load_policy=3&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
        <div className="title-bar">
          <h1>Mark Goldstein</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    );
  }
}

export default Header;
