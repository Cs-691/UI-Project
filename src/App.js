import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Head from './components/header.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
