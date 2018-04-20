import React, { Component } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';


class App extends Component {
  componentDidMount(){
    // console.log(document.getElementById('NavBar'));
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(e){
    let scrollTop = e.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
    // console.log(scrollTop);
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
