import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './loginform';

class Login extends Component{
  render(){
    return(
      <div>
      <LoginForm/>
      </div>
    );
  }
}

export default Login;
