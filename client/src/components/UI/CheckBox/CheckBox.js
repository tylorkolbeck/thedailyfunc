import React from 'react'
import './CheckBox.css'

export default function CheckBox(props) {
  return (
    <div style={{ display: 'flex'}}>
    <div className="CheckBox__container" onClick={props.onClick}>
      {props.checked ? <span> </span> : null}
    </div>
    <span className="CheckBox-notice"> Uncheck if using a public device.</span>
    </div>
  )
}
