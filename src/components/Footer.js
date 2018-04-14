import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <footer className="white">
                <div className="container">
                    <div className="col-xs-6 page-font"><span className="pull-left">&copy2018 Mark Goldstein</span></div>
                    <div className="col-xs-6 page-font">
                        <span className="pull-right">
                            <a className="white" href="mailto:mark@markdgold.com" target="_blank"><i className="fa fa-envelope"></i></a>
                            <a className="white" href="https://linkedin.com/in/markdgold" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                            <a className="white" href="https://github.com/markdgold" target="_blank"><i className="fa fa-github-square"></i></a>
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
