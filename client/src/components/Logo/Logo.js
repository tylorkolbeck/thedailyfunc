import React from 'react'
import './Logo.css'


const Logo = (props) => {
    let scaleStyle = props.scale > 20 ? 'scaleLogo' : ''

    return (
        // <div style={{...props.style}}>
        <div className={`Logo_container ${scaleStyle}`}>
        {/* // <div className={`Logo_container`}> */}
            <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 64 64" 
                xmlSpace="preserve"
                // className={`Logo__svg ${scaleStyle}`}
                className="Logo__svg"
                height={props.height}
                width={props.width}
                >
                
            <g>
                <path d="M29.8,11.5c0.3,0.1,0.7,0.1,1,0.1c0.1,0,0.2,0,0.3,0l0,0c0,0,0,0,0-0.1S31,11.2,31,11.1
                    C30.9,11,30.7,11,30.6,11c-1.2-0.3-3.5,0.2-3.6,0.1c0,0-0.1,0-0.2,0s-0.1,0-0.2,0s-0.1,0-0.2,0c-0.3,0-0.4,0-0.5,0.1
                    C25.9,11.3,29.1,11.3,29.8,11.5z"/>
                <path d="M26.7,16.7c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.6,0.3,0.8,0.2c0.2-0.1,0.4-0.4,0.4-0.8c0-0.2,0-0.5,0.1-0.7
                    c0-0.2,0-0.5,0.1-0.7c0.1-0.8,0.4-1.3,0.8-1.7c0,0,0.1,0,0.2,0s0.1,0.1,0.1,0.1c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.4-0.2,0.9-0.2,1.4
                    s0.2,0.9,0.5,1c0.3,0.2,0.7,0.1,1.2-0.3c0.1-0.1,0.3-0.2,0.3-0.4c0-0.1-0.1-0.2-0.2-0.3c-0.2-0.1-0.4-0.2-0.5-0.3s-0.2-0.1-0.3-0.2
                    l-0.1-0.1v-0.1l0.2-0.2h0.1c0.1,0,0.3,0,0.4,0c0.3,0,0.6,0.1,0.9,0c0.2,0,0.5,0,0.7-0.1c0.2,0,0.5-0.1,0.7-0.1c0.8,0,1.1-0.3,1.2-1
                    c0.1-0.6,0.4-1,0.8-1.3c0.4-0.3,1-0.4,1.7-0.2c0.2,0,0.3,0,0.5,0l0,0h-0.1c-1.7-0.6-3.4-1.2-5.2-1c0,0.2,0,0.4,0,0.7
                    c0,0.5,0,1,0.5,1.3c0.1,0,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0.1c-0.3-0.1-0.5-0.2-0.7-0.3s-0.4-0.2-0.6-0.3
                    c-0.9-0.3-1.6-0.5-2.3-0.5c-1.3,0-2.2,0.7-2.8,2.2C25.5,15.6,25.6,15.9,26.7,16.7z"/>
                <path d="M40.2,14c0,0,0.1,0.2,0.2,0.3c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.1,0.1,0,0.2
                    c0,0.1-0.1,0.1-0.2,0.1c-2.1-0.6-4.3-0.2-5.1,0.9c0.1,0,0.1,0.1,0.2,0.1l0,0c0.4,0.2,1,0.5,0.9,1.1c0,0.1,0,0.1-0.1,0.2
                    c-0.1,0.2-0.3,0.3-0.5,0.5c0.3,0.1,0.6,0.3,0.9,0.6c0.2-0.1,0.4-0.3,0.6-0.4c0.6-0.4,1.1-0.9,1.7-1.3c0.4-0.3,0.7-0.5,1.1-0.6
                    c0.9-0.5,1.8-0.4,2.6,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.7c0,0,0,0.1,0,0.2S44.5,18,44.4,18
                    c-0.1,0-0.2-0.1-0.4-0.1c-0.3-0.1-0.6-0.1-0.8-0.3c-0.8-0.6-1.7-0.6-2.6,0c-0.9,0.6-1.7,1.2-2.5,1.9c-0.7,0.6-0.8,2-0.2,2.8
                    c0.1,0.1,0.2,0.3,0.2,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.2L38,23.1h-0.1c0,0-0.1,0-0.1-0.1s-0.1-0.1-0.1-0.2
                    c-0.1-0.1-0.1-0.2-0.2-0.3c-0.8-0.7-1.1-1.4-0.7-2.4c0.1-0.3,0.1-0.7-0.1-0.9c-0.2-0.3-0.7-0.5-1.2-0.5c-0.3,0-0.5,0-0.8-0.1
                    c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0H34c-1.7,0.2-2.6,1.6-2.6,2.8c0,0.7,0.1,1.5,0.2,2.2v0.2c0,0.3,0.2,0.7,0.7,0.8
                    c0.4,0,0.5-0.2,0.6-0.7l0,0c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.2c0.1-0.7,0.4-1.1,0.9-1.3h0.1l0.1,0.1c0,0.2,0,0.3-0.1,0.5
                    c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.6-0.2,1.3-0.9,1.6c-0.6,0.3-1.1,0.2-1.7-0.3c-0.2,0.3-0.3,0.6-0.1,0.8c0.1,0.2,0.4,0.3,0.7,0.2
                    c0.4,0,0.8-0.3,1.2-0.5c0.6-0.4,1.1-0.8,1.7-1.2c0.2-0.1,0.4-0.3,0.6-0.4c-0.6-1.1-0.6-2.1,0-3.1c0-0.1,0.1-0.1,0.2-0.1
                    c0.1,0,0.1,0.1,0.1,0.1c0,0.2,0,0.5,0,0.7c0,0.3,0,0.6,0,0.8c0,0.3,0.2,0.8,0.5,1.1c0.6,0.7,1.5,1,2.3,0.9c0.9-0.1,1.7-0.7,2-1.5
                    c0.1-0.2,0.2-0.5,0.3-0.7s0.1-0.5,0.2-0.7l0.1-0.1c0.2-0.5,0.4-0.9,0.7-1.3c0.2-0.3,0.5-0.4,0.8-0.5c0.4,0,0.9,0.1,1.3,0.5
                    c0.7,0.5,0.8,1.2,0.3,1.9c-0.2,0.3-0.4,0.5-0.7,0.8c-0.1,0.1-0.2,0.2-0.3,0.3c0,0-0.1,0.1-0.2,0s-0.1-0.1-0.1-0.2
                    c0.1-0.4,0.2-0.7,0.4-1c0.1-0.1,0.1-0.3,0.2-0.4c0.2-0.6-0.2-0.9-0.5-1c-0.2-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3,0.2-0.4,0.4
                    c-0.2,0.4-0.4,0.8-0.5,1.3c-0.3,1-0.7,2.1-1.8,2.7c-0.3,0.2-0.6,0.3-0.9,0.4c0,0.1-0.1,0.1-0.1,0.2c0.2,0.4,0.4,0.6,0.6,0.7
                    c0.2,0.1,0.6,0,1-0.2s0.8-0.5,1.2-0.8c0.2-0.1,0.4-0.3,0.5-0.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0,0.2c-0.3,0.8-0.8,1.4-1.6,1.9
                    c-0.9,0.5-2.1,0.2-2.8-0.7c-0.5-0.7-1.1-1.1-1.8-1.2c-0.6-0.1-1.3,0.1-1.9,0.6c-1.2,1-2.7,1.8-4.6,2.5c1.1,0.1,2.1,0.4,2.9,1
                    c0.6,0.5,1.3,0.5,1.9,0.5c0.1,0,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0,0,0,0,0-0.1c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1
                    c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.5-0.2-0.7-0.2l-0.3-0.1c-0.1,0-0.1-0.1-0.1-0.1v-0.2c0,0,0-0.1,0.1-0.1H33
                    c1.5,0.2,2.6-0.2,3.4-1.3l0.1-0.1h0.1l0.1,0.1c0.1,0,0.1,0.1,0,0.2L36,28.7l0,0c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0.1,0.5,0.1,0.8,0.2
                    c0.8,0.2,1.7,0.4,2.6,0.5c0.4,0,0.9-0.1,1.3-0.4c0.4-0.2,0.7-0.5,1-0.8c0.2-0.2,0.4-0.3,0.6-0.5c1.6-1.3,2.5-2.8,2.7-4.6
                    c0.1-0.6,0.1-1.3,0.1-1.9c0-0.3,0-0.6,0-0.9c0-0.7,0.4-1.2,0.9-1.5h0.1l0.1,0.1c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.4-0.2,0.8-0.2,1.1
                    c0.2,1.7,0,3.4-0.7,4.9c-0.4,0.8-0.2,1.4,0.1,2c0.3,0.7,0.7,1.1,1.3,1.2s1.2-0.1,1.7-0.7c0.1-0.1,0.2-0.2,0.3-0.3
                    c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.2,0.4-0.3,0.6-0.4c0.1-0.1,0.2-0.1,0.3-0.2h0.1c0,0,0.1,0,0.1,0.1l0.1,0.1c0,0.1,0,0.1,0,0.2
                    c-0.4,0.3-0.4,0.6-0.2,1.1c0.2,0.8,0.2,1.6,0,2.5c-0.1,0.3-0.1,0.6,0,1c0.1,0.5,0.2,0.9-0.3,1.3H50c0,0-0.1,0-0.1-0.1l-0.2-0.6
                    L48.4,34c0,0.1-0.1,0.1-0.2,0h-0.1C48,34,48,33.9,48,33.8l0.2-0.5c0.2-0.4,0.3-0.8,0.5-1.1c0.1-0.2,0.2-0.5,0.3-0.7
                    c0.2-0.5,0.4-0.9,0.6-1.4c0.1-0.3,0.1-0.6,0-0.9c0-0.1,0-0.1,0-0.2l-0.4,0.2c-0.5,0.3-0.9,0.6-1.4,0.9c0,0-0.1,0.1-0.1,0.2
                    s-0.1,0.1-0.1,0.2c-0.2,0.2-0.3,0.5-0.5,0.7L47,31.3c0,0.1-0.1,0.1-0.2,0l-0.2-0.1c-0.1,0-0.1-0.1-0.1-0.2v-0.1
                    c0-0.1,0.1-0.2,0.1-0.3c0.2-0.5,0.1-0.7-0.4-1c-0.6-0.3-1-0.8-1.2-1.1l-0.1-0.1c-0.3-0.4-0.4-0.6-0.6-0.7c-0.1,0-0.4,0.2-0.8,0.5
                    c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l0,0c-0.2,0.3-0.5,0.7-0.6,1c-0.1,0.4-0.1,0.7-0.2,1.2c0,0.1,0,0.3,0,0.4l0,0
                    c0.1,0,0.2,0.1,0.3,0.1h0.2c1.1,0.2,2.2,0.3,3.1,1c0,0,0.3,0,0.4-0.1c0.4-0.3,0.9-0.7,1.3-1c0.1-0.1,0.3-0.2,0.4-0.3
                    c0,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.1c-0.2,0.9-0.8,1.5-1.5,2.1c0,0.1,0.1,0.3,0.1,0.4c0.1,0.3,0.1,0.6,0.2,0.9
                    c0.2,0.8,0.6,1.2,1.3,1.1c1.4,0,2.4-0.7,3.1-2.2c0.3-0.6,0.4-1.2,0.2-1.8c-0.1-0.4,0-0.8,0-1.2c0-0.1,0-0.3,0.1-0.4
                    c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.3c-0.1-1.7-0.4-3.4-1-5c-0.1-0.2-0.2-0.3-0.3-0.3s-0.2,0-0.3,0
                    c-0.7,0.3-1.3,0.9-1.9,1.8c-0.4,0.6-0.6,1-0.3,1.6c0,0.1,0,0.2,0,0.2s-0.1,0-0.2,0l0,0l-1.4-0.5L46.4,27v-0.1c0,0,0,0,0-0.1
                    s0.1-0.1,0.2-0.2c0.7-0.5,0.9-1,0.7-1.8c-0.2-1-0.1-1.7,0.4-2.3c0,0,0.1-0.1,0.2,0c0.1,0,0.1,0.1,0.1,0.1c0,0.2,0,0.3,0,0.5
                    c0,0.4,0,0.7,0,1.1c0,0.1,0,0.2,0.1,0.2c0,0,0.1,0,0.3-0.1c0.1-0.1,0.2-0.2,0.4-0.4c0.1-0.1,0.2-0.2,0.4-0.4
                    c0.4-0.4,0.9-0.6,1.4-0.6s0.9,0.3,1.3,0.8c0,0,0,0,0.1,0c0-0.1,0-0.2,0-0.2c0-1.3-1.2-3-2.5-3.5c-0.2-0.1-0.4-0.1-0.6-0.1
                    c-0.2,0-0.3,0-0.3,0.1s0,0.2,0,0.2c0.2,0.3,0.4,0.7,0.8,1c0.2,0.2,0.4,0.3,0.6,0.4c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.1,0.1,0,0.2
                    l-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c-0.2-0.1-0.4-0.2-0.6-0.2c-0.4-0.2-0.9-0.4-1.3-0.6c-0.5-0.3-0.7-0.9-0.6-1.6
                    c0.2-0.7,0.7-0.8,1.3-0.8c0.1,0,0.2,0,0.2,0l0,0l0,0c-0.1-0.1-0.3-0.3-0.4-0.4c-0.4-0.4-0.8-0.8-1.2-1.2c-0.1-0.1-0.2-0.2-0.3-0.1
                    c-0.1,0-0.1,0.1-0.2,0.3c-0.2,0.8-0.8,1.2-1.3,1.5c-1,0.5-1.9,0.6-2.9,0.3c-0.6-0.2-1.1,0-1.5,0.5l-0.1,0.1
                    c-0.2,0.2-0.3,0.5-0.6,0.7c-0.2,0.1-0.4,0.2-0.6,0.3c-0.1,0-0.2,0.1-0.3,0.1s-0.1,0-0.2,0c0-0.1,0-0.1,0-0.2
                    c0.1-0.2,0.3-0.4,0.4-0.6c0.3-0.4,0.6-0.8,0.8-1.2c0.5-0.8,1.1-1,2-0.8l0.2,0.1c0.3,0.1,0.5,0.1,0.8,0.2c0.8,0.1,1.7-0.3,2-1
                    c0.1-0.3,0.2-0.5,0.2-0.7c0-0.4-0.3-0.8-0.8-1.2c-0.5-0.4-1.1-0.9-1.6-1.2c-0.2-0.1-0.4-0.2-0.6-0.3c-0.6-0.2-1.3-0.3-2-0.3
                    C40.6,14,40.4,14,40.2,14C40.4,13.8,40.2,13.9,40.2,14z"/>
                <path d="M23,29.1c0.7,0.5,1.2,0.5,2.5-0.8c-0.2,0-0.4-0.1-0.6-0.1c-0.1,0-0.2,0.1-0.3,0.2l-0.1,0.1v0.1
                    c0,0.1,0,0.1-0.1,0.1h-0.1c-0.7-0.3-1.3-0.2-1.8,0.3c-0.6,0.7-0.6,1.5,0.1,2.5v0.1c0,0,0,0.1-0.1,0.1l-0.1,0.1
                    c0.2,0.1,0.3,0.1,0.4,0c0,0,0.1-0.1,0.1-0.4c0-0.2,0-0.3,0-0.5s0-0.4,0-0.6s-0.1-0.5-0.1-0.7c0-0.1,0-0.2-0.1-0.4
                    c0-0.1,0-0.1,0.1-0.1C22.9,29.1,23,29.1,23,29.1z"/>
                <path d="M13.8,20L13.8,20c0.4-1.4,1.7-2,2.6-2.2c0.7-0.2,1.4-0.3,2-0.4h0.2c0.9-0.1,0.9-0.2,0.9-0.9
                    c0-0.7,0.9-2.9,0.8-3l-0.1-0.2v-0.1c0,0,0-0.1,0.1-0.1s0.2-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.2,0,0.5-0.1,0.7-0.1
                    s0.5,0,0.7-0.1c0.5-0.1,1.1-0.2,1.6-0.3c0.4-0.1,0.7-0.2,0.5-0.3c-0.4-0.1-0.9-0.2-1.3-0.1c-1.5,0.2-2.8,0.7-3.9,1.5h-0.1
                    c-0.3,0.3-0.7,0.5-1.2,0.6c-0.9,0.2-1.6,0.9-2.2,1.6c0.6-0.3,1.2-0.6,1.7-1c0.9-0.6,0.9,0.4,0.4,0.9c-0.2,0.2-0.5,0.4-0.8,0.6
                    l0.8,0.6c0.1,0,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0.1l-0.7-0.1c-0.3,0-0.5-0.1-0.8-0.1c-1.6,0-3,0.8-3.6,2.3
                    c-0.1,0.3-0.2,0.5-0.1,0.7C13.3,19.8,13.5,19.9,13.8,20z"/>
                <path d="M36.6,12.8c-0.6-0.1-1,0.1-1.2,0.6c-0.1,0.2-0.2,0.5-0.2,0.7v0.2c-0.2,0.6-0.5,0.9-1.1,0.9
                    c-0.4,0-0.9,0.1-1.5,0.3c-0.2,0.1-0.4,0.2-0.4,0.3c-0.3,1.5-1.4,1.8-2.5,1.8c-0.8,0.1-1.4,0.4-1.8,0.9s-0.5,1.3-0.3,2
                    c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.2,0.2,0.5,0.2,0.7l0,0c0.1,0.4,0.2,0.8,0.2,1.2c0,0.5,0,1-0.1,1.5c0,0.2,0,0.4,0,0.6
                    c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.2-0.1c-0.2-0.4-0.3-0.8-0.4-1.2c-0.1-0.3-0.1-0.6-0.1-0.8c0-0.3-0.1-0.7-0.1-1
                    c0-0.1-0.2-0.3-0.3-0.4l0,0c-0.1,0-0.3,0.2-0.3,0.3c-0.5,0.9-0.6,2-0.3,3c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.2,0.1,0.3,0.2,0.5
                    c0,0.1,0,0.1,0,0.2c0,0-0.1,0-0.2,0c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.5-0.4-0.6-0.3c-0.2,0-0.3,0.3-0.5,0.5
                    c0,0.1-0.1,0.1-0.1,0.2c0.2,0,0.5,0.1,0.7,0.1c0.6,0.1,1.2,0.2,1.8,0.3c0.9,0.2,1.7,0.1,2.7-0.3c0.3-0.1,0.4-0.2,0.4-0.4
                    c0-0.1,0-0.3-0.1-0.4c-0.4-0.5-0.3-1,0-1.5c0.5-0.8,0.4-1.8,0.2-2.6c-0.2-0.7-0.7-0.9-1.2-1.1c-0.6-0.2-0.7-0.5-0.8-0.8
                    c0-0.2,0-0.6,0.5-1c0,0,0.1-0.1,0.2,0c0.1,0,0.1,0.1,0.1,0.2c-0.1,0.3-0.1,0.5,0,0.6c0.1,0.2,0.4,0.3,0.6,0.3
                    c0.5,0.1,0.8,0.1,0.9-0.3c0.5-1.5,1.6-2.3,3.4-2.5c0.5-0.1,1-0.2,1.5-0.3c0.2,0,0.3-0.1,0.5-0.1C35.7,17,35.2,17,34.7,17
                    c-0.3,0-0.6,0-0.9-0.1c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.1c0.2-0.1,0.3-0.2,0.5-0.2c0.3-0.1,0.5-0.3,0.7-0.4
                    c0.9-1.1,2-1.6,3.7-1.8c0.4,0,0.7-0.1,0.8-0.6c0-0.3,0.3-0.4,0.6-0.6l0.1-0.1c0.1-0.1,0.3-0.1,0.4-0.1h0.1l0,0l-0.4-0.1
                    c-0.5-0.1-1.1-0.3-1.6-0.4c-0.1,0-0.2,0-0.2,0c-0.4,0.9-1.1,0.7-1.7,0.6L36.6,12.8z"/>
                <path d="M35.8,43.2c0,0-1.2-0.5-2.9-1.9c0.1,0.2,0.2,0.4,0.3,0.5c0.3,0.3,0.6,0.6,0.9,0.8c1.2,1.2,2.4,2.4,3.2,3.9
                    c0,0.1,0.2,0.1,0.4,0.2c0.1,0,0.2,0,0.3,0C38,45.2,37,43.6,35.8,43.2z"/>
                <path d="M53.2,33.2c-0.1,0-0.5,0.2-0.9,0.7c-0.2,0.2-0.3,0.4-0.5,0.7s-0.4,0.6-0.6,0.8l0,0c-0.6,0.5-1,1-1,1.7
                    c0,0.1-0.1,0.2-0.1,0.3c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1-0.1-0.1-0.1c-0.1-1.1-0.1-1.1-1-1.1h-0.1
                    c-0.5,0-0.9-0.1-1.3-0.2c-0.2,0-0.4-0.1-0.5-0.1l-1.5,1c-0.1,0-0.1,0-0.2,0c0,0-0.1-0.1,0-0.2c0.2-0.3,0.4-0.6,0.6-0.8
                    c0.1-0.2,0.2-0.3,0.4-0.5c0.6-0.9,0.5-2-0.3-2.5c-1.1-0.7-2.4-1-4.1-0.9c-0.6,0.1-1.8,0-2.4-0.9c0,0,0-0.1,0-0.2s0.1-0.1,0.2-0.1
                    c0.1,0,0.2,0.1,0.3,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.8,0.2,1.3,0,1.5-0.8c0.1-0.2,0-0.3,0-0.4c0,0-0.2,0-0.3,0
                    c-0.7,0.4-1.4,0.2-2.1,0.1c-0.5-0.1-1.2-0.3-1.9-0.2c-0.7,0.1-1.4,0.3-2.1,0.4c-0.2,0.1-0.5,0.1-0.7,0.2c0,0.1,0.1,0.2,0.1,0.3
                    c0.3,0.7,0.5,0.8,1.1,0.6c0.8-0.3,1.5-0.2,2.4,0.3l0.3,0.2c1.6,1,3.2,2,5.2,2c0.1,0,0.1,0,0.1,0.1s0,0.1-0.1,0.2l-0.8,0.4L43,35.6
                    c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.1,0c-0.1-0.1-0.3-0.3-0.4-0.4c-0.2-0.3-0.4-0.5-0.7-0.6c-0.7-0.4-1.4-0.7-2.1-1
                    c-0.6-0.3-1.2-0.6-1.8-0.9c-1.1-0.6-2.3-0.3-2.9,0.8c-0.7,1.2-1.6,1.5-2.8,0.8c-0.3-0.2-0.7-0.3-1-0.5c-0.1-0.1-0.2-0.1-0.3-0.2
                    l-0.1-0.1v-0.1l0.9-1.3l0.1-0.1c0.1,0,0.1,0,0.1,0.1v0.1c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.2,0,0.2c0.1,0.5,0.5,0.6,0.9,0.7h0.1
                    c0.4,0.1,0.7,0,0.9-0.5c0.1-0.2,0.2-0.6,0.3-0.9c0.1-1.4-1-2.6-2.5-3c-2-0.5-2.5,0.1-3.1,1.2c-0.2,0.3-0.4,0.6-0.6,0.8
                    c-0.1,0.1-0.2,0.2-0.3,0.3h-0.1h-0.1l-0.1-0.1c0,0-0.1-0.1,0-0.2l1.2-2.6c-0.2,0-0.5-0.1-0.7-0.1c-0.5-0.1-0.9-0.2-1.4-0.2
                    c-0.2,0.9-0.6,1.4-1.3,1.7c-0.5,0.2-0.8,0.5-0.8,1c0,0.9,0,1.9,0.2,2.9c0.1,0.8,0.8,1.4,1.4,1.8c0.4,0.3,0.7,0.5,1,0.9
                    c0,0.1,0,0.1,0,0.2l-0.1,0.1c0,0,0,0-0.1,0l-0.3-0.1c-0.9-0.4-1.7-0.7-2.7-0.3c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2
                    c0.6-0.6,0.4-1,0.1-1.7c-0.1-0.2-0.2-0.5-0.2-0.7c0-0.1,0-0.2-0.1-0.3c-0.4-1.3-0.7-1.5-2-1.4c-0.1,0-0.1,0-0.1-0.1s0-0.1,0-0.2
                    c0.4-0.3,0.8-0.5,1.3-0.4l-1-1.2c-0.4,0.3-0.6,0.8-0.7,1.2c-0.2,1,0,2.4,0.6,3.1c1.1-0.2,1.6,0,2.1,0.9c0,0.1,0,0.1,0,0.2
                    c0,0-0.1,0.1-0.2,0h-0.1c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.3-0.1-0.5-0.1c-0.1,0-0.2,0.1-0.3,0.2
                    c-0.3,0.4-0.1,0.7,0.3,1.2l0,0c0.1,0.1,0.1,0.2,0.2,0.2c1.3,1.2,2.7,1.9,4.2,2.2c1.6,0.3,2.3-0.1,2.8-1.6c0.2-0.5,0.3-1.1,0.1-1.2
                    c-0.2-0.2-0.7-0.2-1.2-0.1c-0.4,0-0.9,0-1.2-0.6c0-0.1,0-0.1,0-0.2c0,0,0.1-0.1,0.2,0c0.4,0.2,0.8,0.1,1.3,0s1.1-0.2,1.6,0.1
                    c0-0.5-0.3-0.8-0.7-1.1c-1.1-0.7-2.1-0.7-3.1,0c0,0-0.1,0-0.2,0s-0.1-0.1-0.1-0.2c0.3-1,0.6-1.2,2.1-1.5v-0.1
                    c0-0.1,0.1-0.2,0.1-0.3c0.3-0.7,0.7-1.7,2.1-1.6c0.2,0,0.5,0,0.7-0.1c0.1,0,0.3-0.1,0.4-0.1s0.1,0,0.1,0.1v0.1
                    c-0.3,0.6-0.8,0.7-1.2,0.8c-0.1,0-0.1,0-0.2,0c-0.7,0.2-0.9,0.7-1,1.2s0.2,0.7,0.6,1c0.2,0.2,0.5,0.3,0.8,0.4l0.1,0.1
                    c0.2,0.1,0.5,0.2,0.7,0.3c0.4,0.2,0.9,0.4,1.3,0.6c0.9,0.5,1,0.5,1.8-0.2c0.2-0.2,0.4-0.3,0.6-0.4c0.1,0,0.1-0.1,0.2-0.1h0.1
                    l0.1,0.1c0,0.1,0,0.3,0,0.4c0,0.2,0,0.4,0,0.5c0.1,0.1,0.5,0.2,0.8,0.1c0.2,0,0.3-0.2,0.5-0.3c0.1-0.1,0.1-0.1,0.2-0.1
                    c0.2-0.1,0.4-0.3,0.5-0.4l0.1-0.1c0.1,0,0.1,0,0.2,0c0.2,0.2,0.4,0.3,0.5,0.5c0.3,0.3,0.7,0.7,1.1,0.8c0.4,0.2,0.9,0.2,1.4,0.3
                    c0.2,0,0.4,0,0.6,0.1c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1-0.1,0.2c-1.4,0.8-2.6,0.6-3.5-0.6c0,0-0.1,0-0.1-0.1h-0.1
                    c-0.3,0.1-0.7,0.2-0.9,0.4c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3s0,0.1,0,0.1H37h-0.1c-0.1,0-0.3-0.1-0.5-0.2
                    c-0.4-0.2-0.7-0.5-1-0.7s-0.5-0.3-0.9-0.1s-1,0.1-1.5,0.1c-0.2,0-0.4-0.2-0.6-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.4-0.2-0.6-0.2
                    s-0.4,0.1-0.5,0.3c-0.4,0.6-0.7,1.3-0.9,2c0,0.2-0.1,0.4,0,0.5s0.3,0.1,0.6,0.1c0.7-0.1,1.4-0.4,2.1-0.6H33
                    c0.3-0.1,0.4-0.2,0.5-0.3c0-0.1,0-0.3-0.1-0.6c0-0.1,0-0.1,0-0.2c0,0,0.1-0.1,0.2,0c1.7,0.8,3.3,1.5,4.9,0.7h0.1
                    c0.1,0,0.3,0.1,0.4,0.1c0.2,0.1,0.3,0.1,0.5,0.1c0.4,0,0.8,0,1.1-0.1c1.1-0.2,2.1-0.6,3-1.3c0.1-0.1,0.2-0.2,0.3-0.2l0.2-0.1h0.1
                    l0.1,0.1c0,0.3,0,0.5-0.2,0.6c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.1,0.2,0.2,0.4,0.3c0.5,0.2,1,0.3,1.4,0.4c0.9,0.1,1.9-0.2,3-0.9h0.1
                    l0.1,0.1c0.1,0.7,1.1,1.9,2.1,1.4c0.8-0.4,1-0.9,0.5-1.8c0-0.1,0-0.1,0-0.2c0,0,0.1-0.1,0.2,0l1-0.8c0,0,0-0.1,0.1-0.1
                    c0.1-0.1,0.2-0.1,0.3-0.2c0.2-0.1,0.3-0.1,0.3-0.2c0.2-0.4,0.3-0.8,0.4-1.2C53.5,33.8,53.6,33.3,53.2,33.2z"/>
                <path d="M32,0C14.3,0,0,14.3,0,32s14.3,32,32,32s32-14.3,32-32S49.7,0,32,0z M54.1,34.6c-0.2,1.5-1,3-2.5,4.6
                    c-1,1-2.3,1-3.2,0.9l0,0c0,0.1-0.1,0.1-0.1,0.2c-0.9,2.3-2.6,3.6-5.1,3.7c-1.1,0.1-2.2,0-3.3,0c-0.5,0-1,0-1.5-0.1
                    c-0.1,0-0.2,0-0.3,0c0.1,0.2,0.1,0.3,0.2,0.5c0.2,0.5,0.4,1.1,0.6,1.6c0.1,0.4,0.3,1.1-0.3,1.5c0.4,2.5-1,4.8-3.3,5.8
                    c-2.7,1.2-6,0.7-8.6-0.5c-5.8-2.8-6-10.7-11.7-13.4c0,0,0,0-0.1,0c-1.1-0.1-2.3,0.1-3.3,0.5c-0.5,0.2-0.9,0.6-1.4,0.7
                    c-0.9,0.2-1.9-0.2-2.5-0.8c-0.4-0.5,0.3-1.2,0.7-0.7c0.9,0.9,1.8,0.5,2.7,0c-0.7-0.2-1.3-0.7-1.7-1.5c-0.3-0.6,0.6-1.1,0.9-0.5
                    c0.6,1.1,1.8,1.3,3,1.3c-0.2-0.1-0.4-0.3-0.6-0.4c-0.9-0.7-2.1-2-3.3-2.1c-0.6-0.1-0.6-1.1,0-1c2,0.2,3.2,2.1,4.9,2.9
                    c0.1,0,0.2,0.1,0.3,0.1c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.9,0-1.6-0.5-2.3c-0.4-0.5,0.5-1,0.9-0.5c0.7,1,0.4,2.4,0.9,3.4
                    c0.1,0,0.2,0,0.3,0.1c4.4,2.1,5.6,7,8.3,10.6c1.7,2.3,4.3,3.6,7.2,3.8c2.6,0.2,6.2-1.2,5.5-4.5c0-0.1,0-0.3,0-0.4
                    c-0.1-0.1-0.1-0.2-0.2-0.3c-0.8-1.5-1.9-2.6-3.1-3.7c-0.4-0.4-0.8-0.8-1.2-1.2c-0.3-0.4-0.6-0.9-0.8-1.6c-0.2-0.7-0.5-0.9-1.1-0.7
                    c-0.3,0.1-0.7,0.1-1,0.2c-0.5,0.1-1,0.2-1.6,0.3c-1.6,0.3-3.1-0.1-4.7-1.1c-1-0.6-1.9-1.3-2.4-2.2L20.8,37
                    c-0.7-1.4-1.5-2.9-1.4-4.6l0,0c-2.2-0.1-4.6-0.5-6.4-2.5c-0.9-1-1.2-2.2-1.4-3.3c0-0.3-0.1-0.7-0.2-1C11,24.2,11,22.7,11.6,21
                    c0.3-0.9,0.6-1.7,0.9-2.4c0.2-0.5,0.6-1,1.1-1.5c0.6-0.7,1.3-1.4,2.1-2.1l0.2-0.2c0.4-0.4,1.1-0.9,1.6-1.2c0.2-0.1,0.4-0.2,0.6-0.4
                    c1.5-0.9,3.1-1.8,4.8-2.2c1.4-0.3,2.9-0.6,4.4-0.7c1.7-0.2,3.5-0.2,5.3-0.3c1.8-0.1,3.4,0.5,5,1.1c0.3,0.1,0.5,0.1,0.8,0.2
                    c0.2,0,0.4,0.1,0.6,0.1c0.1,0,0.3,0.1,0.4,0.1c0.5,0.1,1.2,0.4,1.7,0.6c0.5,0.3,1,0.5,1.5,0.8c1.4,0.7,2.9,1.5,4,2.7
                    c0.4,0.4,0.8,0.7,1.2,1c0.6,0.4,1.1,0.9,1.6,1.4c0.5,0.6,0.9,1.2,1.4,1.8c0.3,0.4,0.7,0.9,1,1.3s0.5,1,0.7,1.5
                    c0.1,0.2,0.2,0.4,0.3,0.7c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0.8,1.2,1.3,2.7,1.4,4.3v0.4C54.2,30.4,54.3,32.5,54.1,34.6z"/>
                <path d="M13.6,20.4L13.6,20.4c-0.3,0.1-0.4,0.2-0.5,0.2s-0.1,0-0.2,0h-0.1c-0.4,1-0.6,1.9-0.6,2.8l0,0l0,0
                    c0.2-0.3,0.3-0.7,0.4-1C12.7,21.6,12.9,20.9,13.6,20.4z"/>
                <path d="M20.8,29.5l0.2-0.2c0.7-0.8-1.3-3.1-1.3-3.1c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.1
                    c0.7-0.2,1.1-0.5,1.1-1.2c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.1,0.1,0.1,0.1c0.1,0.7,0.5,1.2,1.2,1.5h0.1c0.3,0.1,0.6,0.2,0.9,0.3
                    c0.3,0.1,0.5-0.3,0.4-0.5l-0.2-0.3c0,0,0-0.1,0-0.2c0,0,0.1-0.1,0.2-0.1s0.3,0.1,0.4,0.1c0.2,0.1,0.4,0.1,0.6,0.1
                    c0.2-0.1,0.5-0.3,0.6-0.5c0.1-0.6,0.1-1.2,0.1-1.8v-0.1c0-0.3-0.2-0.5-0.5-0.5H23c-0.1,0-0.3,0.1-0.3,0.2c-0.1,0.1-0.1,0.3,0,0.4
                    l0.2,0.4c0,0.1,0,0.1-0.1,0.2l-0.2,0.1c-0.1,0-0.2,0-0.2,0c-0.4-0.7-1.1-0.8-2.1-0.6c-0.9,0.2-1.7,0.8-2.6,1.7
                    c-0.2,0.3-0.3,0.6-0.3,0.9s0.2,0.6,0.5,0.7c0.3,0.2,0.7,0.3,1,0.4c0.1,0,0.2,0.1,0.3,0.1c0.7,0.3,1.2,0.6,1.5,1.1
                    c0,0.1,0,0.1,0,0.2c0,0-0.1,0.1-0.2,0c-0.2-0.1-0.4-0.1-0.6-0.2c-0.4-0.2-0.8-0.3-1.2-0.4c-1.8-0.4-2.2-0.9-2.3-2.6
                    c-0.2,0-0.4-0.1-0.5-0.1c-0.5-0.1-1-0.2-1.4-0.4c-0.5-0.2-0.8-0.5-0.9-0.9c-0.1-0.4,0-0.8,0.3-1.2c0.5-0.7,1-1.3,1.7-1.6
                    c0.3-0.1,0.6-0.2,0.8-0.3c0.8-0.3,1.5-0.6,2.1-1.1c0.1-0.1,0.1,0,0.2,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1s0,0.1,0,0.1
                    c-0.7,0.9-1.4,1.3-2.2,1.6c-0.8,0.2-1.4,0.7-1.8,1.5c-0.2,0.3-0.2,0.5-0.1,0.6c0.1,0.2,0.2,0.3,0.5,0.4c0.2,0.1,0.5,0.1,0.8,0.2
                    c0.2,0,0.4,0.1,0.6,0.1c0.4,0.1,0.6,0,1-0.3c1.2-0.9,2.3-1.5,3.3-2c0.5-0.2,1-0.3,1.5-0.3h0.2c0.4,0,0.9,0,1.3,0c0.5,0,1.1,0,1.6,0
                    c0.4,0,0.7-0.2,0.9-0.4c0.2-0.2,0.3-0.6,0.2-1.1c0-0.3-0.1-0.6,0.1-1c0.4-1,0.2-1.8-0.8-2.3c-0.8-0.5-1-1.2-0.7-2.2
                    c0.1-0.4,0.3-0.9,0.5-1.3c0.1-0.1,0.1-0.3,0.2-0.4c-0.3,0-0.5,0.1-0.8,0.1c-0.8,0.1-1.6,0.2-2.3,0.6v0.1l1.9,0.6
                    c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.2,0s-0.3,0.1-0.4,0.1c-0.2,0.1-0.5,0.1-0.7,0.2c-0.7,0.2-1.3,0.4-2,0.6
                    c-0.4,0.2-0.7,0.5-0.6,0.9c0,0.4,0.3,0.6,0.8,0.8c0.2,0.1,0.5,0.1,0.7,0.2l0.3,0.1c0.3,0.1,0.5,0.1,0.8,0.2
                    c0.4,0.1,0.9,0.2,1.3,0.3c0.4,0.1,1.1,0.3,1.1,1.2c0,0.5-0.3,0.9-0.8,1.2c-0.5,0.2-1,0.4-1.6,0.5c-0.3,0.1-0.6,0.1-1,0.1
                    s-0.8,0-1.2,0.1c-0.5,0.1-1.1,0.4-1.6,0.6c-0.2,0.1-0.4,0.2-0.7,0.3c-0.1,0-0.1,0-0.2,0c0-0.1,0-0.1,0-0.2c0.8-1,1.9-1.5,3.3-1.7
                    h0.2c0.6-0.1,1.2-0.1,1.7-0.3c0.2-0.1,0.3-0.3,0.5-0.5c0-0.1,0.1-0.1,0.1-0.2l-0.1-0.1c-0.2-0.1-0.3-0.3-0.5-0.3
                    c-1.2-0.2-2.3-0.4-3.5-0.5c-0.3,0-0.6,0-0.9,0c-1.2,0-2.3,0.2-3.3,0.6c-0.4,0.2-0.7,0.5-1,0.9c0,0,0.1,0.3,0.2,0.4
                    c0.1,0.1,0.1,0.2,0.2,0.3v0.1l-0.1,0.1c-1.1,0.1-1.6,0.5-1.8,1.4c-0.1,0.5-0.3,0.9-0.5,1.4c-0.6,1.4-0.7,3-0.1,4.3
                    c0.5,1.2,1.4,2.1,2.5,2.6c0.7,0.3,1.4,0.5,2.3,0.7c0.5,0.1,1,0.2,1.5-0.1c-1-0.6-2-0.9-3.4-0.9c-0.1,0-0.1,0-0.1-0.1s0-0.1,0.1-0.2
                    l0.7-0.3l0,0L16,29.4c-0.4-0.1-0.8-0.3-1.2-0.5c-1.2-0.5-1.6-1.1-1.7-2.3c0-0.1,0-0.1,0.1-0.1s0.1,0,0.2,0.1
                    c0.4,0.6,0.8,1.2,1.5,1.4l-0.5-1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0c1,1.5,2.4,2.6,4.2,3.4C19.9,30.4,20,30.3,20.8,29.5z"/>
                <path d="M42.6,40.9c-1.9-0.4-3.8-0.5-5.7-0.6c-1.7-0.2-3.1-0.4-3.8-0.4l0.1,0.1c0.3,0.3,0.7,0.5,1,0.8
                    c0.2,0.1,2.8,2.1,4.2,2.4c1.9,0.4,4.5,0.9,6.3-0.3C46.4,41.8,43.3,41.1,42.6,40.9z"/>
            </g>
            </svg>
        </div>
    )
}

export default Logo