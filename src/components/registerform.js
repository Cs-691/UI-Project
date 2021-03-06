import React, {Component} from 'react';
import axios from 'axios';
import validateRegister from './validation.js';
import {Form, Grid, Select, Input, Checkbox, Button, Dropdown, Segment, Header} from 'semantic-ui-react';
import {Link, HashRouter } from 'react-router-dom';
import {push} from 'react-router-redux';

class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      nickname: '',
      email: '',
      password: '',
      confpassword: '',
      age: '',
      disabilities: '',
      conditions: '',
      errors: {},
      gender:'male',
      country:'USA',
      terms: true
    }
    this.changeCountry = this.changeCountry.bind(this);
    this.change = this.change.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

setUser =({user, isUser}) => {
  console.log(user, isUser);
  if(isUser){
    this.setError("user name taken!")
  }
  else{
    this.props.setUser(user)
  }
}
nextPath(path) {
 this.history.push(path);
}

changeCountry(e){
  this.setState({country: e.target.value});
}
toggle(e){
  this.setState({terms: !this.state.terms});
}
change(event){
    this.setState({gender: event.target.value});
}

  onChange(e){
    if (e.target.name === 'terms') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else{
    this.setState({
      [e.target.name] : e.target.value
      });
    }
  }

  valid(){
    const { errors, isValid } = validateRegister(this.state);
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
    debugger;
    let data = JSON.stringify(this.state )
    let p=this.valid()
    if (p) {
    var headers = {
         'Content-Type': 'application/json'
     }
     debugger;
    axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/Adduser',
        data: this.state,
        config: { headers: {'Content-Type': 'application/json' }}
      }).then(function (response) {
        //handle success
        console.log(response.status);
        console.log(response);
        if(response.status==200){
        localStorage.setItem('user', response.data);
        console.log(localStorage.getItem('user'));
      }
      else if (response.status==409) {
        alert("User with given Email ID already exists");
      }

    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
}

  render(){
    let country = [
      { name: 'United States of America', value: 'usa'},
      {name: 'Cananda', value: 'canada'},

    ]
    const createItem = (item, key) =>
      <option
        key={key}
        value={item.value}
      >
        {item.name}
      </option>;
    const {errors} = this.state;
    return(

      <Grid
        textAlign = 'center'
        verticalAlign = 'middle' >
        <Grid.Column style={{maxWidth: 450}}>
      <Form onSubmit = {this.onSubmit}>
        <Header
          as = 'h2'
          color = 'teal'
          textAlign = 'center'>
          Sign-Up With Us!
          </Header>

        <Segment basic>
          <Form.Input
            control = {Input}
            placeholder='First name'
            icon = 'user'
            iconPosition = 'left'
            value = {this.state.firstname}
            onChange = {this.onChange}
            name = "firstname"
            error = {errors.firstname}
          />

          <Form.Input
            control = {Input}
            placeholder='Last name'
            icon = 'user'
            iconPosition = 'left'
            value = {this.state.lastname}
            onChange = {this.onChange}
            name = "lastname"
            error = {errors.lastname}
          />


          <Form.Input
            type = "email"
            placeholder='joe@abc.com'
            icon='mail'
            iconPosition='left'
            value = {this.state.email}
            onChange = {this.onChange}
            name = "email"
            error = {errors.email}
          />

          <Form.Input
            type="password"
            placeholder='Password'
            icon = 'lock'
            iconPosition = 'left'
            value = {this.state.password}
            onChange = {this.onChange}
            name = "password"
            error = {errors.password}
          />

          <Form.Input
            type = "Password"
            placeholder='Confirm Password'
            icon = 'lock'
            iconPosition = 'left'
            value = {this.state.confpassword}
            onChange = {this.onChange}
            name = "confpassword"
            error = {errors.confpassword}
          />

          <Form.Input
            type = "number"
            min = "1"
            max = "110"
            placeholder='Age'
            value = {this.state.age}
            onChange = {this.onChange}
            name = "age"
            error = {errors.age}
          />

          <div>
               <select id="lang" onChange={this.change} value={this.state.value}>

                  <option value="male">Male</option>
                  <option value="female">Female</option>
               </select>
               <p></p>
               <p>{this.state.value}</p>
           </div>

           <div>
                <select id="lang1" onChange={this.changeCountry} value={this.state.value}>
                  {country.map(createItem)}
                </select>
                <p></p>
                <p>{this.state.value}</p>
            </div>


          <Form.Input
            placeholder='Any Disabilities you want to share?'
            value = {this.state.disabilities}
            onChange = {this.onChange}
            name = "disabilities"
          />
          <Form.Input
            placeholder='Any previous medical conditions?'
            value = {this.state.conditions}
            onChange = {this.onChange}
            name = "conditions"
            className = ""
          />
          <Checkbox
            name = "terms"
            checked = {this.state.terms}
            onClick = {this.toggle}
            label='I agree to the Terms and Conditions'
            /><br/><br/>
          <Button color='teal' fluid size='large' ><Link to='/'>Signup </Link></Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  );
  }
}
export default RegisterForm;
