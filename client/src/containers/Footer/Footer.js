import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = ({navigationLinks}) => {
    let links = null
    links = navigationLinks.map(link => {
        return (
            <Link
                to={link.to} 
                key={link.text}>
                    <li>
                        {link.text}
                    </li>
            </Link>
        )
    })

    return (
        <div className="Footer__container">
            <ul className="Footer__links_list">
                {links}
            </ul>

            <div className="Footer__logo">
                TK
            </div>


            <ul className="Footer__contact_info">
                <li>+1 (904) 955-4553</li>
                <li>Tylor.Kolbeck@gmail.com</li>
                <li>@tylor_kolbeck</li>
            </ul>

            <p className="Footer__about"> 2019 - Created By TK Web Design</p>

        </div>
    )
}

export default Footer