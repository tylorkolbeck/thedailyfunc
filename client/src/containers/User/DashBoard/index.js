import React from 'react'
import { connect } from 'react-redux'
import './index.css'

const index = (props) => {

  let dashboard = null

  if (props.userRole === 'admin') {
    dashboard = (
      <div className="DashBoard__container">
        <p>Dashboard</p>
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
    <div>
      {dashboard}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userRole: state.userManagement.role
  }
}

export default connect(mapStateToProps,null)(index)
