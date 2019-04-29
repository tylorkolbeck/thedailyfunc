import React from 'react'
import './ShowUsers.css'

import profileImg from './Assets/profile.png'
import adminIcon from './Assets/admin-icon.png'
import verifiedIcon from './Assets/verifiedUser.png'
import { dateConversion } from '../../../../../helpers/date_module'

export default function ShowUsersDashboard({users}) {
  let userComponent
  if (users) {
    userComponent = users.map(user => {
      return (
        <div className="ShowUsers__container" key={user._id}>

          <div className="ShowUsers__profile-header">
            {user.role === 'admin' ? <img src={adminIcon} alt="Profile" className="ShowUsers__info-role-icon"></img> : null}
            {user.role === 'user' ? <img src={verifiedIcon} alt="Profile" className="ShowUsers__info-role-icon"></img> : null}

            <p>{user.name}</p>
            <img src={profileImg} alt="Profile" className="ShowUsers__profile-img"></img>

          </div>

         
          <div className="ShowUsers__profile-info">
            {/* <p>{user.name}</p> */}
            <h3>User Info</h3>
              <p><span>Email: </span>{user.email}</p>
              <p><span>Member Since:</span> { dateConversion(user.dateUserCreated, 'd,m,y') }</p>
              <p><span>Last Login:</span> { user.lastLogin ? dateConversion(user.lastLogin, 'd,m,y') : 'N/A' }</p>

          </div> 
          <hr></hr>

        </div>
      )
    })
  }

  return (
    <div>
      {userComponent}
    </div>
  )
}
