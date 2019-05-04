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
    usersPosts: false,
    usersPostData: false
  },
  admin: {
    userData: false
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
      const token = action.data.token
      const stayLoggedIn = action.data.stayLoggedIn
      /**
       * checkLoginAccess(navigationLinks, token)
       * @param {array} navigationLinks current navigation links
       * @param {strgin} token token returned from server
       * @returns {array} array[0] container the new navigation links, array[1] returns 
       * an object holding all of the users information that was decoded from the token
       */
      let userSettings = checkLoginAccess(navigationLinks, token)
      
      if (stayLoggedIn) {
        localStorage.setItem('Authorization', `bearer ${token}`)
      }


      if (userSettings.length > 1) {
        return {
          ...state,
          userManagement: {
            userId: userSettings[1].userId,
            name: userSettings[1].name,
            email: userSettings[1].email,
            role: userSettings[1].role,
            dateUserCreated: userSettings[1].dateUserCreated,
            token: token,
            usersPosts: userSettings[1].posts
          },
          navigationLinks: userSettings[0]
        }
      } else {
        localStorage.clear()
        break
      }

      
    
    // Log the user out by clearing the state and localstorage
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

    case actionTypes.TOGGLE_PUBLIC:
      let allPosts = [...state.allPosts]
      let filteredObjectIndex = 0
      // let postToUpdate = state.allPosts.filter((post, index) => post._id === action.data)

      let postToUpdate = state.allPosts.filter((post, index) => {
        if (post._id === action.data) {
          filteredObjectIndex = index
          return post
        } else {return false}
      })

      postToUpdate[0].public = !postToUpdate[0].public
      allPosts[filteredObjectIndex] = postToUpdate[0]

      return {
        ...state,
        allPosts: allPosts
      }

    case actionTypes.DELETE_A_POST:
      let newState = {...state}
      let newPostsArr = newState.allPosts.filter(post => post._id !== action.data.postId)
      newState.allPosts = newPostsArr
      
      return {
        ...newState
      }

    case actionTypes.GET_ALL_USER_DATA:
      // console.log('Getting user data', action.data)
      // let newState = {...state}
      // newState.admin.userData = action.data
      return {
        ...state,
        admin: {
          ...state.admin,
          userData: action.data
        }
      }
    case actionTypes.GET_USERS_POSTS:
      console.log(action.posts)
      return {
        ...state,
        userManagement: {
          ...state.userManagement,
          usersPostData: action.posts
        }
        
      }
      
    default:
      return state
  }
  
} 

export default reducer