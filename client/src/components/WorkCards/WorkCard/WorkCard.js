import React from 'react'
import './WorkCard.css'
import { Link } from 'react-router-dom'

export default function WorkCard(props) {
  return (
      <div 
        className="WorkCard__container" 
        
        data-title={props.title} 
        onClick={() => props.toggleOpen(props)}>
          <div className="WorkCard-img" style={{backgroundImage: `url(${props.imgThumb})`}} ></div>
          <div className="WorkCard__info-wrapper">
            <div className="WorkCard__info-title">
              <h2>{props.title}</h2>
            </div>
            <div className="WorkCard__info-description"> 
              <p>A short description about the website. A short description about the website.</p>
            </div>
            <div className="WorkCard__info-more">
              <p onClick={() => props.toggleOpen(props)}>Learn More</p>
            </div>
            {/* <div className="WorkCard__info-link" onClick={() => props.toggleOpen(props)}>Learn More</div> */}
          </div>
      </div>
  )
}
