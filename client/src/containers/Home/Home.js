import React from 'react'
import './Home.css'

import RecentPosts from '../../components/RecentPosts/RecentPosts'
import HomeTopBox from '../../components/HomeTopBox/HomeTopBox'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import { Animated } from "react-animated-css"
import ScrollAnimation from 'react-animate-on-scroll'
import WorkPreview from '../../components/WorkCards/WorkPreview/WorkPreview'
import ProfBars from '../../components/ProfBars/ProfBars'
import HeaderTxtH2 from '../../components/UI/headers/HeaderH2/HeaderTxtH2'
import Button from '../../components/UI/Button/Button'



const Home = (props) => {
    return (
            <div>
                <div>
                    <Animated animationIn="fadeIn" isVisible={true}>
                        <HomeTopBox />
                    </Animated>
                </div>

                <ScrollAnimation animateIn="fadeIn"> 
                    <HomeAbout />
                </ScrollAnimation>                

                <ScrollAnimation animateIn="fadeIn"> 
                    <ProfBars />
                </ScrollAnimation>


                <ScrollAnimation animateIn="fadeIn"> 
                    <RecentPosts history={props.history}/>
                </ScrollAnimation>
                
                {/* <ScrollAnimation animateIn="fadeIn"> 
                    <HeaderTxtH2 text="Recent Work" />
                    <WorkPreview number={2} text="Recent Work" showButton={true}/>
                    <Button route="/work" text="All Work" />
                </ScrollAnimation> */}
                
            </div>
    )
}

export default Home