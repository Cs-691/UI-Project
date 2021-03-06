import React, {Component} from 'react';
import PropTypes from 'prop-types';
import landingImage from '../Assets/images/homebackground2.jpeg';
import {Image, Grid, Segment, Container, Header, List, Form, Input, TextArea, Button, Modal} from 'semantic-ui-react';
import Registerpop from './registerpop.js';
import {Link} from 'react-router-dom';
class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }
  state = {
    open1:false,
    open2:false
  };

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

  render(){
    const {open1} = this.state;
    const {open2} = this.state;
    const { fixed } = this.state
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <Link to='/layout'/>;
    }
    return(
      <Grid>
        <div className="customContainer">
          <div className="homeBackgrd">
            <Segment style={{ padding: '0'}} vertical textAlign='center'>
              <Container className="backgrndText" text >
                <Header
                  inverted
                  as='h1'
                  content='ILLNESS DIAGNOSIS SYSTEM'
                  style={{
                    color: '#fff',
                    fontSize:'5em',
                    fontWeight: 'bold',
                    marginBottom: '0',
                    marginLeft:'-250px',
                    width: '1250px',
                    marginTop:'0'
                  }}
                />
                <Segment basic>
                <Header
                  as='h2'
                  inverted
                  content='A CLEVER Person Solves a Problem. A WISE Person Avoids It!'
                  style={{
                    fontSize:'2.6em',
                    fontWeight: 'normal',
                    marginTop:'5em',
                  }}
                />
                </Segment>
              </Container>
            </Segment>
          </div>
          <Segment basic>
            <Header as ='h2'
              content='Let Me Identify What is Wrong!'
              textAlign='center'
              style={{
                fontSize: '2.5em',
                marginTop: '1.5em'
              }}
            />
            <Form>
            <Form.Group widths='equal'>
            <Form.Field  id='form-textarea-control-opinion' control={Input} placeholder='I Have a Headace..'
              style={{
                width: '700px',
                marginLeft:'400px',
                marginTop:'1.5em'
              }}/>
              <Form.Field id='form-button-control-public' control={Button} content='Ask Me' color='teal'
                style={{
                  width:'120px',
                  marginTop:'1.5em'
                }}/>
              </Form.Group>
            </Form>
            <div
              style={{
                marginTop: '3em',
                marginLeft:'510px'
              }}>
              <Button size='large' content='Fever' basic style={{marginRight: '1em'}} />
              <Button size='large' content='Cough' basic style={{marginRight: '1em'}}/>
              <Button size='large' content='Running Nose' basic style={{marginRight: '1em'}}/>
              <Button size='large' content='Nausea' basic style={{marginRight: '1em'}}/>
            </div>
            <div
              style={{
                marginTop:'1.5em',
                marginLeft:'507px'
              }}>
              <Button size='large' content='Headace' basic style={{marginRight: '1em'}}/>
              <Button size='large' content='Fatigue' basic style={{marginRight: '1em'}}/>
              <Button size='large' content='Dizziness' basic style={{marginRight: '1em'}}/>
              <Button size='large' content='Diarrhea' basic style={{marginRight: '1em'}}  />
            </div>
          </Segment>
          <Segment attached='bottom' inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>Sitemap</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                      <List.Item as='a'>How Register</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Diagnosis' />
                    <List link inverted>
                      <List.Item as='a'>Get Started</List.Item>
                      <List.Item as='a'>FAQ</List.Item>
                      <List.Item as='a'>How To Access</List.Item>
                    </List>
                  </Grid.Column>
                  
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </div>
      </Grid>
    )
  }
}
function LoginButton(props) {
  return (
    <div>
    <Button onClick={props.onClick}>
      LOGIN
    </Button>
    <Button onClick={props.onClick}>
      SIGNUP
    </Button>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <Button onClick={props.onClick}>
      LOGOUT
    </Button>
  );
}
export default Home
