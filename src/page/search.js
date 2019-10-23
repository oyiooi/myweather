import React ,{ Component } from 'react'
import Map from '../map'
import SearchHeader from '../component/searchHeader'
import AddBar from '../component/addBar'
import './searchPage.css'

class Search extends Component {
    
    constructor(){
        super()
        this.state={
            searchTerm:'',
            show:false
        }
        this.show=this.show.bind(this)
        this.hide=this.hide.bind(this)
        this.updateSearchTerm=this.updateSearchTerm.bind(this)
    }

    updateSearchTerm(event){
        this.setState({searchTerm:event.target.value})
    }

    show(){
        this.setState({show:true})
    }

    hide(){
        this.setState({show:false})
    }

    render(){
        const { addLocation , addWeather }=this.props
        const {searchTerm,show} =this.state

        return <div className='search-page'>
                    <SearchHeader searchTerm={searchTerm} onShow={this.show} updateSearchTerm={this.updateSearchTerm}></SearchHeader>
                   <div id='map'>
                       <Map></Map>
                       <AddBar searchTerm={searchTerm} show={show} addLocation={addLocation}></AddBar>
                   </div>
               </div>
    }
}

export default Search