import React from 'react'
import './Login.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import CheckBox from '../../../components/UI/CheckBox/CheckBox'

export default function Login({ inputHandler, loginFormData, userCreated, formSubmit, stayLoggedIn, error, loading, toggleStayLoggedIn }) {
  
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
           <CheckBox checked={stayLoggedIn} onClick={toggleStayLoggedIn}/>    
         </div>
          {loading ? <Spinner /> : <button onClick={(e) => formSubmit(e)}>Login</button>}
        </form>
    </div>
  )
}
