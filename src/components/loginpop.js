import React from 'react';
import {Grid, Container, Segment, Form, Input, Header, Button} from 'semantic-ui-react';
import LoginForm from './loginform.js';
class loginModal extends React.Component{
  render(){
    return(
      <Grid>
        <Container>
          <Segment
            className="ui secondary popbck"
            basic
            style={{
              marginLeft: '200px',
              float:'left',
              height: '500px',
              width: '450px',
              marginTop:'10px'
            }}>
          </Segment>
          <Segment
            className="ui secondary popfrt"
            raised
            style={{
              float:'left',
              height: '350px',
              width: '450px',
              marginTop:'90px',
              marginLeft:'-400px'
            }}>
            <LoginForm/>
          </Segment>
        </Container>
      </Grid>
    )
  }
}
export default loginModal
