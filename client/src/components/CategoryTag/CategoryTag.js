import React from 'react'
import './CategoryTag.css'

const CategoryTag = props => {
   return <span className="CategoryTag__tag">{props.tagName}</span>
}

export default CategoryTag