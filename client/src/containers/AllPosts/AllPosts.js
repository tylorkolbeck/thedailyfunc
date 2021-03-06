// This is the all posts page.  When page loads it fetches all posts
// from the database and create a post card for each post.  
// Posts can also be filtered based on the main topic by clicking
// on post bubbles.

// TODO: Add pagnation in the future when there starts to become a lot of posts. 

import React, { Component }from 'react'
import './AllPosts.css'
import PostCard from '../../components/PostCard/PostCard'
import CatBubble from '../../components/CatBubble/CatBubble'
import { Animated } from "react-animated-css";
import BackArrow from '../../components/BackArrow/BackArrow'
import Spinner from '../../components/UI/Spinner/Spinner'
import {axiosInstance as axios} from '../../axios-config'



class AllPosts extends Component {
    state = {
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
        // removed from redux store. Data now stored in component state
        // if (!this.props.allPosts) {
        //     this.props.fetchAllPosts()
        // }

        this.fetchAllPosts()
    }

    // Fetch all posts
    fetchAllPosts = () => {    
        axios.get('/posts')
            .then((response) => {
                this.setState({posts: response.data.docs, error: false}, () => console.log(this.state))
            })
            .catch(err => {  
                this.setState({error: err})
                // console.log('[fetchAllPosts]', err)
            })
        
    }

    postSelectedHandler(id) {
        this.props.history.push('post/' + id)
    }

    filterPostsHandler = (cat) => {
        this.setState({filter: cat[0]})
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
                    if (!mainArray.includes(post.mainCat) && post.public) {
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

    // Maps all the posts into a postCard
    makePostCards = () => {
        let postCards = <Spinner />
        let filteredPosts = false

        // If no filter show every post that is public
        if (this.state.posts && !this.state.filter)  {
            postCards = this.state.posts.map((data) => {
                    return data.public ? <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/> : false
            })
        } 
        
        // If a filter is selected then filter the posts to show for that filter
        else if (this.state.posts && this.state.filter) {
            // filter out unwanted posts from filter
            filteredPosts = this.state.posts.filter(post => post.mainCat === this.state.filter)

            postCards = filteredPosts.map((data) => {
                return <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
            })
        }

        else if (this.state.error !== false) {
            postCards = null
        }
        
        return postCards
    }


    // Sets a delay before running a state change handler to allow css transition to finish. 
    // make sure the delay matches the css transition time.
    // This is a delay for when the user selects a filter and the posts are transitioning on 
    // the screen for the selected filter
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
        let hideOnError = this.state.error ? 'hide' : ''

        return (

            <div style={{minHeight: '100%'}}>
                <button onClick={this.props.history.goBack} className="FullPost__back_button" style={{marginTop: '20px'}}> 
                    <BackArrow className="desktop" style={{marginLeft: '18px'}}/>
                </button>

                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.visible.mainPage} style={{display: 'flex', width: '100%'}}>
                    <div style={{maxWidth: '1200px', margin: 'auto', width: '100%'}}>

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

                        <div className="AllPosts__container">
                            {/* Create and display the posts from the post data */}
                            {this.makePostCards()} 
                        </div>
                        
                    </div>

                </Animated>
            </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         allPosts: state.allPosts
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchAllPosts: () => dispatch(actionCreators.fetchAllPosts()), // when called execute the action creator function
//     }
// }

export default AllPosts
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllPosts))


