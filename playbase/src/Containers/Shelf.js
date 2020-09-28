import React, { Component } from 'react'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import ShelfAlbums from "../Components/ShelfAlbums"


class Shelf extends Component {
  
  render() {
    return(
      <div className="shelf">
          <h1>Shelf</h1>
          {this.props.albums.map(album => <ShelfAlbums album={album} key={album.id} setDisplayPlayer = {this.props.setDisplayPlayer}/> )} 
      </div>
    )
  }
}

export default Shelf