import React, {useEffect, useState} from 'react'
import './WorkPreview.css'
// import ScrollAnimation from 'react-animate-on-scroll'

import { axiosInstance as axios } from '../../../axios-config'

import WorkCard from '../WorkCard/WorkCard'
import Button from '../../UI/Button/Button'

import BackDrop from '../../BackDrop/BackDrop'
import WorkModal from '../WorkModal/WorkModal'
import HeaderTxtH2 from '../../UI/headers/HeaderH2/HeaderTxtH2';

const WorkPreview = props => {
    const [workDocs, setDocs] = useState(false)
    const [backDrop, setBackDrop] = useState(false)
    const [modalData, setModalData] = useState(false)

    

    useEffect(() => {
        axios.get('/work')
            .then((docs) => {
                if (!workDocs && workDocs !== docs.data.docs) {
                    setDocs(docs.data.docs)
                }
            })
            
            .catch(err => console.log(err))
    })


    let toggleBackDropHandler = (data) => {
        setModalData(false)
        setBackDrop(!backDrop)
        
        if(!modalData && data !== modalData) {
            setModalData(data)
        }
    }

    let workModal = modalData ? <WorkModal shown={backDrop} data={modalData} click={toggleBackDropHandler} style={{zIndex:'105'}}/> : null

    let docs

    if (workDocs.length > 0) {
        docs = workDocs.slice(0, props.number).map((doc) => {
            return (
            <WorkCard 
                key={doc.title}
                title={doc.title} 
                about={doc.about}
                img={doc.img}
                imgThumb={doc.imgThumb}
                tech={doc.tech}
                description={doc.description}
                url={doc.url}
                toggleOpen={toggleBackDropHandler}
                />
            )
        })
    }

    return (
        <div style={{position: 'relative'}} >
            {/* <ScrollAnimation animateIn="fadeIn"> */}
                {workDocs ? <HeaderTxtH2 text={props.text} />: null}
                <div className="WorkPreview__container">
                    {docs}
                </div>

                {workDocs ? <Button route="/work" text="All Work" showButton={props.showButton}/> : null }

            {/* </ScrollAnimation> */}
                    {workModal}
            <BackDrop backDropShown={backDrop} backdropToggleHandler={toggleBackDropHandler}/>
        </div>
       
    )
}

export default WorkPreview