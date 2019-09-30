import React, {useEffect, useState} from 'react'
import './WorkPreview.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { axiosInstance as axios } from '../../../axios-config'
import WorkCard from '../WorkCard/WorkCard'
import BackDrop from '../../BackDrop/BackDrop'
import WorkModal from '../WorkModal/WorkModal'

const WorkPreview = props => {
    const [workDocs, setDocs] = useState([])
    const [backDrop, setBackDrop] = useState(false)
    const [modalData, setModalData] = useState(false)

    
    // Run an asynchrounos call to back end to get data
    useEffect(() => {
        axios.get('/work')
            .then((docs) => {
                if (workDocs.length === 0 && workDocs.length !== docs.data.docs) {
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
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="WorkCard__wrapper">
                {docs}
                {workModal}
                <BackDrop backDropShown={backDrop} backdropToggleHandler={toggleBackDropHandler}/>
            </div>
        </ScrollAnimation>
    )
}

export default WorkPreview