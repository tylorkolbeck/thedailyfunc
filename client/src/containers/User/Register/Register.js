import React from 'react'

export default function Register({ goToLogin, inputHandler, regFormData, submitForm }) {
  
  let regFormErrors = regFormData.errors.map(error => {
    return <p key={error.msg}>{error.msg}</p>
  })

  return (
    <div>
        <h1>
          Register
        </h1>
        {regFormErrors}
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={regFormData.name}
              onChange={(e) => inputHandler(e.target.value, 'name')}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={regFormData.email}
              onChange={(e) => inputHandler(e.target.value, 'email')}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create Password"
              value={regFormData.password}
              onChange={(e) => inputHandler(e.target.value, 'password')}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={regFormData.password2}
              onChange={(e) => inputHandler(e.target.value, 'password2')}
            />
          </div>
          <button onClick={(e) => submitForm(e)}>
            Register
          </button>
        </form>
        <p>Have An Account? <button onClick={goToLogin}>Login</button></p>
    </div>
  )
}


        
    