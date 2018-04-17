import React, { Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react'

export default class Head extends Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }
 )
 redirect(to) {
    browserHistory.push({
       pathname: to
    });
}
  render(){
    const { activeItem } = this.state;
    return(
      <div>
       <Menu tabular>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={(event, itemProps) => this.redirect(itemProps.name)}>HOME</Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={() => BrowserRouter.push('/about')}>ABOUT</Menu.Item>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}><Link to={"/"+this.state.activeItem}>CONTACT</Link></Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}><Link to="/login">LOGIN</Link></Menu.Item>
          <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}s><Link to="/register">SIGNUP</Link></Menu.Item>

        </Menu>
      </div>

    );
  }
}
