import React from 'react'
import './Work.css'

import WorkPreview from '../../components/WorkCards/WorkPreview/WorkPreview'
import HeaderTxtH2 from '../../components/UI/headers/HeaderH2/HeaderTxtH2'

const Work = props => {
    return (
        <>
        <HeaderTxtH2 text="Work" />
        <WorkPreview text="Work" showButton='hide'/>
        </>
    )
}

export default Work