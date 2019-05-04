import React, { useState, useEffect } from 'react'
import './Profile.css'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import { axiosInstance as axios } from '../../../axios-config' 

import UsersPosts from '../../../components/UsersPosts/UsersPosts'
import Spinner from '../../../components/UI/Spinner/Spinner'

const Profile = (props) => {
  let [usersPosts, setUsersPosts] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.post('/user/usersPosts', {
        data: {
          token: props.token
        }
      })
      setUsersPosts(results.data.posts)
      setLoading(false)
      mapPosts(results.data.posts)
    }
    
    fetchData()
  }, [])

  const mapPosts = (usersPosts) => {
    if (usersPosts.length > 0) {
      return usersPosts.map(postData => {
        return <UsersPosts post={postData} key={postData._id}/>
      }) 
    } else {
        return <h2 style={{maxWidth: '800px', width: '100%', textAlign: 'center', padding: '50px'}}>You do not have any posts.</h2>  
    }
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
              <button className="Profile__logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Profile__user-posts">
        {loading ? <Spinner /> : null}
        {usersPosts.length > 0 ? mapPosts(usersPosts) : null}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getUserPosts: (token) => dispatch(actionTypes.getUsersPosts(token))
  }
}

const mapStateToProps = state => {
  return {
    token: state.userManagement.token,
    usersPostData: state.userManagement.usersPostData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
