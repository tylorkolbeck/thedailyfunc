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
import ShowDashboardPosts from './helpers/ShowDashboardPosts'
import { Link } from 'react-router-dom'
import Confirmation from '../../../../components/UI/Confirmation/Confirmation'


class index extends Component {
  state = {
    token: this.props.token, // stored here for any 'admin' role requests
    confirmationModal: false,
    showPostsBoard: false,
    showUsersBoard: false,
    showStatisticsBoard: false
  }

  closeConfirmationModal = () => {
    this.setState({confirmationModal: false})
  }

  confirmationRequest = (postId) => {
    let confirmationModal = <Confirmation postId={postId} deletePostHandler={() => this.deletePostHandler(postId)} closeConfirmationModal={this.closeConfirmationModal}/>
    this.setState({confirmationModal})
  }

  componentDidMount() {
    if (!this.props.allPosts) {
      // get all the posts
      this.props.getAllposts() 
    }
  }

  togglePublicHandler(postId) {
    // Calls action creator to toggle a post as public
    this.props.togglePublic(postId)
  }

  deletePostHandler = (postId)  => {
    this.setState({confirmationModal: false})
    this.props.deleteAPost(postId, this.state.token)
  }

  render() {
    // Destructure component props
    const { allPosts, userRole } = this.props

    let dashboard = null

      if (userRole === 'admin') {
        dashboard = (
          <div className="DashBoard__container">
            <h1>Admin Dashboard</h1>

            {/* POSTS DASHBOARD */}
            <div className="DashBoard__header-posts" onClick={() => this.setState({showPostsBoard: !this.state.showPostsBoard})}>
              <span><h3>Posts - {allPosts.length}</h3></span>
              <span><h3><Link to='/editpost'>New Post</Link></h3></span>
            </div>
            
            <div className={`Dashboard__posts-container ${this.state.showPostsBoard ? '' : 'scaleDown'}`}>
              <div>
                  <ul className="Dashboard__posts-list">
                    {/* Build the posts portion of the dashboard with this component if user role === 'admin' */}
                    {allPosts ? <ShowDashboardPosts posts={allPosts} deletePost={(postId) => this.confirmationRequest(postId)} togglePublic={this.togglePublicHandler.bind(this)} token={this.state.token}/> : null}
                  </ul>
              </div>
              
            </div>

            {/* USER DASHBOARD */}
            <div className="DashBoard__header-posts" onClick={() => this.setState({showUsersBoard: !this.state.showUsersBoard})}>
              <span><h3>Users</h3></span>
              {/* <span><h3><Link to='/editpost'></Link></h3></span> */}
            </div>
            <div className={`Dashboard__posts-container ${this.state.showUsersBoard ? '' : 'scaleDown'}`}>
              <p>Number of users:<span> {allPosts.length} </span></p>
                <ul className="Dashboard__posts-list">
                  {/* Build the posts portion of the dashboard with this component if user role === 'admin' */}
                  {allPosts ? <ShowDashboardPosts posts={allPosts} deletePost={(postId) => this.confirmationRequest(postId)} togglePublic={this.togglePublicHandler.bind(this)} token={this.state.token}/> : null}
                </ul>
            </div>


            {/* Statistics DASHBOARD */}
            <div className="DashBoard__header-posts" onClick={() => this.setState({showStatisticsBoard: !this.state.showStatisticsBoard})}>
              <span><h3>Site Statistics</h3></span>
              {/* <span><h3><Link to='/editpost'></Link></h3></span> */}
            </div>
            <div className={`Dashboard__posts-container ${this.state.showStatisticsBoard ? '' : 'scaleDown'}`}>
              <p>Number of users:<span> {allPosts.length} </span></p>
                <ul className="Dashboard__posts-list">
                  {/* Build the posts portion of the dashboard with this component if user role === 'admin' */}
                  {allPosts ? <ShowDashboardPosts posts={allPosts} deletePost={(postId) => this.confirmationRequest(postId)} togglePublic={this.togglePublicHandler.bind(this)} token={this.state.token}/> : null}
                </ul>
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
        <div className="AdminPage__container">
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
    token: state.userManagement.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllposts: () => dispatch(actionTypes.fetchAllPosts()),
    togglePublic: (postId) => dispatch({type: actionTypes.TOGGLE_PUBLIC, data: postId}),
    deleteAPost: (postId, token) => dispatch(actionTypes.deleteAPost(postId, token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index)
