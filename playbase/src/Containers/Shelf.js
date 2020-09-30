import React, { Component, CSSProperties} from 'react'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import ShelfAlbums from "../Components/ShelfAlbums"
import { Carousel } from 'react-responsive-carousel'
import { withKnobs, boolean, number } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


class Shelf extends Component {
  render() {
    return(
      <div className="shelf">
            <Carousel >
       {this.props.albums.map(album => <ShelfAlbums album={album} key={album.id} deleteAlbum={this.props.deleteAlbum} setDisplayPlayer = {this.props.setDisplayPlayer}/> )} 
    </Carousel>
      </div>
    )
  }
}

export default Shelf

{/* <Carousel centerMode>
{this.props.albums.map(album => <ShelfAlbums album={album} key={album.id} deleteAlbum={this.props.deleteAlbum} setDisplayPlayer = {this.props.setDisplayPlayer}/> )} 
</Carousel> */}