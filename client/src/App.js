import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import './App.css';
import NavMenu from './containers/NavMenu/NavMenu'
import { routes } from './routes'
import { axiosInstance as axios} from './axios-config'
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
      this.props.logUserIn(localStorage.Authorization)
    }
  }

  backdropToggleHandler() {
    this.setState({backDropShown: !this.state.backDropShown})
  }

  render() {
    
    let mapRoutes = routes.map((route) => (
      <Route 
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        location={this.props.location}
      />  
    ))

    return (
      <div className="App">
        {/* CONTAINER HOLDING TOP NAVIGATION ITEMS */}
        <NavMenu navLinks={this.props.navLinks} backDropShown={this.state.backDropShown} backdropToggleHandler={this.backdropToggleHandler.bind(this)}/>

        {/* MAP THROUGH ALL THE ROUTES */}
        {mapRoutes}
      
        <Footer navigationLinks={this.props.navLinks}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRole:  state.userManagement.role,
    navLinks: state.navigationLinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: (token) => dispatch({type: actionTypes.SET_USER_LOGIN, data: {token: token}})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


