import React from 'react'
import './HomeTopBox.css'
import ScrollDownArrow from '../ScrollDownArrow/ScrollDownArrow'

import QuoteIcon from '../../components/QuoteIcon/QuoteIcon'

const HomeTopBox = (props) => {
    return (
        <div className="HomeTopBox__container">
            <p className="HomeTopBox__quote">
                <QuoteIcon  
                    style={{
                        height:"100px",
                        marginTop:"50px",
                        fill:"#fec303"
                    }}
                />
            </p>
            <p className="HomeTopBox__quote_text">
                Great things are not done by impulse, but a series of small things brought together. 
            </p>
            <p className="HomeTopBox__cite"> - Vincent Van Gogh</p>
            {/* <ScrollDownArrow /> */}
        </div>
    )
}

export default HomeTopBox