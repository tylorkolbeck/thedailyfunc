/**  INDEX - DASHBOARD - POSTSDASHBOARD - USERDASHBOARD 
 * Index page for the admin dashboard.
 * Should not show unless user has a 'admin' role.
 * ShowDashboardPosts generates all the view components for anything that has to do with posts control.
 * Confirmation is a component that confirms a selection. It should be reusable for posts or user action confirmation.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import * as actionTypes from '../../../../store/actions/actions'
import UsersPosts from '../../../../components/UsersPosts/UsersPosts'
import { axiosInstance as axios } from '../../../../axios-config'
import Spinner from '../../../../components/UI/Spinner/Spinner'

import ShowUsers from './helpers/ShowUsers'
import { Link } from 'react-router-dom'
import Confirmation from '../../../../components/UI/Confirmation/Confirmation'
import * as UserFunctions from '../../UserFunctions/UserFunctions'


class index extends Component {
  state = {
    token: this.props.token, // stored here for any 'admin' role requests
    confirmationModal: false,
    showPostsBoard: true,
    showUsersBoard: false,
    showStatisticsBoard: false,
    userData: false
  }

  componentDidMount() {
    if (!this.props.allPosts) {
      // get all the posts
      this.props.getAllposts() 
    } 
    // this.props.getUserData(this.props.token)
    this.getUserData(this.props.token)
  }

  getUserData = (token) => {
      axios.post('/admin/userdata', {
        data: {
          token: token
        }
      })
        .then((data) => {
          this.setState({userData: data.data.users}, () => console.log(this.state.userData))
        })
  }

  closeConfirmationModal = () => {
    this.setState({confirmationModal: false})
  }

  confirmationRequest = (postId) => {
    let confirmationModal = <Confirmation postId={postId} deletePostHandler={() => this.deletePostHandler(postId)} closeConfirmationModal={this.closeConfirmationModal}/>
    this.setState({confirmationModal})
  }

  deletePostHandler = (postId)  => {
    this.setState({confirmationModal: false})
    // this.props.deleteAPost(postId, this.props.token)
  }

  render() {
    // Destructure component props
    const { allPosts, userRole } = this.props
    let posts

    if (allPosts) {
      posts = 
        allPosts.map(post => {
          return <UsersPosts history={this.props.history}post={post} key={post._id} deletePost={(postId) => this.confirmationRequest(postId)} token={this.props.token}/>
        })
    }

    let dashboard = null
      if (userRole === 'admin') {
        dashboard = (
          <div className="DashBoard__container" >
            <h1>Admin Dashboard</h1>

            <div className="DashBoard__controlPanel">

            {/* POSTS DASHBOARD */}
            <div className="DashBoard__header-posts" onClick={() => this.setState({showPostsBoard: !this.state.showPostsBoard})}>
              <span><h3>Posts - {allPosts.length}</h3></span>
              <span><h3><Link to='/editpost'>New Post</Link></h3></span>
            </div>
            
            <div className={`Dashboard__posts-container ${this.state.showPostsBoard ? '' : 'scaleDown'}`}>
              <div>
                  <ul className="Dashboard__posts-list">                  
                    {posts}
                  </ul>
              </div>
            </div>


            {/* USER DASHBOARD */}
            <div className="DashBoard__header-posts" onClick={() => this.setState({showUsersBoard: !this.state.showUsersBoard})}>
              <span><h3>Users - {this.state.userData.length}</h3></span>
            </div>
            <div className={`Dashboard__posts-container ${this.state.showUsersBoard ? '' : 'scaleDown'}`}>
                <ul className="Dashboard__posts-list">
                  {this.state.userData ? <ShowUsers users={this.state.userData} /> : null }
                </ul>
            </div>
      
            {/* Statistics DASHBOARD */}
         
            </div>
          </div>
        )
      } else {
        dashboard = (
            <div className="DashBoard__container">
              <p>You do not have the credentials to access the dashboard.</p>
            </div>
        )
      }

      return (
        <div className="AdminPage__container" style={{minHeight: '100%'}}>
          {dashboard}
          {this.state.confirmationModal ? this.state.confirmationModal : null}
        </div>
        )
  }
}

const mapStateToProps = state => {
  return {
    userRole: state.userManagement.role,
    allPosts: state.allPosts,
    token: state.userManagement.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllposts: () => dispatch(actionTypes.fetchAllPosts()),
    togglePublic: (postId) => dispatch({type: actionTypes.TOGGLE_PUBLIC, data: postId}),
    deleteAPost: (postId, token) => dispatch(actionTypes.deleteAPost(postId, token)),
    getUserData: (token) => dispatch(actionTypes.getUserData(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index)
