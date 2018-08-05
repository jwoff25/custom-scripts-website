import React, { Component } from 'react';
import './Webpage.css'
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Webpage extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron bg-dark">
                    <div class="container text-center">
                      <h2 class="display-6">A Website For Your Ideas</h2>
                      <p></p>
                    </div>
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
                <div className="row">
                    <div className="col-sm-8">
                    </div>
                    <div className="col-sm-4">
                        <span className="fab fa-wordpress fa-10x"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Webpage;