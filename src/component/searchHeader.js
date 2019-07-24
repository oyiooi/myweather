import React from 'react'
import './searchHeader.css'
import {addMarker} from '../config'
import { Link } from 'react-router-dom'

function SearchHeader(props) {
      const {searchTerm,onShow,updateSearchTerm}=props

      return <div className='search-container'>
      <div className='combine'>
           <Link to='/'>返回</Link>
           <input type='text' 
                  value={searchTerm} 
                  onChange={updateSearchTerm}/> 
      </div>
      <div  className='locate' onClick={
           ()=>{addMarker(searchTerm).then((data)=>{console.log(data);onShow()}).catch((data)=>console.log(data))}
       }>dingwei</div>
  </div>
}

export default SearchHeader