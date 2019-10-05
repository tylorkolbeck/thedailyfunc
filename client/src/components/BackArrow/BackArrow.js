import React from 'react'
import './BackArrow.css'


let styling = {
    width: '25px',
    height: '25px',
    borderRadius: '50%', 
    background: '#1d1d1d', 
    fill: '#fec303',
    padding: '5px'
}

const BackArrow = props => {
    return (
        <div className="BackArrow__container" style={{...styling, ...props.style}}>
            <svg className="BackArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width={props.width} height={props.height} viewBox="0 0 459 459" style={{enableBackground: 'new 0 0 459 459'}} xmlSpace="preserve">
            <g>
                <g id="reply">
                    <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
                        />
                </g>
            </g>
            </svg>
        </div>
    )
}

export default BackArrow


