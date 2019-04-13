import React from 'react'
import './HomeAbout.css'

import ImageContainer from './ImageContainer/ImageContainer'
import CatBubble from '../CatBubble/CatBubble'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '../UI/Button/Button'


const HomeAbout = props => {
    return (
        
            <div className="HomeAbout__container">

                <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                    <h2 className="headerTxt-h2">About</h2>
                    <ImageContainer />
                    <p style={{marginBottom: '150px', padding: '0px 20px', maxWidth: '600px', margin: '50px auto'}}>I am a Front-End Web Developer and Web Development educator working in San Digeo, California. I do contract work specializing in Node, Javascript, React and Express</p>
                    <Button text="Contact" route="/hire"/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div style={{position: 'relative'}}>
                    <div className="HomeAbout__container-tech" style={{marginBottom: '100px'}}>
                    </div>
                    </div>
                </ScrollAnimation>

            </div>
    )
}

export default HomeAbout