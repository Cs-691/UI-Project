import React, {Component} from 'react';
import myImage from '../Assets/images/demo.jpg';
import axios from 'axios';
import { Button, Container,Form, TextArea, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility, Modal}
from 'semantic-ui-react';
import PropTypes from 'prop-types';


export default class userprofile extends Component{

    constructor(props){
      super(props);
      this.state = {
        userdata: []
      }
    }

  componentDidMount() {
    axios.get('https://jasonplaceholder.typicode.com/users')
      .then(res=>{
        console.log(res);
        this.setState({userdate: res.data});
      });
  }

  render(){
    const {userdata} = this.state

    return(
      <div>
          <Grid container stackable verticalAlign='middle' style={{ height: '100%' }}>
              <Grid.Column width={5} style={{marginTop: '2em', height:'550px'}}>
                <Segment raised color='teal' textAlign='center' style={{ height: '100%' }}>
                <Image
                  bordered
                  centered
                  verticalAlign=  'middle'
                  size='medium'
                  style={{
                    marginLeft: '0.1em',
                    marginTop: '1.8em',
                  }}
                  src={myImage}
                />
                <Divider horizontal style={{fontSize: '0.7em'}}>Home Address</Divider>
                <Container textAlign= 'center'>
                  Enter Your Home Address
                  {userdata.paddress}
                </Container>
                <Divider horizontal style={{fontSize: '0.7em'}}>Work Address</Divider>
                  <Container textAlign='center'>
                    Enter your Work Address
                    {userdata.saddress}
                  </Container>
                <Divider section/>
                </Segment>

              </Grid.Column>
              <Grid.Column width = {11} floated='right' style={{maxHeight: '1000',marginLeft:'0em', marginTop: '2em'}}>
              <Segment.Group raised color='teal'>
                <Segment compact='flase' color='teal'>
                <Header
                  as='h2'
                  textAlign= 'center'
                  content= 'Last Name, First Name'
                  styly={{
                    marginTop: '2em',
                  }}/>
                  </Segment>
                  <Divider section style={{marginTop: '0em', marginBottom: '0em'}}/>
                  <Button
                    color='teal'
                    size='tiny'
                    floated='right'
                    style={{
                      fontSize: '0.8em',
                      marginTop: '0.6em',
                      marginRight: '1em'
                    }} >
                    Edit
                    <Icon
                      name='edit'
                      style={{
                        marginLeft:'0.2em'
                      }}/>
                  </Button>
                  <br/><br/>
                  <Divider horizontal style={{marginTop:'0em', fontSize: '0.7em'}}>Contact Information</Divider>
                  <Segment.Group >
                  <Segment>
                  <Container textAlign='left' style={{fontSize: '1em', marginLeft: '12em'}}>
                    Email: {userdata.email}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Phone: {userdata.phone}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Age: {userdata.age}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Gender: {userdata.gender}
                  </Container>
                  </Segment>
                  </Segment.Group>
                  <Divider horizontal style={{ fontSize: '0.7em'}}>Medical Information</Divider>
                  <Segment.Group>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Blood Group: {userdata.bgroup}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Disabilities: {userdata.disabilities}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Previous Medical Conditions: {userdata.pmedical}
                  </Container>
                  </Segment>
                  <Segment>
                  <Container style={{fontSize: '1em', marginLeft: '12em'}}>
                    Allergies: {userdata.allergies}
                  </Container>
                  </Segment>
                  </Segment.Group>
                  </Segment.Group>
              </Grid.Column>
          </Grid>
    </div>
    )
  }
}
