import React, { Component } from 'react'
// import throttle from 'lodash.throttle'
import './PostCard.css'
import { dateConversion } from '../../helpers/date_module'


// let isMobile = window.innerWidth < 601

class PostCard extends Component {

    state = {
        mouseInContainer: false,
        isMobile: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.throttledHandleWindowResize)
        this.setState({isMobile: window.innerWidth})
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledHandleWindowResize)
    }

    throttledHandleWindowResize = () => {
        this.setState({ isMobile: window.innerWidth })
    }

    mouseEnterHandler() {
        setTimeout(
            () => {
                this.setState({
                    mouseInContainer: true
                })
            }, 2
        )
    }

    mouseLeaveHandler() {
        this.setState({
            mouseInContainer: false
        })
    }

    render() {
        // this.state.isMobile ? console.log('Is Mobile') : console.log('Not Mobile')
        let posts = <p>Loading...</p>
        posts = 
        
        <div 
            className="PostCard__container" 
            key={this.props.data._id} 
            onMouseEnter={this.state.isMobile >= 651 ? this.mouseEnterHandler.bind(this) : null}
            onMouseLeave={this.state.isMobile >= 651 ? this.mouseLeaveHandler.bind(this) : null}
            onClick={this.props.clicked}
            >

            <div className="PostCard__image_container" style={{backgroundImage: `url(${this.props.data.imgThumb})`}}></div>

            <div className="PostCard__color_circle">
                <span>{this.props.data.mainCat}</span>
            </div>

            <div className="PostCard__info">
                <p className="PostCard__date">{dateConversion(this.props.data.date, 'd,m,y')}</p>
                <p className="PostCard__title">{this.props.data.title}</p>
                <p className="PostCard__description">{this.props.data.description ? this.props.data.description.slice(0, this.state.mouseInContainer ? 300 : 150) : null}</p>
            </div>

            <div className="PostCard__footer"></div>
        </div>



        return (
            <div>
                {posts}
            </div>
        )
    }
    
}

export default PostCard

