import React from 'react'
import './WorkCard.css'

export default function WorkCard(props) {
  return (
    <div className="WorkCard__container" style={{backgroundImage: `url(${props.imgThumb})`}} data-title={props.title} >
        <div className="WorkCard__link-learnMore" onClick={() => props.toggleOpen(props)}>Learn More</div>
    <span></span>

    </div>
  )
}
