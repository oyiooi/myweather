import React from 'react'
import './locationHeader.css'
import { Link } from 'react-router-dom'

function LocationHeader () {

    return <div className='bar'>
               <Link to='/'>返回</Link>
               <span>地点</span>
               <Link to='/search'>添加</Link>
           </div>
}

export default LocationHeader