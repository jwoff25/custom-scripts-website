import React, { Component } from 'react';
import './Contact.css'
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center bg-dark">
					<h1>Contact Us.</h1> 
					<p>Customized scripts to automate boring tasks, fully functional websites built from the ground up, and more. </p> 
					<p><a className="btn btn-primary btn-lg" href="/" role="button">Place an Order &raquo;</a></p>
				</div>
            </div>
        );
    }
}

export default Contact;