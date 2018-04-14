import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <main className="Main">
          <Switch>
              <Route exact path="/" component={About}/>
              <Route path="/about" component={About}/>
              <Route path="/work" component={Projects}/>
              <Route path="/contact" component={Contact}/>
          </Switch>
      </main>
    );
  }
}

export default Main;
