import React from 'react'
import './HomeTopBox.css'

import QuoteIcon from '../../components/QuoteIcon/QuoteIcon'

const HomeTopBox = (props) => {
    return (
        <div className="HomeTopBox__container">
            <div className="HomeTopBox-inner">
                <p className="HomeTopBox__quote">
                    <QuoteIcon  
                        style={{
                            height:"100px",
                            marginTop:"50px",
                            fill:"#fec303"
                        }}
                    />
                </p>
                <h1 className="HomeTopBox__quote_text">
                    Great things are not done by impulse, but a series of small things brought together. 
                </h1>
                <p className="HomeTopBox__cite"> - Vincent Van Gogh</p>
            </div>
        </div>
    )
}

export default HomeTopBox