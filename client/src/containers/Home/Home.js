import React from 'react'
import './Home.css'

import RecentPosts from '../../components/RecentPosts/RecentPosts'
import HomeTopBox from '../../components/HomeTopBox/HomeTopBox'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import { Animated } from "react-animated-css"
import ScrollAnimation from 'react-animate-on-scroll'
import WorkPreview from '../../components/WorkCards/WorkPreview/WorkPreview'
import ProfBars from '../../components/ProfBars/ProfBars'


const Home = (props) => {
    console.log('HOME MOUNTED-', props.location)
    return (
        <ScrollAnimation animateIn="fadeIn"> 
            <div>
                <div>
                    <Animated animationIn="slideInDown" animationOut="slideOutRight" isVisible={true}>
                        <HomeTopBox />
                    </Animated>
                </div>

                <HomeAbout />
                <ProfBars />

                <RecentPosts history={props.history}/>
                <div>
                    <WorkPreview number={2} text="Recent Work" showButton={true}/>
                </div>

            </div>
        </ScrollAnimation>
    )
}

export default Home