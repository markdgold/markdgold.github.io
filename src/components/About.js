import React, { Component } from 'react';
import Header from './Header'

import iceland from '../assets/images/icelandcropsmall.png';

class About extends Component {
  componentDidUpdate(){
    console.log(this.props)
    this.checkIfAbout();
  }
  componentDidMount(){
    this.checkIfAbout();
  }

  checkIfAbout(){
    if (this.props.location.pathname==='/about'){
      this.refs.about.scrollIntoView({behavior: 'smooth'})
    }
  }

  render() {
    return (
      <div className="About">
        <Header />
        <div ref="about">
          <div id="about-wrapper" className="about container-fluid">
            <div className="about-div row">
              <div className="about-text col-md-6 col-sm-5 col-xs-12">
                <h2 className="letter-spaced">About Me</h2>
                <p>Full-stack web developer based in Seattle, WA. Influenced by my background in astrophysics and Engineering, I am constantly striving to find the elegant solution for any problem. Intrigued by functionality, efficiency and responsive design.</p>
                <hr/>
                <p>In my spare time I can be found in the outdoors, climbing rocks.</p>
              </div>
              <div className="about-image pull-right">
                <img className="iceland-image" src={iceland} alt=""/>
              </div>
            </div>
            <div className="skills row ">
             <div className="skills container">
                <div className="row">
                  <h2 className="letter-spaced">Skills</h2>
                </div>
                <div className="row">
                  <div className="col-md-4 skill-group">
                    <p>
                      LANGUAGES
                      <br/>HTML5, CSS3, Sass/LESS, JavaScript, SQL, Ruby, TypeScript
                    </p>
                  </div>
                  <div className="col-md-4 skill-group">
                    <p>
                      FRAMEWORKS
                      <br/>Angular 2/5, Vue.js, React, AngularJS, Rails, Express, Node
                    </p>
                  </div>
                  <div className="col-md-4 skill-group">
                    <p>
                      LIBRARIES
                      <br/>Bootstrap, Bcrypt, Passport, jQuery, Materialize
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 skill-group">
                      <p>
                        DATABASES
                        <br/>NoSQL, Mongoose, MongoDB, Sequelize, PostgreSQL
                      </p>
                  </div>
                  <div className="col-md-4 skill-group">
                    <p>
                        OTHER
                        <br/>Agile, JWT, AJAX, Authentication, Encryption, Git, VSTS, Grunt, gulp.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
