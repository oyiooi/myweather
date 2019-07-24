import React from 'react'
import { Component } from 'react'
import './mainWeather.css'

class MainWeather extends Component {

    render(){
    const { wea_Date ,toLeft, toRight }= this.props

    return <ul className='weather-container'>
        <li className='detail'>
            <p className='located-city' style={{backgroundImage:`url(${require('../image/location-pin.svg')})`}}>{wea_Date.city}</p>
            <p>{wea_Date.date}，{wea_Date.week}</p>
            <p className='temp' style={{backgroundImage:`url(${require(`../image/${wea_Date.wea_img?wea_Date.wea_img:'yun'}.svg`)})`}}>{wea_Date.tem}℃</p>
            <p>{wea_Date.tem1}℃/{wea_Date.tem2}℃  {wea_Date.wea}</p>
            <div className='left' onClick={()=>{toLeft()}} ></div>
            <div className='right' onClick={()=>{toRight()}}></div>
        </li>
    </ul>

    }
}

export default MainWeather