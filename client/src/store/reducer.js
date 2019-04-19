import * as actionTypes from './actions/actions'

const initialState = {
  userManagement: {
    userName: false,
    // userName: 'tylorkolbeck@gmail.com',
    errors: {
      registrationErrors: false,
      loginErrors: false
    }
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
      console.log('MARKED POST AS READ', action.postId)
      // get the postid
      // filter the posts or find the post that matches that ID
      // add an attribute of read to true
      // reset state
      return {
        // switch the read property of a post to read after reading
        ...state,

      }

    default:
      return state
  }
  
} 

export default reducer