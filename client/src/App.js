import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import './App.css';
import NavMenu from './containers/NavMenu/NavMenu'
import { routes } from './routes'
import { axiosInstance as axios} from './axios-config'

import Footer from './containers/Footer/Footer'

axios.defaults.baseUrl = process.env.REACT_APP_SERVER_URL

class App extends Component {

  state = {
    backDropShown: false
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

export default App;


