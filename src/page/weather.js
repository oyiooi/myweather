import React,{ Component } from 'react'
import './weather.css'
import RotateBox from '../component/Rotate-box'
import GasIndex from '../component/Gas-index'
import HumiBisb from '../component/Humi-Visb'
import MainWeather from '../component/mainWeather'
import WeatherHeader from '../component/weatherHeader'

class Weather extends Component {

    render(){
        const {toLeft,toRight} =this.props
        let wea_Date=this.props.weather[0] ;console.log(wea_Date)

        return <div className='container'>
        <WeatherHeader></WeatherHeader>
        <MainWeather wea_Date={wea_Date} toLeft={toLeft} toRight={toRight}></MainWeather>
        <div className='message'>
            <GasIndex wea_Date={wea_Date}></GasIndex>
            <HumiBisb wea_Date={wea_Date}></HumiBisb>
            <RotateBox></RotateBox>
        </div>
    </div>
    }
}

export default Weather