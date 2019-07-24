import React from 'react'
import './Gas-index.css'

function GasIndex (props) {

    const wea_Date=props.wea_Date

    return <div className='gas-index'>
    <div className='air'>
        <p>PM2.5</p>
        <p>{wea_Date.air_level}</p>
        <p>{wea_Date.air_pm25}</p>
    </div>
    <div className='wind'>
        <p>{wea_Date.win}</p>
        <p>{wea_Date.win_meter}</p>
        <p>{wea_Date.win_speed}</p>
    </div>
    <div className='tip'>
        <strong>Tip: </strong>{wea_Date.air_tips}  
    </div>
</div>
}

export default GasIndex