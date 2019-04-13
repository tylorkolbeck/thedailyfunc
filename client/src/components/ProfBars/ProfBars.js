import React from 'react'
import './ProfBars.css'
import CatBubble from '../CatBubble/CatBubble'
import headerTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2'
import HeaderTxtH2 from '../UI/headers/HeaderH2/HeaderTxtH2';

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

    let profTable = profData.map(cat => {
        return (
            <div className="ProfBars-bar" style={{ width: `${cat.prof}%` }} key={cat.prof}>
                <p >{cat.name}</p>
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
