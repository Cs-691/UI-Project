import React, { Component} from 'react';
import RegisterForm from './registerform';
import io from 'socket.io-client'
import {Grid, Image} from 'semantic-ui-react';
import backgroundImage from '../Assets/images/demo.jpg';

class Register extends Component{
  render(){
    return(
      <Grid>
      <Grid.Column width={8} >
        <div>
        <Image

          centered
          size='large'
          style={{
            width:'800px',
            height:'800px'
          }}
          src = {backgroundImage}/>
        </div>
      </Grid.Column>
      <Grid.Column width={8} floated='right'>
      <div>
      <RegisterForm/>
      </div>
      </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
