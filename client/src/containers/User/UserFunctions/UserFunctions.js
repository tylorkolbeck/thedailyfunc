import { axiosInstance as axios } from '../../../axios-config'

// USER CONTROL PANEL FUNCTIONS

// token, postid

// Show confirmation modal when trying to delete a function
// returns true to delete otherwise false


// A function to delete a post if confirmed yes
// removes the post that was deleted from state


// The function to toggle a function public (implement a confirmation modal in the future)
// make public pr private function

export const fetchTogglePublic = (postId, token, userId) => {  
  // Return a promise to the calling function
  return axios.post(`/posts/togglePublic/`, {
    data: {
      postId: postId,
      token: token.split(" ")[1]
    }
  })
}

export const sendToLoginPage = (history) => {
  history.push({
    pathname: '/user',
    state: { message: 'Token Expired' }
  })
  // return history.push('/user')

  // this.props.history.push('/user')
}

