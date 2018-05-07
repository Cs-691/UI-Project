import React , {Component} from 'react';
import {Grid, Image, Icon, Container, Menu, Segment, Responsive,Visibility, Modal, Button}
from 'semantic-ui-react';
import aboutImage from '../Assets/images/about.png';
import heart from '../Assets/images/heart.png';
import contactImage from '../Assets/images/contact.png';
import contact from '../Assets/images/contact-hidden.png';
import diagnosisImage from '../Assets/images/diagnosis.png';
import loginImage from '../Assets/images/login.png';
import about from '../Assets/images/about-hidden.png';
import registerImage from '../Assets/images/register.png';
import {Link} from 'react-router-dom';

class Header extends Component{

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  state = {
    open1:false,
    open2:false,
    activeItem:''
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
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

  render(){
    const { fixed } = this.state
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    const {open1} = this.state;
    const {open2} = this.state;
      return(
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}>
            <div
              textAlign='center'
              style={{
                minheight: 70,
                padding: '0.2em 0em'
              }}
              >
              <Menu
                secondary
                fixed={fixed ? 'top' : null}
                pointing={!fixed}
                size='large'>
                <Menu.Menu position='left'>
                  <Menu.Item>
                    <Modal
                      basic
                      style={{
                      height: '250px',
                      width: '1000px'
                      }}
                      trigger={
                      <Button animated basic>
                        <Button.Content visible>
                          <Icon name='sidebar' size='big'/>
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name='right arrow' />
                        </Button.Content>
                      </Button>}>
                      <div style={{display: 'block'}}>
                        <Modal.Content>
                        <Button
                          inverted
                          animated='fade'
                          basic
                          style={{
                            float: 'left'
                          }}onClick={this.handleItemClick}>
                          <Button.Content visible>
                            <Image
                              size='small'
                              src = {aboutImage}
                            />
                          </Button.Content>
                          <Button.Content hidden>
                          <Image
                            centered
                            size='small'
                            src = {about}
                          />
                          </Button.Content><br/>
                            <Link to="/about" className = "headeritem">About</Link>
                        </Button>
                          <Button
                            inverted
                            animated='fade'
                            basic
                            style={{
                              float: 'left'
                            }}>
                            <Button.Content visible>
                              <Image
                                size='small'
                                src = {contactImage}
                              />
                            </Button.Content>
                            <Button.Content hidden>
                            <Image
                              centered
                              size='tiny'
                              src = {contact}
                            />
                            </Button.Content><br/>
                            Contact-Us
                          </Button>
                          <Button
                            inverted
                            animated='fade'
                            basic
                            style={{
                              float: 'left'
                            }}>
                            <Button.Content visible>
                              <Image
                                size='small'
                                src = {diagnosisImage}
                              />
                            </Button.Content>
                            <Button.Content hidden>
                            <Image
                              centered
                              size='tiny'
                              src = {heart}
                            />
                            </Button.Content><br/>
                            Diagnosis
                          </Button>
                          {button}
                        </Modal.Content>
                      </div>
                    </Modal>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </div>
          </Visibility>
        </Responsive>
      )
  }
}
function LoginButton(props) {
  return (
    <div>
    <Button
      inverted
      animated='fade'
      basic
      style={{
        float: 'left'
      }}>
      <Button.Content visible>
        <Image
          size='small'
          src = {loginImage}
        />
      </Button.Content>
      <Button.Content hidden>
        <Icon name='sign in'
          size='huge'
          style={{marginTop:'0'}}/>
      </Button.Content><br/>
      Sign-In
    </Button>
    <Button
      inverted
      animated='fade'
      basic
      style={{
        float: 'left'
      }}>
      <Button.Content visible>
        <Image
          size='small'
          src = {registerImage}
        />
      </Button.Content>
      <Button.Content hidden>
        <Icon name='signup'
          size='huge'
          style={{
            marginTop:'0',
            padding: '0'
          }}/>
      </Button.Content><br/>
      Sign-In
    </Button>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <Button
      inverted
      animated='fade'
      basic
      style={{
        float: 'left'
      }}>
      <Button.Content visible>
        <Image
          size='small'
          src = {registerImage}
        />
      </Button.Content>
      <Button.Content hidden>
        <Icon name='signup'
          size='huge'
          style={{
            marginTop:'0',
            padding: '0'
          }}/>
      </Button.Content><br/>
      Account
    </Button>
  );
}
export default Header
