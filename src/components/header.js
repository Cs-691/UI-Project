import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        <div className="headerele">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
        </div>
      </div>
    );
  }
}

export default Header;
