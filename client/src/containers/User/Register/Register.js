import React from 'react'

export default function Register({ goToLogin, inputHandler, regFormData, submitForm }) {
  
  let regFormErrors = regFormData.errors.map(error => {
    return <p className="form-error-msg" key={error.msg}>{error.msg}</p>
  })

  return (
    <div className="Register__container">
        <h2>
          Register
        </h2>
        {regFormErrors}
        <form>
          <div>
            <p>Name</p>
            <input
              type="text"
              value={regFormData.name}
              onChange={(e) => inputHandler(e.target.value, 'name')}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              value={regFormData.email}
              onChange={(e) => inputHandler(e.target.value, 'email')}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              value={regFormData.password}
              onChange={(e) => inputHandler(e.target.value, 'password')}
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              value={regFormData.password2}
              onChange={(e) => inputHandler(e.target.value, 'password2')}
            />
          </div>
          <button onClick={(e) => submitForm(e)}>
            Register
          </button>
        </form>

        <p className="Register-have-account-text">Have An Account?</p> 
        <button onClick={goToLogin} className="Register-login-button">Login</button>
    </div>
  )
}


        
    