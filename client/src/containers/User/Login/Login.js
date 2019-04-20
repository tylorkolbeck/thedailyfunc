import React from 'react'

export default function Login({ inputHandler, loginFormData, userCreated, formSubmit, error }) {
  const userCreatedMessage = userCreated ? <p>User has been created. Please login.</p> : null
  
  return (
    <div>
        <h1>Login</h1>
        {error ? <p>{error}</p> : null}
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
