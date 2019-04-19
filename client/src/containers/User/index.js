import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login/Login'
import Register from './Register/Register'
import { axiosInstance as axios } from '../../axios-config.js'

class index extends Component {
  state = {
    showRegistrationForm: false, // SET BACK TO FALSE AFTER DEVELOPMENT
    registrationFormData: {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: [],
      userCreated: false
    },
    loginFormData: {
      email: '',
      password: '',
      errors: []
    }
  }
  // TODO: ## SETUP FORM VALIDATION ##
  regFormInputHandler = (inputValue, input) => {
    let regFormData = {...this.state.registrationFormData}
    regFormData[input] = inputValue
    this.setState({registrationFormData: regFormData})
  }

  submitRegFormHandler = (event) => {
    event.preventDefault()
    let formData = {...this.state.registrationFormData}
    axios.post('/user/register', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password2: formData.password2
    })
      .then((response) => {
        console.log('[REGISTER RESPONSE]', response.data)
        if (response.data.errors) {
          formData.errors = response.data.errors
          formData.userCreated = response.data.userCreated
          this.setState({registrationFormData: formData}, () => console.log(this.state))
        }

        if (this.state.registrationFormData.userCreated) {
          this.setShowRegistrationForm()
        }
      })
      .catch(err => console.log(err))
  }

  loginFormInputHandler = (inputValue, input) => {
    let loginFormData = {...this.state.loginFormData}
    loginFormData[input] = inputValue
    this.setState({loginFormData: loginFormData})
  }

  submitLoginFormHandler = () => {
    console.log('SUBMITTING LOGIN FORM...')
  }

  setShowRegistrationForm = () => {
    this.setState({showRegistrationForm: !this.state.showRegistrationForm})
  }


  render() {

  // If user is logged in show the logout button else show a login form
  // State of the login fomr is handled in this index class
  // Form submit handling is handled in this index class
  // LOGIN FORM
  let loginOrLogout = this.props.user ?  <button>Logout</button> : 
    <Login 
      inputHandler={this.loginFormInputHandler}
      loginFormData={this.state.loginFormData}
      userCreated={this.state.registrationFormData.userCreated}/>
  // Show the register button on the login screen if no user logged in
  let registerLink = this.props.user ? null : <p>No Account? <button href="/register" onClick={this.setShowRegistrationForm}>Register</button></p>
  
  // If the register button is clicked hide the login form and show the registration form
  // state of the form is handled in this index class
  // Form submit handling is handled in this index class
  // REGISTER FORM
  let registrationForm = this.state.showRegistrationForm ? 
    <Register 
      goToLogin={this.setShowRegistrationForm} 
      inputHandler={this.regFormInputHandler}
      regFormData={this.state.registrationFormData}
      submitForm={this.submitRegFormHandler}/> : null

    return (
      <div>
        {/* Hide the login form if the registration button is selected */}
        <div className={this.state.showRegistrationForm ? ' hide' : ''} >
          {loginOrLogout}
          {registerLink}
        </div>
  
        <div>
          {registrationForm}
        </div>
  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userManagement.userName
  }
}

export default connect(mapStateToProps)(index)
