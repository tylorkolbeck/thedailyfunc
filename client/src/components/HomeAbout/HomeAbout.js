import React from 'react'
import './HomeAbout.css'

import ImageContainer from './ImageContainer/ImageContainer'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '../UI/Button/Button'
import HeaderTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2'


const HomeAbout = props => {
    return (
        <div className="HomeAbout__container">

            <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <HeaderTxtH2 text="About"/>

                <ImageContainer />
                <p>I am a Front-End Web Developer and educator working in San Digeo, California. I do contract work specializing in Node, Javascript, React and Express</p>
                <Button text="Contact" route="/hire"/>
            </ScrollAnimation>
        </div>
    )
}

export default HomeAbout