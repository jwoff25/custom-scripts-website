import React, { Component } from 'react';
import './Home.css'
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Order extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center bg-dark">
					<h1>Order Here.</h1> 
					<p>Customized scripts to automate boring tasks, fully functional websites built from the ground up, and more. </p> 
					<p><a className="btn btn-primary btn-lg" href="/" role="button">Place an Order &raquo;</a></p>
				</div>
            </div>
        );
    }
}

class Intro extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Order;