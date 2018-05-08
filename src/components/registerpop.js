import React from 'react';
import {Grid, Container, Segment, Form, Input, Header, Button} from 'semantic-ui-react';
import RegisterForm from './registerform.js';
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
              height: '790px',
              width: '500px',
              marginTop:'10px'
            }}>
          </Segment>
          <Segment
            className="ui secondary popfrt"
            raised
            style={{
              float:'left',
              height: '700px',
              width: '450px',
              marginTop:'50px',
              marginLeft:'-400px'
            }}>
            <RegisterForm/>
          </Segment>
        </Container>
      </Grid>
    )
  }
}
export default loginModal
