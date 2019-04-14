import React from 'react'
import './WorkCard.css'

export default function WorkCard(props) {
  return (
    <div 
      className="WorkCard__container" 
      style={{backgroundImage: `url(${props.imgThumb})`}} 
      data-title={props.title} 
      onClick={() => props.toggleOpen(props)}>
        <div className="WorkCard__info-wrapper">
          <div className="WorkCard__info-title">
            <h1>{props.title}</h1>
          </div>
          {/* <div className="WorkCard__info-link" onClick={() => props.toggleOpen(props)}>Learn More</div> */}
        </div>
    <span></span>

    </div>
  )
}
