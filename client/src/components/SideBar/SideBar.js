import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import { connect } from 'react-redux'

const SideBar = ({backdropToggleHandler, backDropShown, navigationLinks}) => {
    let links = null
    links = navigationLinks.map(link => {
        return (
            <Link
                to={link.to} 
                onClick={backdropToggleHandler}
                key={link.text}>
                    <li>
                        {link.text}
                    </li>
            </Link>
        )
    })

    return (
        <div className={`SideBar ${backDropShown ? 'open' : ''}`}>
            <ul>
                {links}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userLoggedIn: state.userManagement.userId
    }
}

export default connect(mapStateToProps)(SideBar)

