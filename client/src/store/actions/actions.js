import { axiosInstance as axios } from '../../axios-config' 

export const MARK_POST_AS_READ = 'MARK_POST_AS_READ'



// Recent post actions
export const STORE_RECENT_POSTS ='RECENT_POSTS'

// All posts actions
export const STORE_ALL_POSTS ='STORE_ALL_POSTS'



// Call the async fetch function with a syn function
// Get recent posts action creator
export const saveRecentPosts = ( res ) => {
  return {
    type: STORE_RECENT_POSTS,
    recentPosts: res
  }
}

// Action creators for async code

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



