import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
  let hideStyle = props.showButton === 'hide' ? 'hide' : ''
  return (
    <div className={`Button ${hideStyle}`} style={{...props.style}}>
    
        <Link to={props.route}>{props.text}</Link> 
    </div>
  )
}
