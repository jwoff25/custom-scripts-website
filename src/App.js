import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Home_jp from './jp/pages/Home_jp.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/jp" component={Home_jp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
