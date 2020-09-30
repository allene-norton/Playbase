import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
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
    this.setState({ userAlbums: [...this.state.userAlbums, this.props.addedAlbum] })
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
        token={this.props.accessToken}
        uris={this.state.currentURI}
      />
    } else {
      return <div></div>
    }
  }




  render() {
    return (
      <Router>
        <div className="album-finder">

          <div className="shelf">
            <Shelf albums={this.state.userAlbums}
              deleteAlbum={this.deleteAlbum}
              setDisplayPlayer={this.setDisplayPlayer} />
          </div>
        </div>
        <footer>
        <div className="player">{this.renderPlayer()}</div>
        </footer>
      </Router>
    )
  }
}

export default Playbase