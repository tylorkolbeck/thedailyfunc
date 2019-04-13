import React from 'react'
import './HeaderTxtH2.css'

export default function HeaderTxtH2( { text, style } ) {
  return (
    <div className="HeaderTxt__wrapper">
      <h2 
        className="HeaderTxt-h2"
        style={{...style}}>
          { text }
      </h2>
    </div>

  )
}
