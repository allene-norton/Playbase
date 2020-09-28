import React, { Component } from 'react'
import Result from '../Components/Result'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
//import SearchBar from '../Components/SearchBar'

class ResultsContainer extends Component {
  render() {
    return(
      <div className="album-finder">
       <h3>Search Results</h3>
       {this.props.albumSearchResult.map(result => <Result key={result.id} result={result} postAlbum = {this.props.postAlbum} />)}
      </div>
    )
  }
}

export default ResultsContainer