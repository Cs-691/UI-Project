import React, {Component} from 'react';
import axios from 'axios';
import {Form, Grid, Button, Header, Image, Segment, Message} from 'semantic-ui-react';

class loginform extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3000/home', {userdata : this.state});
  }

  render(){
    return(
      <div className='login-form' >
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
              as='h2'
              color='teal'
              textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit = {this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  type = "email"
                  value = {this.state.email}
                  onChange = {this.onChange}
                  name = "email"
                  placeholder = "joe@abc.com"
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type = "password"
                  value = {this.state.password}
                  onChange = {this.onChange}
                  name = "password"
                  placeholder = "Password"
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              Do not have a Account? <a href='/register'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
    </div>
    );
  }
}
export default loginform;
