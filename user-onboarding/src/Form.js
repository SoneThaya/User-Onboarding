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

  return (
    <Styles>
    <form className='friend container'>
      <h2>Friend Form</h2>
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
            type='text'
          /></label>
     

      {/* ////////// CHECKBOXES ////////// */}
      <label><input
        
        onChange={onCheckboxChange}
        name='terms'
        type="checkbox" />Accept Terms of Service</label>
      

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
      </form>
      </Styles>
  )
}
  


export default Form