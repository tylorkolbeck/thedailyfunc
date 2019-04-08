import React from 'react'
import './HomeAbout.css'

import ImageContainer from './ImageContainer/ImageContainer'
import CatBubble from '../CatBubble/CatBubble'
import ScrollAnimation from 'react-animate-on-scroll'


const HomeAbout = props => {
    let technologies =  [
        {N: 'Node' },
        {JS: 'JavaScript'},
        {R: 'React'},
        {E: 'Express'}
    ]

    let catBubbles

    catBubbles = technologies.map(cat => {
        let catAbbr = Object.keys(cat)
        let catTooltip = cat[Object.keys(cat)]
        return (
            <div className="HomeAbout__cat-div" key={catAbbr}>
                <CatBubble cat={catAbbr} />
                <h2 className="headerTxt-h2">{catTooltip}</h2>
            </div>
        )
    })

    return (
        <ScrollAnimation animateIn="slideInLeft">
            <div className="HomeAbout__container">
                <h2 className="headerTxt-h2">About</h2>
                <ImageContainer />
                <p>I am a Front-End Web Developer and Web Development educator working in San Digeo, California. I do contract work specializing in React, Node, HTML and CSS</p>
                <div className="HomeAbout__container-tech">
                    {catBubbles}
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default HomeAbout