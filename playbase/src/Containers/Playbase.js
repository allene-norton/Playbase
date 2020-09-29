import React, { Component } from 'react'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import ResultsContainer from './ResultsContainer'
import Shelf from './Shelf'
import SpotifyPlayer from "react-spotify-web-playback"
import SearchForm from '../Components/SearchForm'

const albumsAPI = "http://localhost:3000/albums"

class Playbase extends Component {

  state = {
    userAlbums: [],
    displayPlayer: false,
    currentURI: ''
  }

  componentDidMount() {
    this.fetchAlbums()
    this.setState({userAlbums: [...this.state.userAlbums, this.props.addedAlbum]})
  }

  deleteAlbum = (albumID) => {
    console.log(albumID)
    return fetch(`http://localhost:3000/albums/${albumID}`, {
      method: 'DELETE'
    }).then(this.setState((prev) => ({ userAlbums: prev.userAlbums.filter(album => album.id !== albumID) })))
  }

  

  fetchAlbums = () => {
    return fetch(albumsAPI).then(res => res.json()).then(data => this.setState({ userAlbums: data }))
  }

  setDisplayPlayer = (albumURI) => {
    this.setState({
      displayPlayer: true,
      currentURI: albumURI
    })
  }

  renderPlayer = () => {
    if (this.state.displayPlayer) {
      return <SpotifyPlayer autoPlay={true}
        token={this.props.accessToken }     
        uris={this.state.currentURI}
      />
    } else {
      return <div></div>
    }
  }




  render() {
    return (
      <div className="album-finder">
        {/* {console.log(this.props.state.access_token)}
        {console.log(this.props.state.refresh_token)} */}
        <h3>It works!</h3>
        <SearchForm getAlbum={this.props.getAlbum} handleSearch = {this.props.handleSearch} />

        {console.log(this.props.albumSearchResult)}
        <ResultsContainer albumSearchResult={this.props.albumSearchResult}
          postAlbum={this.props.postAlbum} />
        <Shelf albums={this.state.userAlbums} 
        deleteAlbum={this.deleteAlbum}
        setDisplayPlayer = {this.setDisplayPlayer}/>
        {this.renderPlayer()}

      </div>
    )
  }
}

export default Playbase