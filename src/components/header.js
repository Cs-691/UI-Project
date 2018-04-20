import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Grid, Responsive, Button } from 'semantic-ui-react'

class Head extends Component{
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentWillMount(){
    localStorage.getItem('pstate') && this.setState({
      activeItem: JSON.parse(localStorage.getItem('pstate'))
    })
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('pstate', JSON.stringify(nextState.activeItem));
  }

  render(){
    const { activeItem } = this.state;
    return(
      <Menu pointing secondary stackable>
        <Menu.Item
          active={activeItem === 'home'}
          name='home'
          onClick={this.handleItemClick}>
            <Link to="/" className = "headeritem">HOME</Link>
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'about'}
          name='about'
          onClick={this.handleItemClick}>
            <Link to="/about" className = "headeritem">ABOUT</Link>
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'contact'}
          name='contact'
          onClick={this.handleItemClick}>
            <Link to="/contact" className = "headeritem">CONTACT</Link>
        </Menu.Item>

         <Menu.Menu position='right'>
             <Responsive
               {...Responsive.onlyMobile}
               as={Menu.Item}
               onClick={this.handleItemClick}
               active={activeItem === 'login'}
               name = "login">
               <Link to="/login" className = "headeritem">LOGIN</Link>
             </Responsive>
             <Responsive
               as={Menu.Item}
               onClick={this.handleItemClick}
               active={activeItem === 'login'}
               name = "login"
               minWidth={Responsive.onlyTablet.minWidth}>
                <Link to="/login" className = "headeritem">LOGIN</Link>
             </Responsive>
             <Responsive
               {...Responsive.onlyMobile}
               as={Menu.Item}
               onClick={this.handleItemClick}
               active={activeItem === 'signup'}
               name = "signup">
                <Link to="/register" className = "headeritem">SIGNUP</Link>
             </Responsive>
             <Responsive
             as={Menu.Item}
             onClick={this.handleItemClick}
             active={activeItem === 'signup'}
             name = "signup"
             minWidth={Responsive.onlyTablet.minWidth}>
              <Link to="/register" className = "headeritem">SIGNUP</Link>
             </Responsive>
         </Menu.Menu>
     </Menu>
    );
  }
}
export default Head;
