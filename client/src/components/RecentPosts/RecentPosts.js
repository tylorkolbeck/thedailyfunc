import React, { Component } from 'react'
import { connect } from 'react-redux'
import './RecentPosts.css'
import PostCard from '../PostCard/PostCard'
import ScrollAnimation from 'react-animate-on-scroll'
import Spinner from '../UI/Spinner/Spinner'
import Button from '../UI/Button/Button'
import * as actionCreators from '../../store/actions/actions'

import HeaderTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2'

class RecentPosts extends Component {
    state = {
        loading: this.props.recentPosts ? false : true,
        error: false
    }

    componentDidMount() {
        if (!this.props.recents) {
            this.props.fetchRecentPosts()
        }
    }

    postSelectedHandler(postId) {
        this.markPostAsRead(postId)
        this.props.history.push('post/' + postId)
    }

    markPostAsRead(postId) {
        this.props.markPostAsRead(postId)
    }

    render() {
        let { loading } = this.state
        let { recents } = this.props

        let recentPosts = loading ? <Spinner /> : null

        if (recents && recents.length > 0) {
            recentPosts = recents.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
        } 

        return (
            <div>
                <div className="RecentPosts__container">
                    <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
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


const mapStateToProps = (state) => {
    return {
        recents: state.recentPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecentPosts: () => dispatch(actionCreators.fetchRecentPosts()), // when called execute the action creator function
        markPostAsRead: (postId) => dispatch(actionCreators.markPostAsRead(postId))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RecentPosts)