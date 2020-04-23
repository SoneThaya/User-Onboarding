import React, {useState, useEffect} from 'react';
import Form from './Form'
import User from './User'

import './App.css';

import axios from 'axios'
import * as yup from 'yup'

const url = 'https://reqres.in/api/users'

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

const formSchema = yup.object().shape({
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
    .required('Required')
})

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true)

  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUser = () => {
    axios.get(url)
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      
      .then(valid => {
        
        setFormDisabled(!valid)
       
      })
  }, [formValues])

  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      termsOfService: formValues.termsOfService,
    }

    postUser(newUser)
    setFormValues(initialFormValues)
  }

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        console.log(err)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    
    setFormValues({
      ...formValues,
      [name]: value,
      })
  }

  const onCheckboxChange = e => {
    const { name } = e.target
    const isChecked = e.target.checked

    setFormValues({
      ...formValues,
      // terms: formValues.termsOfService,
      [name]: isChecked,
    })
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
      />
      
      {
        users.map(user => {
          return (
            <User key={user.id} props={user} />
          )
        })
     }
      
    </div>
  );
}

export default App;
