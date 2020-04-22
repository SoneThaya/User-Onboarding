import React from 'react'

function User({props}) {
  if (!props) {
    return <h3>fetching.....</h3>
  }

  return (
    <div className="user-container">
      <img src={props.avatar} alt={props.first_name} />
      <h2>name: {props.first_name} {props.last_name}</h2>
      <p>email: {props.email}</p>
      <p>password: {props.password}</p>
      <p>Terms: {props.termsOfService ? 'yes' : 'no'}</p>
    </div>
  )
}

export default User