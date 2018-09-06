import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CustomScripts from './pages/CustomScripts.jsx';
import Order from './pages/Order.jsx';
import Contact from './pages/Contact.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/scripts" component={CustomScripts} />
          <Route path="/order" component={Order} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
