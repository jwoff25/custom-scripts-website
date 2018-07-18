import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Webpage from './pages/Webpage.jsx';
import CustomScripts from './pages/CustomScripts.jsx';
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
          <Route path="/webdev" component={Webpage} />
          <Route path="/scripts" component={CustomScripts} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;