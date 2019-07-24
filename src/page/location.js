import React , { Component } from 'react'
import LocationHeader from '../component/locationHeader'
import './locationPage.css'
import LocationList from '../component/locationList'

class Location extends Component {
    render(){
        const {locations,shanChu}=this.props

        return <div className='location-page'>
                    <LocationHeader></LocationHeader>
                    <LocationList locations={locations} shanChu={shanChu}></LocationList>
               </div>
    }
}

export default Location