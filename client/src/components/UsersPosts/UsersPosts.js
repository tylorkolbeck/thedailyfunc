import React, { useState } from 'react'
import './UsersPosts.css'
import { dateConversion as dateConv } from '../../helpers/date_module'
import PostControl from '../../containers/User/Admin/DashBoard/UI/Buttons/PostControl'
// import { axiosInstance as axios } from '../../axios-config' 
import * as UserFunctions from '../../containers/User/UserFunctions/UserFunctions'

import calanderIcon from './Assets/calandericon2.png'
import privateIcon from './Assets/private2.png'
import publicIcon from './Assets/public2.png'
import viewIcon from './Assets/view.png'
import editIcon from './Assets/edit.png'
import statsIcon from './Assets/stats.png'
import trashIcon from './Assets/trash.png'

const ShowDashBoardPosts = ({ post, deletePost, token, history}) => {
  const [publicPost, setPublicPost] = useState(post.public)
  const [message, setMessage] = useState(false)
  
  const togglePublicPost = (postId, token) => {
    UserFunctions.fetchTogglePublic(postId, token)
      .then((result)=> {
        if (result.data.message === 'Token Expired') {
          UserFunctions.sendToLoginPage(history)
        }
      })
      .catch(err => console.log('ERROR', err))
    setPublicPost(!publicPost)
  }
  
  return (
    <div className="UsersPosts__container" key={post._id}>
      <ul>
        <li className="UsersPost"> 
            <div className="UsersPost__info">
              <h3>{post.title} <img className="UsersPost__public-icon" src={publicPost ? publicIcon : privateIcon} alt="public" onClick={() => togglePublicPost(post._id, token)}></img></h3> 
              <p className="UsersPost__post-author ">By: {post.author}</p>
              <hr></hr>
              <p className="">{post.description}</p>
              <p className="UsersPost__post-date">
                <img src={calanderIcon} alt="Calander"></img>{dateConv(post.date, 'd,m,y')}
              </p>
            </div>
          
            <div className="Dashboard__post-controls">
              <PostControl text="Edit" to='/editPost' icon={editIcon} postId={post._id}/>
              <PostControl text="View" to={`post/${post._id}`} icon={viewIcon}/>
              <PostControl text="Stats" to="/" icon={statsIcon}/>
              <button onClick={() => deletePost(post._id)}><img src={trashIcon} alt="Delete"></img>Delete</button>
            </div>
        </li>
      </ul>
    </div>

  )
}

export default ShowDashBoardPosts

