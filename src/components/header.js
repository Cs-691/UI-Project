import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoginForm from './loginform.js';
import {Link} from 'react-router-dom';
import RegisterForm from './registerform.js';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility, Modal}
from 'semantic-ui-react';


class DesktopContainer extends Component {
  state = {
    open1:false,
    open2:false,
    activeItem:''
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentWillMount(){
let currentState=localStorage.getItem('pstate');
    this.setState({ activeItem: currentState})
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('pstate', nextState.activeItem);
  }

  onOpenModal(i) {
    if(i===1){
  this.setState({open1:true})  ;
  }
  else {
    this.setState({open2:true}) ;
  }
};

onCloseModal = (i) => {
  if(i===1){
  this.setState({open1:false})  ;
  }
  else {
  this.setState({open2:false}) ;
  }
  };

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { activeItem } = this.state;
    const {open1} = this.state;
    const {open2} = this.state;
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ height: 65, padding: '0.2em 1.5em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'
                  active={activeItem === 'home'}
                  name='home'
                  onClick={this.handleItemClick}>
                    <Link to="/" className = "headeritem">Home</Link>
                  </Menu.Item>
                <Menu.Item as='a'
                  active={activeItem === 'about'}
                  name='about'
                  onClick={this.handleItemClick}>
                    <Link to="/about" className = "headeritem">About</Link>
                </Menu.Item>
                <Menu.Item as='a'
                  active={activeItem === 'diagnosis'}
                  name='diagnosis'
                  onClick={this.handleItemClick}>
                    <Link to="/diagnosis" className = "headeritem">Diagnosis</Link>
                </Menu.Item>
                <Menu.Item as='a'
                  active={activeItem === 'contact'}
                  name='contact'
                  onClick={this.handleItemClick}>
                    <Link to="/contact" className = "headeritem">Contact</Link>
                </Menu.Item>

                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} color='teal' style={{ marginLeft: '0.5em' }} onClick={() => this.onOpenModal(1)}>Login</Button>
                  <Modal size = {'tiny'} open={open1} onClose={() => this.onCloseModal(1)} closeIcon = {true} >
                  <div>
                  <br/><br/>
                  <LoginForm />
                  <br/>
                  </div>
                  </Modal>
                  <Button as='a' inverted={!fixed} color = 'teal'  style={{ marginLeft: '0.5em' }} onClick={() => this.onOpenModal(2)}>Sign Up</Button>
                  <Modal size = {'tiny'} open={open2} onClose={() => this.onCloseModal(2)}  >
                  <div>
                  <br/><br/>
                  <RegisterForm />
                  <br/>
                  </div>
                  </Modal>
                  </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {
    open1 : false,
    open2 : false
  }

  onOpenModal(i) {
    if(i===1){
  this.setState({open1:true})  ;
  }
  else {
    this.setState({open2:true}) ;
  }
};

onCloseModal = (i) => {
  if(i===1){
  this.setState({open1:false})  ;
  }
  else {
  this.setState({open2:false}) ;
  }
  };

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const {open1} = this.state;
    const {open2} = this.state;
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>
            <Menu.Item as='a'>Diagnosis</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} >
            <Segment inverted textAlign='center' style={{ maxHeight: 70, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted onClick={() => this.onOpenModal(1)}>Log in</Button>
                    <Modal size = {'tiny'} open={open1} onClose={() => this.onCloseModal(1)} closeIcon = {true} >
                    <div>
                    <br/><br/>
                    <LoginForm />
                    <br/>
                    </div>
                    </Modal>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={() => this.onOpenModal(2)}>Sign Up</Button>
                    <Modal size = {'tiny'} open={open2} onClose={() => this.onCloseModal(2)} closeIcon ={true} >
                    <div>
                    <br/><br/>
                    <RegisterForm />
                    <br/>
                    </div>
                    </Modal>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const headder = () => (
  <ResponsiveContainer/>
)

export default headder
