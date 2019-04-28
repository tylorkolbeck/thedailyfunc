import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import Login from './Login/Login'
import Register from './Register/Register'
import { axiosInstance as axios } from '../../axios-config.js'
import * as actionCreators from '../../store/actions/actions'


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
      stayLoggedIn: true,
      error: false
    },
    loading: false
  }
  // TODO: ## SETUP FORM VALIDATION ##
  // two way bind registration form to state
  regFormInputHandler = (inputValue, input) => {
    let regFormData = {...this.state.registrationFormData}
    regFormData[input] = inputValue
    this.setState({registrationFormData: regFormData})
  }

  // Toggle the stayLoggedIn handler
  toggleStayLoggedInHandler = () => {
    let newState = {...this.state}
    newState.loginFormData.stayLoggedIn = !this.state.loginFormData.stayLoggedIn
    this.setState({...newState})
  }

  // Submit registration form handler
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
        if (response.data.errors) {
          formData.errors = response.data.errors
          formData.userCreated = response.data.userCreated
          this.setState({registrationFormData: formData})
        }

        if (this.state.registrationFormData.userCreated) {
          this.setShowRegistrationForm()
        }
      })
      .catch(err => console.log(err))
  }

  // bind login form to state
  loginFormInputHandler = (inputValue, input) => {
    let loginFormData = {...this.state.loginFormData}
    if (input === 'stayLoggedIn') {
      loginFormData.stayLoggedIn = !this.state.loginFormData.stayLoggedIn
    } else {
      loginFormData[input] = inputValue
    }
    this.setState({loginFormData: loginFormData})
  }

  // Submit login form
  submitLoginFormHandler = (event, {email, password} = this.state.loginFormData) => {
    this.setState({loading: true})
    event.preventDefault()
    axios.post('/user/login', {
      loginInfo: {
        email,
        password
      }
    })
      .then((res) => {
        this.props.setUserData(res.data.token, this.state.loginFormData.stayLoggedIn)
        this.setState({loading: false})
        this.props.history.goBack()
      })
      .catch((error) => {
        this.setState({loading: false})        
        if (error.response) {
          let oldState = {...this.state}
          oldState.loginFormData.error = error.response.data.message
          this.setState({oldState})
        }
      })
  }

  // Log user out handler
  logUserOutHandler = () => {
    this.props.logUserOut()
    // reset old errors from prior to logging in
    let oldState = {...this.state}
    oldState.registrationFormData.errors = []
    oldState.loginFormData.error = false
    this.setState({...oldState})
    this.props.history.goBack()
  }

  // Function to toggle showing the registration form
  setShowRegistrationForm = () => {
    this.setState({showRegistrationForm: !this.state.showRegistrationForm})
  }

  render() {

    // If user is logged in show the logout button else show a login form
    // State of the login fomr is handled in this index class
    // Form submit handling is handled in this index class
    // LOGIN FORM
    let loginOrLogout = this.props.user ?  <button onClick={this.logUserOutHandler}>Logout</button> : 
      <Login 
        inputHandler={this.loginFormInputHandler}
        loginFormData={this.state.loginFormData}
        userCreated={this.state.registrationFormData.userCreated}
        formSubmit={this.submitLoginFormHandler}
        error={this.state.loginFormData.error}
        stayLoggedIn={this.state.loginFormData.stayLoggedIn}
        toggleStayLoggedIn={this.toggleStayLoggedInHandler.bind(this)}
        loading={this.state.loading}
        />
    // Show the register button on the login screen if no user logged in
    let registerLink = this.props.user ? null : <div className="UserManagement__register-button"><p>Dont have an account?</p> <button href="/register" onClick={this.setShowRegistrationForm}>Create a new account</button></div>
    
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
      <div className="UserManagment__container">
        {/* Hide the login form if the registration button is selected */}
        <div className={`UserManagement__container-login  ${this.state.showRegistrationForm ? ' hideForm' : ''}`} >
          {loginOrLogout}
          {registerLink}
        </div>
  
        <div className="UserManagement__container-registration">
          {registrationForm}
        </div>
  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userManagement.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserData: (token, stayLoggedIn) => dispatch({type: actionCreators.SET_USER_LOGIN, data: {token: token, stayLoggedIn: stayLoggedIn}}),
    logUserOut: () => dispatch({type: actionCreators.LOG_USER_OUT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
