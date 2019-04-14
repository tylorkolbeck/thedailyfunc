import React from 'react'
import './WorkModal.css'

import closeButton from '../../UI/close-browser.png'
import { Animated } from "react-animated-css";


export default function WorkModal(props) {
    let show = props.shown ? 'show' : 'hide'
    console.log(props.data)
  return (

    <div className={`WorkModal__container ${show}`} style={{...props.style}}>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={props.data.shown}>
          
          <div className="WorkModal__header-img" style={{backgroundImage: `url(${props.data.img})`}}></div>
              <div className="WorkModal__inner-wrapper">
                  <h2>{props.data.title}</h2>
                  <p>{props.data.about}</p>
                  <h3>Description:</h3>
                    <p>{props.data.description}</p>
                  <h3>Technologies:</h3>
                    <p>{props.data.tech.join(', ')}</p>
                  <a href={props.data.url}>Visit</a>
              </div>
              <div className="WorkModal-close" onClick={props.click}><img src={closeButton} alt="Close Modal"></img></div>
              </Animated>        
    </div>

  )
}
