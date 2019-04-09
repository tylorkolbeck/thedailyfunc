import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <div className="Button" style={{...props.style}}>
    
        <Link to={props.route}>{props.text}</Link> 
    </div>
  )
}
