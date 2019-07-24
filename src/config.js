import {map} from './map.js'

let { AMap }= window

function getLngLat(searchT){

    let geocoder = new AMap.Geocoder({
        city:'全国'
    })

    let pro = new Promise(function(resolve,reject){
        geocoder.getLocation(searchT,function(status,result){
            if(status==='complete' && result.info==='OK'){
                let {lng,lat} =result.geocodes[0].location;
                let lnglat=[lng,lat];console.log([lng,lat])
                resolve(lnglat)    
            }else{
                reject(status)
            }
        })   
    })

    return pro
}

export function addMarker(difang){

    let geocoder = new AMap.Geocoder({
        city:'全国'
    })

    let pro= new Promise(function(resolve,reject){
        
        geocoder.getLocation(difang,function(status,result){
            if(status==='complete'&& result.info==='OK'){
                let {lng,lat}= result.geocodes[0].location;
                let city= result.geocodes[0].formattedAddress;
                let marker= new AMap.Marker({
                    position:[lng,lat],
                    title:city 
                })
                map.add(marker)
                resolve([lng,lat])
            }else{
                reject(status)
            }
        })
    })
    
    return pro
}

export function getData(){
    let data=localStorage.getItem('data')
    return JSON.parse(data)
}

export function updateData(data) {
    let dataArray=getData()
    if(dataArray){
        dataArray.push(data)
    } else{
        dataArray=[]
    }
    let Data = JSON.stringify(dataArray)
    localStorage.setItem('data',Data)
}

export function deleteData(data) {
    let dataArray=getData()
    let index = dataArray.indexOf(data)
    dataArray.splice(index,1)
    let Data = JSON.stringify(dataArray)
    localStorage.setItem('data',Data)
}

export default AMap 