import React, { Component } from 'react'
import axios from 'axios'
import './FullPost.css'
import ReactHtmlParser from 'react-html-parser'
import snarkdown from 'snarkdown'
import {Animated} from "react-animated-css";
import BackArrow from '../BackArrow/BackArrow'
import CategoryTag from '../CategoryTag/CategoryTag'

class FullPost extends Component {
    state = {
        loading: false,
        post: false,
        parsedBody: false,
        scrollPostion: window.pageYOffset
    }

    componentDidMount() {
        // window.addEventListener('scroll', this.listenToScroll)

        if (!this.state.post) {
            axios.get('http://localhost:9292/posts/' + this.props.match.params.postId)
                .then((response) =>{
                    this.setState({post: response.data.doc},() => {
                        let result = snarkdown(this.state.post.body)
                        this.setState({parsedBody: result})
                    })
                })
                .catch((err) => console.log('CANT ACCESS BEACUSE OF ' + err))
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        this.setState({
          scrollPostion: window.pageYOffset,
        }, () => console.log(this.state.scrollPostion))
      }


    render() {

        if (this.state.post) {
            console.log('[<>]',this.state.post.tags)
        }

        return (
            <Animated animationIn="slideInLeft" isVisible={true}>
                <div className="FullPost_header_container" style={{backgroundImage: `url(${this.state.post.postCardImg})`}}>
                    <div className="FullPost_header_inner_container">
                        <Animated animationIn="slideInDown" isVisible={true} >
                            <h1>{this.state.post.title}</h1>
                        </Animated>
                        <h3>{this.state.post.author}</h3>
                    </div>
                </div>
                

                <div className="FullPost__container">

                <div className="FullPost__top_back_button_tags_container" >
                    <button onClick={this.props.history.goBack} className="FullPost__back_button"> <BackArrow /></button>

                    <div style={{marginLeft: 'auto'}}>
                        {this.state.post.tags ? this.state.post.tags.map((tag) => <CategoryTag tagName={tag} key={tag}/>) : null}    
                    </div>

                </div>

                    
                    {this.state.parsedBody ? ReactHtmlParser(this.state.parsedBody) : ''}
                    <button onClick={this.props.history.goBack} className="FullPost__back_button"> <BackArrow /></button>

                </div>
        </Animated>
        )
    }


}

export default FullPost