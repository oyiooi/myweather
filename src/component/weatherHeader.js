import React from 'react'
import { Link } from 'react-router-dom'
import './weatherHeader.css'

function WeatherHeader () {
    return <div className='button'>
    <Link className='search' to='/search'>search</Link>
    <Link className='location' to='/location'>地点</Link>
</div>
}

export default WeatherHeader