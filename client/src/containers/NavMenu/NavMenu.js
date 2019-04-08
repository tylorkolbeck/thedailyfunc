import React, { Component } from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import Hamburger from '../../components/Hamburger/Hamburger'
import SearchIcon from '../../components/SearchIcon/SearchIcon'
import SearchBar from '../../components/SearchBar/SearchBar'
import BackDrop from '../../components/BackDrop/BackDrop'
import SideBar from '../../components/SideBar/SideBar'

class NavBar extends Component {
    state = {
        scrollPosition: window.pageYOffset,
        theposition: 0
    }
    // let searchInput = React.createRef()
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        // const height =
        //   document.documentElement.scrollHeight -
        //   document.documentElement.clientHeight
      
        const scrolled = winScroll
      
        this.setState({
          theposition: scrolled,
        })
      }

    render() {
        let logoScrollClass = this.state.theposition > 20 ? ' scaleLogo' : ''
        console.log(this.state.theposition)

        return (
            <>
                <div className="NavMenu__top_bar" style={{height: '68px'}}></div>
                <div className="NavMenu__container">
                    <div style={{maxWidth: '1200px', width: '100%', display: 'flex',margin: 'auto', alignItems: 'center'}}>
                        <BackDrop backDropShown={this.props.backDropShown} backdropToggleHandler={this.props.backdropToggleHandler}/>

                        <SideBar backDropShown={this.props.backDropShown} backdropToggleHandler={this.props.backdropToggleHandler}/>
                        <Link to='/'>
                            <Logo scale={this.state.theposition}/>
                        </Link>
                

                        <div className="NavMenu__search_hamburger_container" style={{marginLeft: 'auto'}}>
                            <SearchIcon style={{height: "20px", width: "20px", fill: "white"}} clicked={() => console.log('Click')}/>

                            <SearchBar placeholder='Search...' />

                            <Hamburger backDropShown={this.props.backDropShown} backdropToggleHandler={this.props.backdropToggleHandler}/>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default NavBar