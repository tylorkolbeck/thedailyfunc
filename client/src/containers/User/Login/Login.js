import React from 'react'
import './Login.css'

export default function Login({ inputHandler, loginFormData, userCreated, formSubmit, stayLoggedIn, error }) {
  const userCreatedMessage = userCreated ? <p>User has been created. Please login.</p> : null
  
  return (
    <div>
        <h2>Login</h2>
        {error ? <p className="form-error-msg">{error}</p> : null}
        {userCreatedMessage}
        <form>
          <div>
            <p>Email</p>
            <input
              type="email"
              value={loginFormData.email}
              onChange={(e) => inputHandler(e.target.value, 'email')}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              value={loginFormData.password}
              onChange={(e) => inputHandler(e.target.value, 'password')}
            />
         </div>
         <div className="Login__staySignedIn-container">
           <p>Keep me signed in?</p>
           <input type="checkbox" checked={stayLoggedIn} onChange={(e) => inputHandler(e.target.value, 'stayLoggedIn')}></input><span>Uncheck if using a public device.</span>
          
         </div>
          <button onClick={(e) => formSubmit(e)}>Login</button>
        </form>
    </div>
  )
}
