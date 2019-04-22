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

// Fetch recent posts
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



export const markPostAsRead = (postId) => {
  return {
    type: MARK_POST_AS_READ,
    postId
  }
}



