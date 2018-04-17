import React, {Component} from 'react';
import axios from 'axios';

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
      <div>
        <h2> Login </h2>
        <form onSubmit = {this.onSubmit}>
          <div>
            <label> Email </label>
              <input
                type = "email"
                value = {this.state.email}
                onChange = {this.onChange}
                name = "email"
                className = ""
              />
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
          </div>
          <div>
          <button> LOGIN </button>
          </div>
        </form>
      </div>
    );
  }
}
export default loginform;
