import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount(){
        console.log('Contact Mounted')
    }
    render() {
        return (
            <div className="Contact">
                <div id="contact-wrapper" className="contact-wrapper container-fluid">
    <h2 className="row letter-spaced">Contact Me</h2>
    <div className="row contact">
        <div className="col-md-6 col-xs-12 contact-info">
            <div className="row">
                <span><a href="mailto:mark@markdgold.com"><i className="fa fa-envelope"></i> mark@markdgold.com</a></span>
            </div>
            <br/>
            <div className="row">
                <span><a href="http://linkedin.com/in/markdgold" target="_blank"><i className="fa fa-linkedin-square"></i> markdgold</a></span>
            </div>
            <br/>
            <div className="row">
                <span><a href="http://github.com/markdgold" target="_blank"><i className="fa fa-github-square"></i> markdgold</a></span>
            </div>
        </div>
        <div className="contact-form-div col-md-6 col-xs-12">
            <form method="POST" action="https://formspree.io/mark@markdgold.com">
                <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input className="form-control" type="text" name="name"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Your Email</label>
                    <input className="form-control" type="email" name="_replyto"/>
                </div>
                <div className="form-group col-xs-12">
                    <label>Your message</label>
                    <textarea rows="6" className="form-control" name="message"></textarea>
                </div>
                <div className="form-group col-xs-3">
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </div>
</div>

            </div>
        );
    }
}

export default Contact;
