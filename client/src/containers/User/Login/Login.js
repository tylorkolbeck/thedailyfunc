import React, { useState } from 'react'

export default function Login({ inputHandler, loginFormData, userCreated, formSubmit }) {
  const [errors, setErrors] = useState([])

  const userCreatedMessage = userCreated ? <p>User has been created. Please login.</p> : null

  const clearErrors = () => {
    setErrors([])
  }

  const showErrors = () => {
    let formattedErrorArray = []
    errors.forEach((err) => {
      formattedErrorArray.push(<p>{err}</p>)
    })

    return formattedErrorArray
  }

  return (
    <div>
        <h1>Login</h1>
        {/* PUT ERROR MESSAGES HERE THAT ARE RETURNED FROM THE SERVER */}
        {/* PUSH ERRORS TO THE ERROR ARRAY AND SEND BACK TO INDEX */}
        {showErrors()}
        {userCreatedMessage}
        <form>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={loginFormData.email}
              onChange={(e) => inputHandler(e.target.value, 'email')}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={loginFormData.password}
              onChange={(e) => inputHandler(e.target.value, 'password')}
              placeholder="Enter Password"
            />
          </div>
          <button onClick={(e) => formSubmit(e)}>Login</button>
        </form>
    </div>
  )
}
