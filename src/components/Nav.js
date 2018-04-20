import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import background from '../assets/images/as8nzKo.jpg'


class Nav extends Component {
  componentDidMount(){
    // this.handleScroll
  }

  handleScroll(e){
    console.log(this.refs.NavBar.scrollTop)
  }

  render() {
    return (
      <div className="Nav" id="NavBar" ref="NavBar">
        <div className="nav-bar container-fluid" style={{backgroundImage: `url("${background}")`}}>
            <h1 className="deleteH1">Mark Goldstein</h1>
            <span><NavLink to="/about" activeClassName="active">About</NavLink></span>
            <span><NavLink to="/work" activeClassName="active">Work</NavLink></span>
            <span><NavLink to="/contact" activeClassName="active">Contact</NavLink></span>
            <span><a href="https://drive.google.com/open?id=1qCrPBaTfa9UFX4nbyTQ1ya6TZZDPFmCX" >Resume</a></span>
        </div>
      </div>
    );
  }
}

export default Nav;
