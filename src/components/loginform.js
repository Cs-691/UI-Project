import React, {Component} from 'react';
import axios from 'axios';
import {Form, Grid, Button} from 'semantic-ui-react';

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

      <Grid
        textAlign="center"
        verticalAlign="middle">
        <Grid.Column style = {{maxWidth: 350}}>
        <Form onSubmit = {this.onSubmit}>
        <h2> Login </h2>

        <Form.Input
          type = "email"
          value = {this.state.email}
          onChange = {this.onChange}
          name = "email"
          placeholder = "joe@abc.com"
        />

        <Form.Input
          type = "password"
          value = {this.state.password}
          onChange = {this.onChange}
          name = "password"
          placeholder = "Password"
        />

        <Form.Field
        control={Button}>Submit
        </Form.Field>
        </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
export default loginform;
