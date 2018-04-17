import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import RegisterForm from './registerform';

class Register extends Component{
  render(){
    return(
      <div>
      <RegisterForm/>
      </div>
    );
  }
}

export default Register;
