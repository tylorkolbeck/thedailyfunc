import React, { Component } from 'react'
import './RecentPosts.css'
import {axiosInstance as axios } from '../../axios-config'
import PostCard from '../../components/PostCard/PostCard'
import ScrollAnimation from 'react-animate-on-scroll'
import Spinner from '../../components/UI/Spinner/Spinner'
import Button from '../../components/UI/Button/Button'

import HeaderTxtH2 from '../../components/UI/headers/HeaderH2/HeaderTxtH2'


class RecentPosts extends Component {
    state = {
        recents: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        if (!this.state.recents) {
            this.setState({loading: true})
            axios.get('/posts/recent')
                .then((response) => {
                    this.setState({recents: response.data.docs, loading: false})
                })
                .catch(err => {  
                   this.setState({error: err, loading: false}) 
                })
        }
    }

    postSelectedHandler(id) {
        this.props.history.push('post/' + id)
    }

    render() {
        let recentPosts = null

        if (this.state.recents && this.state.recents.length > 0) {
            recentPosts = this.state.recents.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
        } else {
            return null
        }

    let loadingSpinner = this.state.loading ? <Spinner /> : null
        

        return (
            <div>
                {loadingSpinner}
                <div className="RecentPosts__container">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <HeaderTxtH2 text="Recent Posts" />

                        <div className="RecentPosts__wrapper">
                            {recentPosts}
                        </div>
                        
                        <Button route="/posts" text="All Posts" style={{marginTop: '50px'}}/>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default RecentPosts