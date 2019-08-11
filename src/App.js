import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import Weather from './page/weather'
import Search from './page/search'
import Location from './page/location'
import { tsConstructorType } from '@babel/types'
import { getData , updateData , deleteData } from './config'

class App extends Component {
  
  constructor(){
    super()
    this.state={
      locations:[],
      weather:[]
    }
    this.addLocation=this.addLocation.bind(this)
    this.addWeather=this.addWeather.bind(this)
    this.toLeft=this.toLeft.bind(this)
    this.toRight=this.toRight.bind(this)
    this.shanChu=this.shanChu.bind(this)
  }

  shanChu(city){
    deleteData(city)
    this.setState((prevState)=>{
      console.log(city,prevState)
      let locations=prevState.locations.filter((item)=>item.city!==city)
      let weather=prevState.weather.filter((item)=>item.city!==city)
      return{locations,weather}
    })
  }

  toLeft(){
    this.setState((prevState)=>{
      let mid = prevState.weather.shift()
      prevState.weather.push(mid)
    })
    this.forceUpdate()
  }

  toRight(){
    this.setState((prevState)=>{
      let mid = prevState.weather.pop()
      prevState.weather.unshift(mid)
    })
    this.forceUpdate()
  }

  addWeather(lnglat){
    console.log(lnglat)
      fetch(`https://www.tianqiapi.com/api/?version=v6&city=${lnglat}`)
           .then((response)=>{return response.json()})
           .then(data=>{this.setState((preState)=>{preState.weather.push(data)})})
           .catch(error=>console.log(error))
  }

  addLocation(city){
      let loca={city:city}
      console.log(loca)
      updateData(city)
      this.setState((preState)=>preState.locations.push(loca))
  }

  componentDidMount(){
    console.log('o')
    let weather;
    let positionss = getData();
    if(positionss){
      for(let i=0;i<positionss.length;i++){
        console.log(positionss[i],this.state.locations)
        fetch(`https://www.tianqiapi.com/api/?version=v6&city=${positionss[i]}`)
            .then(response=>response.json())
            .then(data=>{this.setState((preState)=>{preState.weather.push(data);preState.locations.push({city:positionss[i]});this.forceUpdate()})
      })}
    }else{
      let position = '北京';
      updateData(position);
      this.setState({locations:[{city:position}]})
      fetch(`https://www.tianqiapi.com/api/?version=v6&city=${position}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        weather=data
        console.log(weather)
        this.setState({weather:[weather]})
    })
    .catch(error=>console.log(error))
    }
  }

  render(){
    let {locations , weather }=this.state
    console.log(locations,weather.length>0)
      if(weather.length>0){
        return <div className="App">
        <Route exact path='/' render={()=><Weather weather={weather} toLeft={this.toLeft} toRight={this.toRight}></Weather>}></Route>
        <Route exact path='/search' render={()=><Search addLocation={this.addLocation} addWeather={this.addWeather}></Search>}></Route>
        <Route exact path='/location' render={()=><Location locations={locations} shanChu={this.shanChu}></Location>}></Route>
   </div>
      }else{
        return <div></div>
      }
  }
  
}

export default App;
