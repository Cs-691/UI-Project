import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Assets/css/style.min.css';

import './Assets/css/style.min.css';
import Head from './components/header2.js';
import Loginpop from './components/loginpop.js';
import Registerpop from './components/registerpop.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Home from './components/home2.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import UserProfile from './components/userprofile.js';
import Diagnosis from './components/diagnosis.js';
import Layout from './Layout.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Head/>
          <Route exact path="/loginpop" component={Loginpop}/>
          <Route exact path="/registerpop" component={Registerpop}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/Layout" component={Layout}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/userprofile" component={UserProfile}/>
          <Route exact path="/diagnosis" component={Diagnosis}/>
        </div>
      </Router>
    );
  }
}

export default App;
