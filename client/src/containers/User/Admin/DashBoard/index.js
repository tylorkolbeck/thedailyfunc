import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import * as actionTypes from '../../../../store/actions/actions'
import * as dash from './helpers/dashboardHelpers'
import { Link } from 'react-router-dom'


class index extends Component {
  state = {
    token: this.props.token
  }

  componentDidMount() {
    if (!this.props.allPosts) {
      this.props.getAllposts()
    }
  }

  togglePublicHandler(postId) {
    this.props.togglePublic(postId)
  }

  render() {
    // Destructure component props
    const { allPosts, userRole } = this.props

  let dashboard = null

    if (userRole === 'admin') {
      dashboard = (
        <div className="DashBoard__container">
          <Link to='/editpost'>New Post</Link>
          <h1>Admin Dashboard</h1>
          <h2>Posts</h2>
          <p>Number of posts:<span> {allPosts.length} </span></p>

          <div className="Dashboard__posts-container">
              <ul className="Dashboard__posts-list">
                {/* USE HELPER FILE TO BUILD AND DISPLAY THE EDITPOST PAGE */}
                {allPosts ? dash.getAllPosts(allPosts, this.togglePublicHandler.bind(this), this.state.token) : null}
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
    togglePublic: (postId) => dispatch({type: actionTypes.TOGGLE_PUBLIC, data: postId})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(index)
