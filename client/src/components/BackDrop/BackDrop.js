import React from 'react'
import './BackDrop.css'

const BackDrop = ({ backDropShown, backdropToggleHandler, style}) => {
    let backDropClass = backDropShown ? 'show' : 'hidden'

    return (
        <div className={`BackDrop ${backDropClass}`} onClick={backdropToggleHandler} style={{...style}}>

        </div>
    )
}

export default BackDrop