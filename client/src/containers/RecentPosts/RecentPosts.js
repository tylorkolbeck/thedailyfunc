import React, { Component } from 'react'
import './RecentPosts.css'
import {axiosInstance as axios } from '../../axios-config'
import PostCard from '../../components/PostCard/PostCard'
import ScrollAnimation from 'react-animate-on-scroll'
import Spinner from '../../components/UI/Spinner/Spinner'



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
                    console.log('------', err)
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
                    <ScrollAnimation animateIn="fadeIn">
                            <div className="flex-center">
                                <h2 className="headerTxt-h2 center-txt" style={{marginBottom: '50px'}}>Recent Posts</h2>
                            </div>
                                <div className="RecentPosts__wrapper">
                                    {recentPosts}
                                </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default RecentPosts