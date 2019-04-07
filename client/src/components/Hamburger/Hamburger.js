import React from 'react'

import './Hamburger.css'


const Hamburger = (props) => {
    let menuIsOpen = props.backDropShown ? 'open' : 'Hamburger__menu_closed'

    return (
        <div className={`Hamburger__container ${menuIsOpen}`} onClick={props.backdropToggleHandler}>
            <div style={props.style}></div>
            <div style={props.style}></div>
            <div style={props.style}></div>            
        </div>
    )
}

export default Hamburger