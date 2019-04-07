import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import { navigationLinks } from '../../NavigationLinks'

const Footer = props => {
    return (
        <div className="Footer__container">
            <ul className="Footer__links_list">
                {navigationLinks.map(link => {
                    return (
                        <li key={link.text}>
                            <Link 
                                to={link.to}>
                                {link.text}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="Footer__logo">
                TK
            </div>


            <ul className="Footer__contact_info">
                <li>+1 (904) 955-4553</li>
                <li>Tylor.Kolbeck@gmail.com</li>
                <li>@tylor_kolbeck</li>
            </ul>

            <p className="Footer__about"> &#9400; 2019 - Created By TK Web Design</p>

        </div>
    )
}

export default Footer