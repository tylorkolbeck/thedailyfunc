import React from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import Hamburger from '../../components/Hamburger/Hamburger'
import SearchIcon from '../../components/SearchIcon/SearchIcon'
import SearchBar from '../../components/SearchBar/SearchBar'
import BackDrop from '../../components/BackDrop/BackDrop'
import SideBar from '../../components/SideBar/SideBar'

const NavBar = (props) => {
    // let searchInput = React.createRef()

    return (
        <>
            <div className="NavMenu__top_bar" style={{height: '68px'}}></div>
            <div className="NavMenu__container">
                <div style={{maxWidth: '1200px', width: '100%', display: 'flex',margin: 'auto', alignItems: 'center'}}>
                    <BackDrop backDropShown={props.backDropShown} backdropToggleHandler={props.backdropToggleHandler}/>

                    <SideBar backDropShown={props.backDropShown} backdropToggleHandler={props.backdropToggleHandler}/>
                    <Link to='/'>
                        <Logo />
                    </Link>
            

                    <div className="NavMenu__search_hamburger_container" style={{marginLeft: 'auto'}}>
                        <SearchIcon style={{height: "20px", width: "20px", fill: "white"}} clicked={() => console.log('Click')}/>

                        <SearchBar placeholder='Search...' />

                        <Hamburger backDropShown={props.backDropShown} backdropToggleHandler={props.backdropToggleHandler}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar