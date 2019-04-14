import React from 'react'
import './Work.css'

import WorkPreview from '../../components/WorkCards/WorkPreview/WorkPreview'

const Work = props => {
    return (
        <div className="Work__container">
            {/* <h2 className="headerTxt-h2 ">Coming Soon!</h2> */}
            <WorkPreview text="Work" showButton='hide'/>
        </div>
    )
}

export default Work