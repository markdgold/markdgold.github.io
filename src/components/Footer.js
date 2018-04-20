import React, { Component } from 'react';

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            year: ''
        }
    }
    setYear(){
        console.log(new Date().getFullYear())
        this.setState({year: new Date().getFullYear()})
    }
    componentDidMount(){
        this.setYear()
    }
    
    render() {
        return(
            <footer className="Footer">
                <div className="container-fluid">
                    <div className="pull-left">{'\u00A9'} {this.state.year} Mark Goldstein</div>
                    <div className="pull-right">
                        <a href="mailto:mark@markdgold.com" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href="https://linkedin.com/in/markdgold" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                        <a href="https://github.com/markdgold" target="_blank"><i className="fa fa-github-square"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
