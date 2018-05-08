import React, {Component} from 'react';
import axios from 'axios';
import {Form, Grid, Button, Header, Image, Segment, Message} from 'semantic-ui-react';
import validationLogin from './validateLogin';
class loginform extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value});
  }

  valid(){
    const { errors, isValid } = validationLogin(this.state);
    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  }
  setError = (error) =>{
    this.setState({error})
  }

  onSubmit=(e)=>{
    this.setState({errors: {}});
    console.log(this.state);
    e.preventDefault();

    let data = JSON.stringify(this.state )
    let p=this.valid()
    if (p) {
    var headers = {
         'Content-Type': 'application/json'
     }
    axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/getUser',
        data: this.state,
        config: { headers: {'Content-Type': 'application/json' }}
      }).then(function (response) {
        //handle success
        if(response.data=="fail"){
          alert("Invalid Password");
        }else{
          alert("Login Successful!")
        }
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
}

  render(){
    const {errors} = this.state;
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
              <Segment raised>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  type = "email"
                  value = {this.state.email}
                  onChange = {this.onChange}
                  name = "email"
                  placeholder = "joe@abc.com"
                  error = {errors.email}
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
                  error = {errors.password}
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment >
            </Form>
            <Segment basic>
              Do not have a Account? <a href='/register'>Sign Up</a>
            </Segment>
          </Grid.Column>
        </Grid>
    </div>
    );
  }
}
export default loginform;
