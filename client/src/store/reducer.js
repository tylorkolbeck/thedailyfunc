import * as actionTypes from './actions/actions'
import { navigationLinks } from '../NavigationLinks'
import { checkLoginAccess } from '../helpers/CheckLogin'

const initialState = {
  navigationLinks: [...navigationLinks],
  userManagement: {
    userId: false,
    name: false,
    email: false,
    role: false,
    dateUserCreated: false,
    token: false,
  },
  recentPosts: false,
  allPosts: false,
  loadingRecentPosts: false,
  loadingAllPosts: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.recentPosts
      }

    case actionTypes.STORE_ALL_POSTS:
      return {
        ...state,
        allPosts: action.allPosts
      }

    case actionTypes.MARK_POST_AS_READ:
      return {
        // switch the read property of a post to read after reading
        ...state,
      }


    // Log user in
    case actionTypes.SET_USER_LOGIN:
      const token = action.data

      /**
       * checkLoginAccess(navigationLinks, token)
       * @param {array} navigationLinks current navigation links
       * @param {strgin} token token returned from server
       * @returns {array} array[0] container the new navigation links, array[1] returns 
       * an object holding all of the users information that was decoded from the token
       */
      let userSettings = checkLoginAccess(navigationLinks, token)
      
      if (!localStorage.Authorization) {
        localStorage.setItem('Authorization', `bearer ${token}`)
      }

      return {
        ...state,
        userManagement: {
          userId: userSettings[1].userId,
          name: userSettings[1].name,
          email: userSettings[1].email,
          role: userSettings[1].role,
          dateUserCreated: userSettings[1].dateUserCreated,
          token: token
        },
        navigationLinks: userSettings[0]
      }
    
    // Logthe user out by clearing the state and localstorage
    case actionTypes.LOG_USER_OUT:
      let oldUserState = {...state.userManagement}

      let clearUserState = (oldUserState) => {
        let emptyUserState = {}
        for (let key in oldUserState) {
          emptyUserState[key] = false
        }
        return emptyUserState
      }

      localStorage.clear()

      return {
        ...state,
        userManagement: {
          ...clearUserState(oldUserState)
        },
        navigationLinks: navigationLinks
      }

    default:
      return state
  }
  
} 

export default reducer