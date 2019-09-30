import React, { useState, useEffect } from 'react'
import './Profile.css'
import { connect } from 'react-redux'
import { axiosInstance as axios } from '../../../axios-config' 
import * as actionCreators from '../../../store/actions/actions'
import { Link } from 'react-router-dom'


import UsersPosts from '../../../components/UsersPosts/UsersPosts'
import Spinner from '../../../components/UI/Spinner/Spinner'

const Profile = ({ token, logUserOut, history }) => {
  let [usersPosts, setUsersPosts] = useState(false)
  let [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tokenExpired, setTokenExpired] = useState(false)


  // Log user out handler
  const logUserOutHandler = () => {
    logUserOut()
    // let oldState = {...this.state}
    // oldState.registrationFormData.errors = []
    // oldState.loginFormData.error = false
    // this.setState({...oldState})
    history.push('/user')
  }

  // After component mounts fetch the users posts
  useEffect(() => {
    let returnedData = null
    const fetchData = async () => {
      try {
        const results = await axios.post('/user/usersPosts', {
          data: {
            token: token
          }
        })
        returnedData = results
        if (results.data.message === 'Token Expired') {
          setTokenExpired(true)
          setIsError(false)
        } else {
          setTokenExpired(false)
        }
        if (results.data.posts.length > 0) {
          setIsError(false)
          setUsersPosts(results.data.posts)
        } else {
          setIsError(false)
          setUsersPosts([])
        }
        setLoading(false)

      } catch(error) {
        console.log("ERRROR", error)
        // if (returnedData.data.message === 'Token Expired') {
        //   setIsError(false)
        //   setLoading(false)
        // } else {
        //   setIsError(true)
        //   setLoading(false)
        // }
      }
    }

    if (!usersPosts) {
      fetchData()
    }
  }, [])

  let mappedPosts = null

  if (usersPosts.length > 0) {
    mappedPosts = usersPosts.map(postData => {
      return <UsersPosts post={postData} token={token} key={postData._id} />
    }) 
  } else if (usersPosts.length === 0) {
    mappedPosts = <h2>You do not have any posts</h2>
  }
  

  return (
    <div className="Profile__wrapper">
      <div>
        <div className="Profile__info-card">
          <div className="Profile__info-img"></div>
          <div className="Profile__info"> 
            <div className="Profile__contact">
              <p>Tylor kolbeck</p>
              <p>tylor.kolbeck@gmail.com</p>
              <p><span>User Since:</span> 19 Mar 20</p>
              <p><span>Number Of Posts:</span> {usersPosts.length}</p>
              <button className="Profile__logout-btn" onClick={logUserOutHandler}>Logout</button>
              <Link to="/editpost" className="Profile__newPost-btn">New Post</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Profile__user-posts">
        {loading ? <Spinner /> : null}
        {isError &&  <h2>There was an error fetching your posts.</h2>}
        {tokenExpired && <h2>Your Session has expired please <Link to="/user">login</Link>.</h2>}
        {mappedPosts}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.userManagement.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logUserOut: () => dispatch({type: actionCreators.LOG_USER_OUT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
