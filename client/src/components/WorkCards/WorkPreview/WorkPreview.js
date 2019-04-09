import React, {useEffect, useState} from 'react'
import './WorkPreview.css'
import ScrollAnimation from 'react-animate-on-scroll'

import { axiosInstance as axios } from '../../../axios-config'

import WorkCard from '../WorkCard/WorkCard'
import Button from '../../UI/Button/Button'

import BackDrop from '../../BackDrop/BackDrop'
import WorkModal from '../WorkModal/WorkModal'
import {Animated} from 'react-animated-css'

let fakeData = {
    title: 'Jennifer Ingle Pet Care',
    img: 'https://images.unsplash.com/photo-1544626053-8985dc34ae63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    tech: ['Node', 'React', 'MongoDB'],
    description: 'Website created using React on the front end with a Node backend running with express.',
    url: 'http://jenniferinglepetcare.com',
    about: 'A Pet Sitting Startup'
}

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
        docs = workDocs.map((doc) => {
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
            <ScrollAnimation animateIn="fadeIn">
                <h2 className="headerTxt-h2 center" style={{marginTop: '100px'}}>Recent Work</h2>
                <div className="WorkPreview__container">
                    {docs}
                </div>
                <Button route="/work" text="All Work" style={{marginTop: '50px'}}/>
            </ScrollAnimation>
                    {workModal}
            <BackDrop backDropShown={backDrop} style={{zIndex: 100}}backdropToggleHandler={toggleBackDropHandler}/>
        </div>
       
    )
}

export default WorkPreview