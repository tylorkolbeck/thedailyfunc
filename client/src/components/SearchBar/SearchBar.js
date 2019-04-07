import React from 'react'
import './SearchBar.css'

const SearchBar = ({style, placeholder}) => {
    return (
        <input type="text" style={style} className="SearchBar_input" placeholder={placeholder}></input>
    )
}

export default SearchBar