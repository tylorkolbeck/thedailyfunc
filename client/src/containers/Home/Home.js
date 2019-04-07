import React from 'react'
import './Home.css'

import RecentPosts from '../RecentPosts/RecentPosts'
import HomeTopBox from '../../components/HomeTopBox/HomeTopBox'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import { Animated } from "react-animated-css";


const Home = (props) => {
    return (
        <div>
            <Animated animationIn="slideInDown" animationOut="slideOutRight" isVisible={true}>
                <HomeTopBox />
            </Animated>
            <div>
                <HomeAbout />
            </div>
            <div>
                <RecentPosts history={props.history}/>
            </div>
        </div>
    )
}

export default Home