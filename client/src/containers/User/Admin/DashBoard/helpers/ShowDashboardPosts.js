import React from 'react'
import { dateConversion as dateConv } from '../../../../../helpers/date_module'
import PostControl from '../UI/Buttons/PostControl'
import { axiosInstance as axios } from '../../../../../axios-config' 

import calanderIcon from '../Assets/calandericon2.png'
import privateIcon from '../Assets/private.png'
import publicIcon from '../Assets/public.png'
import viewIcon from '../Assets/view.png'
import editIcon from '../Assets/edit.png'
import statsIcon from '../Assets/stats.png'
import trashIcon from '../Assets/trash.png'

const ShowDashBoardPosts = ({posts, togglePublic, token, deletePost}) => {

  // Move this to the parent component. Dont have a child component making ajax requests
  const togglePublicHandler = (postId) => {
    axios.post(`/posts/togglePublic/`, {
      data: {
        postId: postId,
        token: token
      }
    })
      .then(() => {
        togglePublic(postId)
      })
      .catch(err => console.log("Error Updating Post - " , err))
  }

  const postPreview = posts.map(post => {
    return (
      <li key={post._id} className={`DashBoard__post`}> 
          <div className="DashBoard__post-info">
            <h3>{post.title} {post.public ? <img src={publicIcon} alt="public" onClick={(post_id,) => togglePublicHandler(post._id)}></img> : <img src={privateIcon} alt="Private" onClick={(post_id) => togglePublicHandler(post._id)}></img>}</h3> 
            <p className="DashBoard__post-author">By: {post.author}</p>
            <hr></hr>
            <p className="Dashboard__post-description">{post.description}</p>
            <p className="Dashboard__post-date">
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
    )
  })
  
  return postPreview
}

export default ShowDashBoardPosts

