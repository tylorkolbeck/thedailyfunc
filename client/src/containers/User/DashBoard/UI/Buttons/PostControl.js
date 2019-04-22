import React from 'react'
import './PostControl.css'
import { Link } from 'react-router-dom'

export default function PostControl(props) {
  return (
      <Link to={props.to}><img src={props.icon} alt="View"></img>{props.text}</Link>
  )
}

