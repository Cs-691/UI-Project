import React, {Component} from 'react';
import axios from 'axios';
import validateInput from './validation.js';

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
      ethnicity: '',
      disabilities: '',
      conditions: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value});
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
      <form onSubmit = {this.onSubmit} >
        <h2> Register </h2>

        <div>
          <label> First Name </label>
            <input
              type = "text"
              value = {this.state.firstname}
              onChange = {this.onChange}
              name = "firstname"
              className = ""
            />
            {errors.firstname && <span> {errors.firstname}</span>}
        </div>

        <div>
          <label> Last Name </label>
            <input
              type = "text"
              value = {this.state.lastname}
              onChange = {this.onChange}
              name = "lastname"
              className = ""
            />
            {errors.lastname && <span> {errors.lastname}</span>}
        </div>

        <div>
          <label> Email </label>
            <input
              type = "email"
              value = {this.state.email}
              onChange = {this.onChange}
              name = "email"
              className = ""
            />
            {errors.email && <span> {errors.email}</span>}
        </div>

        <div>
          <label> Password </label>
            <input
              type = "password"
              value = {this.state.password}
              onChange = {this.onChange}
              name = "password"
              className = ""
            />
            {errors.password && <span> {errors.password}</span>}
        </div>

        <div>
          <label> Confirm Password </label>
            <input
              type = "password"
              value = {this.state.confpassword}
              onChange = {this.onChange}
              name = "confpassword"
              className = ""
            />
            {errors.confpassword && <span> {errors.confpassword}</span>}
        </div>

        <div>
          <label> age </label>
            <input
              type = "number"
              min ="1"
              value = {this.state.age}
              onChange = {this.onChange}
              name = "age"
              className = ""
            />
            {errors.age && <span> {errors.age}</span>}
        </div>

        <div>
          <label> Gender </label>
            <select
              type = "text"
              value = {this.state.gender}
              onChange = {this.onChange}
              name = "gender"
              className = ""
            >
            <option value ="" disabled> Choose your gender </option>
            <option name = "male"> Male </option>
            <option name = "female"> Female </option>
            </select>
            {errors.gender && <span> {errors.gender}</span>}
        </div>

        <div>
          <label> Ethnicity </label>
            <input
              type = "text"
              value = {this.state.ethnicity}
              onChange = {this.onChange}
              name = "ethnicity"
              className = ""
            />
            {errors.ethnicity && <span> {errors.ethnicity}</span>}
        </div>

        <div>
          <label> Disabilities </label>
            <input
              type = "text"
              value = {this.state.disabilities}
              onChange = {this.onChange}
              name = "disabilities"
              className = ""
            />
        </div>

        <div>
          <label> Previous Medical Conditions </label>
            <input
              type = "text"
              value = {this.state.conditions}
              onChange = {this.onChange}
              name = "conditions"
              className = ""
            />
        </div>

        <div>
          <button> SIGN UP </button>
        </div>

      </form>
    );
  }
}
export default RegisterForm;
