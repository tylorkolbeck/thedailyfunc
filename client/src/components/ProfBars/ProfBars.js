import React from 'react'
import './ProfBars.css'
import HeaderTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2';

export default function ProfBars() {

    const profData = [
        {
            abbr: 'N',
            name: 'Node',
            prof: 70
        },
        {
            abbr: 'JS',
            name: 'JavaScript',
            prof: 80
        },
        {
            abbr: 'R',
            name: 'React',
            prof: 80
        },
        {
            abbr: 'E',
            name: 'Express',
            prof: 70
        },
        {
            abbr: 'M',
            name: 'MongoDB',
            prof: 60
        },
        {
            abbr: 'AWS',
            name: 'AWS',
            prof: 50
        },
        {
            abbr: 'G',
            name: 'Git',
            prof: 60
        },
        {
            abbr: 'CSS',
            name: 'CSS',
            prof: 80
        }
    ]

    let profTable = profData.map(cat => {
        return (
            <div className="ProfBars-bar" key={cat.name}>
                <p style={{width: `${cat.prof}%`}}>{cat.name}</p>
            </div>
        )
    })

    return ( 
        <div className="ProfBars__wrapper">
            <HeaderTxtH2 text="Tech Specialty" />
            {profTable}
        </div>
    )
}
