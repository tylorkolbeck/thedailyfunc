import React, { Component } from 'react'
import './RecentPosts.css'
import {axiosInstance as axios } from '../../axios-config'
import PostCard from '../../components/PostCard/PostCard'
import { Animated } from "react-animated-css";


class RecentPosts extends Component {
    state = {
        recents: false
    }

    componentDidMount() {
        if (!this.state.recents) {
            axios.get('/posts/recent')
                .then((response) => {
                    this.setState({recents: response.data.docs}, ()=> console.log(this.state.recents))
                })
        }
    }

    postSelectedHandler(id) {
        this.props.history.push('post/' + id)
    }

    render() {
        let recentPosts = null

        if (this.state.recents) {
            recentPosts = this.state.recents.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
        }

        
        

        return (
            <div>

                <Animated animationIn="slideInLeft" isVisible={true}>
                    <h2 className="RecentPosts__h2">Recent Posts</h2>
                    <div className="RecentPosts__container">
                        {recentPosts}
                    </div>
                </Animated>

        </div>
        )
    }
}

export default RecentPosts