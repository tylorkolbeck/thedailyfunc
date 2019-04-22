import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import reducer from './store/reducer'


// Middleware setup which is executed when an action is dispatched
const logger = store => {
    return next => {
        return action => {
            const result = next(action)
            // console.log('[Middleware next state', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store and apply middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop> 
                <App />
            </ScrollToTop>
        </Router>
    </Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store

