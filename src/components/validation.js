import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  errors.firstname="";
  errors.lastname="";
  errors.firstname="";
  errors.email="";
  errors.password="";
  errors.confpassword="";
  errors.age="";
  errors.gender="";
  errors.country="";
  errors.nickname="";
  console.log(data);
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'This field is required';
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'This field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.confpassword)) {
    errors.confpassword = 'This field is required';
  }
  if (!Validator.equals(data.password, data.confpassword)) {
    errors.confpassword= 'Passwords does not match';
    errors.password = 'Passwords does not match';
  }
  if (Validator.isEmpty(data.age)) {
    errors.age = 'This field is required';
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'This field is required';
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = 'This field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
