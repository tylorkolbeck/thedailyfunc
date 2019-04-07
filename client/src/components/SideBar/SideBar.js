import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import { navigationLinks } from '../../NavigationLinks'


const SideBar = ({backdropToggleHandler, backDropShown}) => {

    return (
        <div className={`SideBar ${backDropShown ? 'open' : ''}`}>

            <ul>
                {navigationLinks.map(link => {
                    return (
                        <li key={link.text}>
                            <Link
                                to={link.to} 
                                onClick={backdropToggleHandler}>
                                    {link.text}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar

