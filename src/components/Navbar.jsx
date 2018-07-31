import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='container'>
                    <Link className="navbar-brand" to="/">CustomScripts</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link class="dropdown-item" to="/webdev">Web Development</Link>
                                    <Link class="dropdown-item" to="/scripts">Custom Scripts</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;