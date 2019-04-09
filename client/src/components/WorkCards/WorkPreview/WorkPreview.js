import React, {useEffect, useState} from 'react'
import './WorkPreview.css'
import ScrollAnimation from 'react-animate-on-scroll'

import { axiosInstance as axios } from '../../../axios-config'

import WorkCard from '../WorkCard/WorkCard'
import Button from '../../UI/Button/Button'

const WorkPreview = props => {
    const [workDocs, setDocs] = useState(false)

    useEffect(() => {
        axios.get('/work')
            .then((docs) => {
                if (!workDocs && workDocs !== docs.data.docs) {
                    setDocs(docs.data.docs)
                }
            })
            
            .catch(err => console.log(err))
    })

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
                />
            )
        })
    }

    return (
        <>
            <ScrollAnimation animateIn="fadeIn">
                <h2 className="headerTxt-h2 center" style={{marginTop: '100px'}}>Recent Work</h2>
                <div className="WorkPreview__container">
                    {docs}
                </div>
                <Button route="/work" text="All Work" style={{marginTop: '50px'}}/>
            </ScrollAnimation>
        </>
    )
}

export default WorkPreview