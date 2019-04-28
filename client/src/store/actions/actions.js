import { axiosInstance as axios } from '../../axios-config' 

export const MARK_POST_AS_READ = 'MARK_POST_AS_READ'
export const LOG_USER_OUT = 'LOG_USER_OUT'
export const SET_USER_LOGIN = 'SET_USER_LOGIN'
export const TOGGLE_PUBLIC = 'TOGGLE_PUBLIC'
 

// Get recent posts action creator
export const STORE_RECENT_POSTS ='RECENT_POSTS'
export const saveRecentPosts = ( res ) => {
  return {
    type: STORE_RECENT_POSTS,
    recentPosts: res
  }
}

// Fetch recent posts side effect call
/**
 * @returns 3 recent posts
 */
export const fetchRecentPosts = () => {
  return dispatch => {
    axios.get('/posts/recent')
        .then((response) => {
            dispatch(saveRecentPosts(response.data.docs))
        })
        .catch(err => {  
          console.log('[fetchAllPosts]', err)
        })
  }
}

// Call the async fetch function with a syn function
// Get all posts action creator
export const STORE_ALL_POSTS ='STORE_ALL_POSTS'
export const saveAllPosts = ( res ) => {
  return {
    type: STORE_ALL_POSTS,
    allPosts: res
  }
}


// Fetch all posts
export const fetchAllPosts = () => {
  // gets dispatch from redux-thunk
  return dispatch => {
    axios.get('/posts')
        .then((response) => {
            dispatch(saveAllPosts(response.data.docs))
        })
        .catch(err => {  
          console.log('[fetchAllPosts]', err)
        })
  }
}

// Delete a post from the database
export const DELETE_A_POST = 'DELETE_A_POST'
export const deleteAPost = (postId, token) => {
  return dispatch => {
    axios.post('/posts/deletePost', {
      data: {
        postId: postId,
        token: token
      }
    })
      .then(() => {
        // Once the post is deleted from the database then i want to dispatch to the reducer to update the state
        dispatch({type: DELETE_A_POST, data: {postId: postId}})
      })
      .catch(err => console.log(err))
  }
}

// GET USER DATA FOR ADMIN DASHBOARD
export const GET_ALL_USER_DATA = 'GET_ALL_USER_DATA'
export const getUserData = (token) => {
  return dispatch => {
    axios.post('/admin/userdata', {
      data: {
        token: token
      }
    })
      .then((data) => {
        dispatch({type: GET_ALL_USER_DATA, data: data.data.users})
      })
  }
}


// FUTURE IMPLEMENTATIONS
export const markPostAsRead = (postId) => {
  return {
    type: MARK_POST_AS_READ,
    postId
  }
}



