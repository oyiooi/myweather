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
    this.toLeft=this.toLeft.bind(this)
    this.toRight=this.toRight.bind(this)
    this.shanChu=this.shanChu.bind(this)
  }

  shanChu(city){
    if(this.state.locations.length === 1) { alert('no'); return}
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
      let data = [].concat(prevState.weather)
      let mid = data.shift()
      data.push(mid)
      return {
        weather: data
      }
    },console.log(this.state))
  }

  toRight(){
    this.setState((prevState)=>{
      let mid = prevState.weather.pop()
      prevState.weather.unshift(mid);
      return {weather: prevState.weather}
    })
  }

  addLocation(city){
    function test(city,arr){
      console.log(this)
      for ( let item of arr){
        if(item.city===city) return true
      }
    }
    if(test(city,this.state.locations)){ return }

      let loca={city:city}
      console.log(loca)
      updateData(city)
      fetch(`https://www.tianqiapi.com/api/?appid=54889295&appsecret=cFve456Z&version=v6&city=${city}`)
           .then((response)=>{return response.json()})
           .then(data=>{this.setState((preState)=>{let loc= preState.locations.concat([loca]), wea= preState.weather.concat([data]);return {weather: wea, locations: loc}})})
           .catch(error=>console.log(error))
  }

  componentWillMount(){
    console.log('o')
    let weather;
    let positionss = getData();
    if(positionss&&positionss.length>0){
      console.log(positionss)
      for(let i=0;i<positionss.length;i++){
        console.log(positionss[i],this.state.locations)
        fetch(`https://www.tianqiapi.com/api/?appid=54889295&appsecret=cFve456Z&version=v6&city=${positionss[i]}`)
            .then(response=>response.json())
            .then(data=>{this.setState((preState)=>{preState.weather.push(data);preState.locations.push({city:positionss[i]});return {locations:preState.locations,weather: preState.weather}})
      })}
    }else{
      let position = '北京';
      updateData(position);
      fetch(`https://www.tianqiapi.com/api/?appid=54889295&appsecret=cFve456Z&version=v6&city=${position}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        weather=data
        console.log(weather)
        this.setState({weather:[weather],locations:[{city:position}]})
    })
    .catch(error=>console.log(error))
    }
  }

  render(){
    let {locations , weather }=this.state;
    console.log(this.state)
    if(weather.length>0){ return <div className="App">
        <Route exact path='/' render={()=><Weather weather={weather} toLeft={this.toLeft} toRight={this.toRight}></Weather>}></Route>
        <Route exact path='/search' render={()=><Search addLocation={this.addLocation}></Search>}></Route>
        <Route exact path='/location' render={()=><Location locations={locations} shanChu={this.shanChu}></Location>}></Route>
  </div>}else{
    return <div></div>
  } 
 }
}

export default App;
