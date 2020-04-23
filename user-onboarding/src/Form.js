import React from 'react'
import {Styles} from './Styles'

const Form = (props) => {

  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    ////////// NEW PROPS FOR TODAY //////////
    disabled,
    errors,
  } = props

  console.log(values)

  return (
    <Styles>
    <form className='friend container'>
      <h1>Friend Form</h1>
      {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
      <div className='errors'>
        
      </div>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Username:&nbsp;
      <p className="errors">{errors.username}</p>
      <input
          value={values.username}
          onChange={onInputChange}
          name='username'
          type='text'
        /></label>
      
      <label>Email:&nbsp;
      <p className="errors">{errors.email}</p>
      <input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>
      
        <label>Password:&nbsp;
        <p className="errors">{errors.password}</p>
        <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
          /></label>

      {/* ////////// CHECKBOXES ////////// */}
        <label><input
          
        checked={values.termsOfService}
        onChange={onCheckboxChange}
        name='termsOfService'
        type="checkbox" />Accept Terms of Service</label>    

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
      </form>
      </Styles>
  )
}
  
export default Form