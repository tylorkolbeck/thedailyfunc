import React from 'react'
import './UsersPosts.css'
import { dateConversion as dateConv } from '../../helpers/date_module'
import PostControl from '../../containers/User/Admin/DashBoard/UI/Buttons/PostControl'
// import { axiosInstance as axios } from '../../../../../axios-config' 

import calanderIcon from './Assets/calandericon2.png'
import privateIcon from './Assets/private.png'
import publicIcon from './Assets/public.png'
import viewIcon from './Assets/view.png'
import editIcon from './Assets/edit.png'
import statsIcon from './Assets/stats.png'
import trashIcon from './Assets/trash.png'

const ShowDashBoardPosts = ({post, togglePublic, token, deletePost}) => {

  // Move this to the parent component. Dont have a child component making ajax requests
  // const togglePublicHandler = (postId) => {
  //   axios.post(`/posts/togglePublic/`, {
  //     data: {
  //       postId: postId,
  //       token: token
  //     }
  //   })
  //     .then(() => {
  //       togglePublic(postId)
  //     })
  //     .catch(err => console.log("Error Updating Post - " , err))
  // }
  
  return (
    <div className="UsersPosts__container" key={post._id}>
      <ul>
      <li className="UsersPost"> 
          <div className="UsersPost__info">
            {/* <h3>{post.title} {post.public ? <img src={publicIcon} alt="public" onClick={(post_id,) => togglePublicHandler(post._id)}></img> : <img src={privateIcon} alt="Private" onClick={(post_id) => togglePublicHandler(post._id)}></img>}</h3>  */}
            <h3>{post.title} <img className="UsersPost__public-icon" src={post.public ? publicIcon : privateIcon} alt="public"></img></h3> 
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
            {/* <PostControl text="Delete" to="/dashboard" icon={trashIcon} postId={post._id}/> */}
          </div>
      </li>
      </ul>
    </div>

  )
}

export default ShowDashBoardPosts

