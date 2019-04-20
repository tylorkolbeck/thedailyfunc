import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './index.css'
import './App.css';
import NavMenu from './containers/NavMenu/NavMenu'
import { routes } from './routes'
import { axiosInstance as axios} from './axios-config'
import jwtDecode from 'jwt-decode'
import { connect } from 'react-redux'
import * as actionTypes from './store/actions/actions'


import Footer from './containers/Footer/Footer'

axios.defaults.baseUrl = process.env.REACT_APP_SERVER_URL

class App extends Component {

  state = {
    backDropShown: false
  }

  componentDidMount() {
    //  Check to see if user is already logged in by checking localstorage for a JWT
    if (!this.props.userId && localStorage.Authorization) {
      let {email, userId, name, role} = jwtDecode(localStorage.Authorization)
      this.props.logUserIn({email, userId, name, role})
    }
  }

  backdropToggleHandler() {
    this.setState({backDropShown: !this.state.backDropShown})
  }

  render() {
    return (
      <div className="App">
        
        {/* CONTAINER HOLDING TOP NAVIGATION ITEMS */}
        <NavMenu backDropShown={this.state.backDropShown} backdropToggleHandler={this.backdropToggleHandler.bind(this)}/>

        {/* MAP THROUGH ALL THE ROUTES */}
        {routes.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />    
        ))}

          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId:  state.userManagement.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: (email, userId, name, role) => dispatch(actionTypes.saveUserData(email, userId, name, role))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


