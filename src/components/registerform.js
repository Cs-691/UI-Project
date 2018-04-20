import React, {Component} from 'react';
import axios from 'axios';
import validateInput from './validation.js';
import {Form, Grid, Select, Input, Checkbox, Button, Dropdown} from 'semantic-ui-react';

const sex = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const country = [
  { key: 'usa', text: 'United States of America', value: 'usa'},
  { key: 'can', text: 'Cananda', value: 'canada'},
  { key: 'in', text: 'India', value: 'india'},
  { key: 'ch', text: 'China', value: 'china'},
  { key: 'jp', text: 'Japan', value: 'japan'},
  { key: 'ru', text: 'Russia', value: 'russia'},
  { key: 'uk', text: 'United Kingdom', value: 'uk'},
  { key: 'su', text: 'Sudhan', value: 'sudan'},
  { key: 'ey', text: 'Egypt', value: 'egypt'},
]

class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confpassword: '',
      age: '',
      gender: '',
      country: '',
      disabilities: '',
      conditions: '',
      errors: {},
      terms: true,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e){
    this.setState({errors: {}});
    console.log(this.state);
    e.preventDefault();
    if (this.isValid()) {
      axios.post('http://localhost:3000/home', {userdata : this.state}).then(
        () => {},
        ({data}) =>this.setState({errors: data})
      );
    }
  }


  render(){
    const {errors} = this.state;
    return(

      <Grid
        textAlign = 'center'
        verticalAlign = 'middle' >
        <Grid.Column style={{maxWidth: 350}}>
      <Form onSubmit = {this.onSubmit}>
        <h2> CREATE AN ACCOUNT! </h2>

        <Form.Input
          control = {Input}
          placeholder='First name'
          value = {this.state.firstname}
          onChange = {this.onChange}
          name = "firstname"
          error = {errors.firstname}
        />

        <Form.Input
          control = {Input}
          placeholder='Last name'
          value = {this.state.lastname}
          onChange = {this.onChange}
          name = "lastname"
          error = {errors.lastname}
        />

        <Form.Input
          type = "email"
          placeholder='joe@abc.com'
          value = {this.state.email}
          onChange = {this.onChange}
          name = "email"
          error = {errors.email}
        />

        <Form.Input
          type="password"
          placeholder='Password'
          value = {this.state.password}
          onChange = {this.onChange}
          name = "password"
          error = {errors.password}
        />

        <Form.Input
          type = "Password"
          placeholder='Confirm Password'
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

        <Dropdown
          fluid selection options = {sex}
          placeholder='Gender'
          name = "gender"
          value = {this.state.selectValue}
          onChange={this.onChange}
        />

        <Form.Field
          control= {Select}
          options = {country}
          value = {this.state.country}
          onChange = {this.onChange}
          name = "country"
          placeholder = "Country"
          error = {errors.country}
          />

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
          onChange = {e => this.onChange(e)}
          label='I agree to the Terms and Conditions'
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
export default RegisterForm;
