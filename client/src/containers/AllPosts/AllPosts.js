import React, { Component }from 'react'
import './AllPosts.css'
import PostCard from '../../components/PostCard/PostCard'
import CatBubble from '../../components/CatBubble/CatBubble'
import { withRouter } from 'react-router-dom'
import { axiosInstance as axios } from '../../axios-config'
import { Animated } from "react-animated-css";
import BackArrow from '../../components/BackArrow/BackArrow'

import Spinner from '../../components/UI/Spinner/Spinner'


class AllPosts extends Component {
    state = {
        // mainCat: ['JS', 'XS', 'PP'],
        posts: false,
        filter: false,
        changeVis: true,
        visible: {
            mainPage: true,
            catBubbles: true
        },
        loading: false,
        error: false
    }

    componentDidMount() { 
        if (!this.state.posts) {
            this.setState({loading: true, error: false})
            axios.get('/posts')
                .then((response)=> {
                    this.setState({posts: response.data.docs, loading:false})
                })
                .catch((err) => {
                    this.setState({error: true, loading: false})
                })
        }
    }

    postSelectedHandler(id) {
        this.props.history.push('post/' + id)
    }

    filterPostsHandler = (cat) => {
        console.log(cat)
        this.setState({filter: cat[0]})
    }

    filterPostsByTagsHandler(text) {
        console.log(text)
    }

    removeFiltersHandler = () => {
        this.setState({filter: false})
    }

    createCategoryBubbles = () => {
        let catBubbles = null
        let mainArray = []
        let catData = []
        if (this.state.posts) {
            this.state.posts.forEach((post) => {
                if (!mainArray.includes(post.mainCat)) {
                    mainArray.push(post.mainCat)
                    catData.push({[post.mainCat]: post.category})
                }
            })

            catBubbles = catData.map(cat => {
                let catAbbr = Object.keys(cat)
                let catTooltip = cat[Object.keys(cat)]
                return (
                    <CatBubble key={catAbbr} category={catTooltip} cat={catAbbr} active={this.state.filter === catAbbr} clicked={() => this.cssTransitionDelay(() => this.filterPostsHandler(catAbbr), 'mainPage')} />
                )
            })
        }
        return catBubbles
    }

    checkWhatToShow = () => {
        let cards = null
        let postsToShow = null

        // If no filter show all posts
        if (this.state.posts && !this.state.filter && this.state.posts.length > 0)  {
            cards = this.state.posts.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
        } else if (this.state.posts.length < 0) {
            cards = <h1>There are no posts yet. Please check back.</h1>
        }

        // If filter only show filtered posts
        if (this.state.posts && this.state.filter) {
            postsToShow = this.state.posts.filter(post => post.mainCat === this.state.filter)

            cards = postsToShow.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
        }
        
        postsToShow = (
                 <div className="AllPosts__container">
                    {cards}
                </div>
        )
        
        return postsToShow
    }


    // Sets a delay before running a state change handler to allow css transition to finish. 
    // make sure the delay matches the css transition time.
    cssTransitionDelay(changeState, element) {
        // @param function - changeState to perform after the delay
        // @param string - what element to show and hide
        let newVisible = {
            ...this.state.visible,
            [element]: false
        }

        this.setState({visible: {...newVisible}})

        if (typeof changeState === 'function') {
            setTimeout(() => {
                changeState()
                newVisible[element] = true
                this.setState({visible: {...newVisible}})

            }, 500);
        }

        else {
            setTimeout(() => {
                this.setState({
                    ...changeState,
                    changeVis: true
                })
            }, 500);
        }
    }

    render() {
        let spinner

        spinner = this.state.loading ? <Spinner /> : null

        let hideOnError = this.state.error ? 'hide' : ''

        return (

            <div style={{minHeight: '100%'}}>

                
                <button onClick={this.props.history.goBack} className="FullPost__back_button" style={{marginTop: '20px'}}> 
                    <BackArrow className="desktop" style={{marginLeft: '18px'}}/>
                </button>

                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.visible.mainPage} style={{display: 'flex', width: '100%'}}>
                    <div style={{maxWidth: '1200px', margin: 'auto', width: '100%'}}>

                        {/* <div style={{textAlign: 'center', marginTop: '20px', fontFamily: "'Fredoka One', cursive"}}>
                            Filter
                        </div> */}

                        <div className="AllPosts__cat_bubble_container">

                            {!this.state.loading ? 
                                <h2 className={`CatBubble ${hideOnError} AllPosts__CatBubble-all`}
                                data-tooltip="All"
                                style={{border: '2px solid #fec303'}}
                                onClick={() => this.cssTransitionDelay(this.removeFiltersHandler, 'mainPage')}>
                                    A
                                <span style={{fontSize: '12px'}}>
                                    ll
                                </span></h2> : null}
                            {this.createCategoryBubbles()}
                            {this.state.error ? <div><h1>There was an error fetching the posts.</h1></div> : null}

                        </div>

                        {this.checkWhatToShow()}
                        
                    </div>

                </Animated>
                {spinner}

            </div>

        )
    }
}

export default withRouter(AllPosts)


