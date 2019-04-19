import React from 'react'
import './ProfBars.css'
import HeaderTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2';
import ScrollAnimation from 'react-animate-on-scroll'


export default function ProfBars() {

    const profData = [
        {
            abbr: 'N',
            name: 'Node',
            prof: 60
        },
        {
            abbr: 'JS',
            name: 'JavaScript',
            prof: 80
        },
        {
            abbr: 'R',
            name: 'React',
            prof: 70
        },
        {
            abbr: 'E',
            name: 'Express',
            prof: 60
        },
        {
            abbr: 'M',
            name: 'MongoDB',
            prof: 50
        }
    ]

    let inc = 50

    let profTable = profData.map(cat => {
        inc += 50
        return (
            // <ScrollAnimation animateIn="slideInLeft" delay={inc} animateOnce={true} key={cat.name}>
            <div className="ProfBars-bar" style={{ width: `${cat.prof}%` }} >
                <p >{cat.name}</p>
            </div>
            // </ScrollAnimation>
        )
    })

    return (
        <div className="ProfBars__wrapper">
            <HeaderTxtH2 text="Tech Specialty" />
            {profTable}
        </div>
    )
}
