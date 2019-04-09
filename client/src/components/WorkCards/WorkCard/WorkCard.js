import React from 'react'
import './WorkCard.css'

export default function WorkCard(props) {
  return (
    <div className="WorkCard__container" style={{backgroundImage: `url(${props.imgThumb})`}} data-title={props.title}>
        <div className="WorkCard__link-learnMore">Learn More</div>
      {/* <p>Title: {props.title}</p>
      <p>About: {props.about}</p>
      <p>Description: {props.description}</p>
      <img src={props.img} alt="Website" height="100px" width="100px"></img>
      <p>Technology: {props.tech}</p>
      <a href={props.url}>{props.url}</a> */}
    <span></span>

    </div>
  )
}
