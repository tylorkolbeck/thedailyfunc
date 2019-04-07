import React, { Component }from 'react'
import './AllPosts.css'
import PostCard from '../../components/PostCard/PostCard'
import CatBubble from '../../components/CatBubble/CatBubble'
// import history from '../../history'
import { withRouter } from 'react-router-dom'
import { axiosInstance as axios } from '../../axios-config'
import { Animated } from "react-animated-css";
import BackArrow from '../../components/BackArrow/BackArrow'


class AllPosts extends Component {
    state = {
        // mainCat: ['JS', 'XS', 'PP'],
        posts: false,
        filter: false,
        changeVis: true,
        visible: {
            mainPage: true,
            catBubbles: true
        }
    }

    componentDidMount() { 
        if (!this.state.posts) {
            axios.get('/posts')
                .then((response)=> {
                    this.setState({posts: response.data.docs})
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
        if (this.state.posts && !this.state.filter)  {
            cards = this.state.posts.map((data) => {
                return (
                    <PostCard key={data._id} data={data} clicked={()=> this.postSelectedHandler(data._id)}/>
                )
            })
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
        return (
            <div style={{minHeight: '100%'}}>
                <button onClick={this.props.history.goBack} className="FullPost__back_button" style={{marginTop: '20px'}}> 
                    <BackArrow className="desktop" style={{marginLeft: '18px'}}/>
                </button>

                <Animated animationIn="slideInRight" animationOut="slideOutLeft" isVisible={this.state.visible.mainPage} style={{display: 'flex', width: '100%'}}>
                    
                    <div style={{maxWidth: '1200px', margin: 'auto', width: '100%'}}>

                        {/* <div style={{textAlign: 'center', marginTop: '20px', fontFamily: "'Fredoka One', cursive"}}>
                            Filter
                        </div> */}

                        <div className="AllPosts__cat_bubble_container">
                            <h2 className="CatBubble" data-tooltip="All Posts"style={{border: '2px solid #fec303'}}onClick={() => this.cssTransitionDelay(this.removeFiltersHandler, 'mainPage')}>A<span style={{fontSize: '12px'}}>ll</span></h2>
                            {this.createCategoryBubbles()}
                        </div>

                        {this.checkWhatToShow()}
                        
                    </div>

                </Animated>
            </div>

        )
    }
}

export default withRouter(AllPosts)


