import React from 'react'
import './Home.css'

import RecentPosts from '../RecentPosts/RecentPosts'
import HomeTopBox from '../../components/HomeTopBox/HomeTopBox'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import { Animated } from "react-animated-css";
import WorkPreview from '../../components/WorkCards/WorkPreview/WorkPreview'


const Home = (props) => {
    return (
        <div>
            <div style={{background: 'black'}}>
                <Animated animationIn="slideInDown" animationOut="slideOutRight" isVisible={true}>
                    <HomeTopBox />
                </Animated>
            </div>
            <div>
                <HomeAbout />
            </div>
            <div>
                <RecentPosts history={props.history}/>
            </div>

                <div>
                    <WorkPreview />
                </div>

        </div>
    )
}

export default Home