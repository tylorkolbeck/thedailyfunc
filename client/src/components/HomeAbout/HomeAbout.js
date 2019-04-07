import React from 'react'
import './HomeAbout.css'

import ImageContainer from './ImageContainer/ImageContainer'
import CatBubble from '../CatBubble/CatBubble'

const HomeAbout = props => {
    return (
        <div className="HomeAbout__container">
            <h2 className="headerTxt-h2">About</h2>
            <ImageContainer />
            <p>I am a Front-End Web Developer and Web Development educator working in San Digeo, California. I do contract work specializing in React and Node</p>
        </div>
    )
}

export default HomeAbout