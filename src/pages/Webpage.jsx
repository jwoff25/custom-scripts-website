import React, { Component } from 'react';
import './Webpage.css'
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Webpage extends Component {
    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Web Development</h1>
                    <p className="lead font-weight-normal">Get your own personal website made fast and cheap. Read below for details and instructions.</p>
                </div>
                <Description />
            </div>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <div className="container">
                
            </div>
        );
    }
}

export default Webpage;