import React from 'react'
import './addBar.css'
import { Link } from 'react-router-dom'

function AddBar (props) {
    const {searchTerm,addLocation,addWeather,show} = props

    return show?<div className='add-location'>
    <span className='city-name'>{searchTerm}</span>
    <span className='add-buttom' onClick={()=>{addLocation(searchTerm);addWeather(searchTerm)}} ><Link to='/location'>add</Link></span>
</div>:show===false
}

export default AddBar