import React from 'react'

function User({props}) {
  if (!props) {
    return <h3>fetching.....</h3>
  }

  return (
    <div className="user-container">
    
      <h2>Name: {props.username}</h2>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
      <p>Terms: {props.termsOfService ? 'yes' : 'no'}</p>
    </div>
  )
}

export default User