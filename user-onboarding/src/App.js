import React from 'react';
import Form from './Form'

import './App.css';

import axios from 'axios'
import * yup from 'yup'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}

const formSchema = yup.object.shape({
  username: yup
    .string()
    .min(3, 'Need at least 3 characters')
    .required('Username is required'),
  email: yup
    .string()
    .email('a VALID email is required')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'Password needs to be at least 6 characters')
    .required('Password is required'),
  termsOfService: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
})

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
