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
                        <Link
                            to={link.to} 
                            onClick={backdropToggleHandler}
                            key={link.text}>
                                <li>
                                    {link.text}
                                </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar

