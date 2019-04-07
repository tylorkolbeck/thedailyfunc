import React from 'react'
import './BackDrop.css'

const BackDrop = ({ backDropShown, backdropToggleHandler}) => {
    let backDropClass = backDropShown ? 'show' : 'hidden'

    return (
        <div className={`BackDrop ${backDropClass}`} onClick={backdropToggleHandler}>

        </div>
    )
}

export default BackDrop