import React, { Component } from 'react'
import Result from '../Components/Result'
import { Item, Grid } from 'semantic-ui-react'

//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
//import SearchBar from '../Components/SearchBar'

class ResultsContainer extends Component {
  render() {
    return (
      <div className="search-results">

          <Grid container stackable relaxed='very' columns={4} >
          {this.props.albumSearchResult.map(result => 

          <Grid.Column> 
            <Result key={result.id} result={result} postAlbum={this.props.postAlbum} />
          </Grid.Column>)}
        </Grid>


      </div>
    )
  }
}

export default ResultsContainer