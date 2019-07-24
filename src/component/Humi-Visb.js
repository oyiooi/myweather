import React from 'react'
import './Humi-Visb.css'

function HumiVisb (props) {

    const wea_Date=props.wea_Date

    return <div className='mes2'>
               <div className='humidity'><div className='back-pic'></div><pre>湿度                                                     {wea_Date.humidity}</pre></div>
               <div className='uv'><div className='uv-pic'></div><pre>能见度                                                  {wea_Date.visibility}</pre></div>    
           </div>
}

export default HumiVisb