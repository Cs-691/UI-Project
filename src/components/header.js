import React, { Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react'

export default class Head extends Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }


 )
  render(){
    const { activeItem } = this.state;
    return(
      <div>
       <Menu tabular>
          <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}><Link to={"/"+this.state.activeItem}>HOME</Link></Menu.Item>
          <Menu.Item name='about' active={this.state.activeItem === 'about'} onClick={this.handleItemClick}><Link to={"/"+this.state.activeItem}>ABOUT</Link></Menu.Item>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}><Link to={"/"+this.state.activeItem}>CONTACT</Link></Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}><Link to="/login">LOGIN</Link></Menu.Item>
          <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}s><Link to="/register">SIGNUP</Link></Menu.Item>

        </Menu>
      </div>

    );
  }
}
