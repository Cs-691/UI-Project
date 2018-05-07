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
            <Header as='h2' inverted content='Login To Your Account!' style={{
              marginTop: '15px',
              marginLeft:'20px'
            }}/>
            <Button basic inverted style={{
              marginTop:'370px',
              marginLeft: '180px',
              width:'100px'
            }}>Cancel</Button>
            <Button basic inverted style={{
              marginTop:'370px',
              marginLeft: '20px',
              width:'100px'
            }}>Login</Button>
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
            <Form style={{
              marginTop:'80px'
            }}>
              <Form.Field id='form-input-control-email' control={Input} label= 'Email Address' placeholder='joe@abc.com' /><br/>
              <Form.Field id='form-input-control-password' type = "password" control={Input} label='Password' placeholder='******' />
            </Form>
          </Segment>
        </Container>
      </Grid>
    )
  }
}
export default loginModal
