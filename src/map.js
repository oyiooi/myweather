import { Component } from 'react'
import AMap from './config'

var map,marker;

export default class Map extends Component {
    componentDidMount(){

        map= new AMap.Map('map',{
            center:[111.38059, 35.625949],
            zoom:5
        })

        marker= new AMap.Marker({
            position:[116.407526, 39.90403],
            title:'北京'
        })

        map.add(marker)
    }



    render(){
        return null
    }
}

export { map,marker }