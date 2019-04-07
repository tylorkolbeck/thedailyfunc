import React from 'react'
import './CatBubble.css'

const CatBubble = props => {
    let active = props.active ? {background: '#fec303', color: 'black'} : null

    return (
        <div className='CatBubble ' data-tooltip= {props.category} style={{...props.style, ...active}} onClick={props.clicked}>
            {props.cat}
            {/* <span style={{fontSize: '10px'}}>eact</span> */}
        </div>
    )
}

export default CatBubble