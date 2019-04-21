const jwtDecode = require('jwt-decode')



export function checkLoginAccess(navigationLinks,token) {
  /**
   * @param {array} navigationLinks new navigation links
   * @param {object} userData object holding all of the users data
   */
  let returnData = []
  let error = false
  let userData

  try {
    userData = jwtDecode(token)
  } 
  catch(err) {
    error = err
    throw new Error("Error handling user token") 
  }
  finally {
    if (!error) {
      returnData.push(logInOrLogout(userData.userId, userData.role, navigationLinks))
      returnData.push(userData)
      return returnData
    } else {
      returnData.push(error)
      return returnData
    }
  }
}

/**
 * 
 * Changes the Login link to Logout if userId is present
 * @param {string|boolean} userId False if user is not logged in else the userId
 * @param {array} navigationLinks Array of current navigation links
 * @return {array} the navigationLinks with the updated Login or Logout link
 */

const logInOrLogout = (userId, role, navigationLinks) => {
  let navLinks = [...navigationLinks]
  
  if (role) {
    if (role === 'user') {
      let profileLink = {to: '/profile', text: 'Profile'}
      navLinks.push(profileLink)
    } else if (role === 'admin') {
      let dashLink = {to: '/dashboard', text: 'Dashboard'}
      navLinks.push(dashLink)
      let profileLink = {to: '/profile', text: 'Profile'}
      navLinks.push(profileLink)
    }
  }

  let showLoginOrOut = userId ? 'Logout' : 'Login'
  navLinks.splice(navLinks.findIndex(link => link.to === '/user'), 1)
  navLinks.push({to: '/user', text: showLoginOrOut})
  
  return navLinks
}
