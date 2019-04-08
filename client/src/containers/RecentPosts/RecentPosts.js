import React, { Component } from 'react'
import './RecentPosts.css'
import {axiosInstance as axios } from '../../axios-config'
import PostCard from '../../components/PostCard/PostCard'
import ScrollAnimation from 'react-animate-on-scroll'



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
            <div className="RecentPosts__container">
            <ScrollAnimation animateIn="slideInLeft">
                    <div className="flex-center">
                        <h2 className="headerTxt-h2 center-txt" style={{marginBottom: '50px'}}>Recent Posts</h2>
                    </div>
                        <div className="RecentPosts__wrapper">
                            {recentPosts}
                        </div>
            </ScrollAnimation>
            </div>
        )
    }
}

export default RecentPosts