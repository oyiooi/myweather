import React from 'react'
import './locationList.css'

function LocationList (props) {
    const {locations,shanChu} = props

    return <ol>
               {locations.map((item)=><li key={item.city}><div key={item.city+'div'}>{item.city}</div><div className='delete' key={item.city+'D'} onClick={()=>{console.log('delete');shanChu(item.city)}}>Delete</div></li>)}
           </ol>
}

export default LocationList