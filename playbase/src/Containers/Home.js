import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Button from '../Components/Button'
import Playbase from './Playbase'
import SpotifyWebApi from "spotify-web-api-js";


const spotifyApi = new SpotifyWebApi();
const usersAPI = 'http://localhost:3000/api/v1/users/1'

class Home extends Component {
  constructor() {
    super()

    let isLoggedIn = false;
    if (window.location.href.includes("/playbase")) {
      isLoggedIn = true;
    }

    this.state = {
      isLoggedIn,
      user: {},
      albums: [],
      albumSearchResult: []
    }
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  fetchUser = () => {
    console.log('fetching user')
    return fetch(usersAPI)
      .then(res => res.json())
      .then(data => {
        console.log('setting user state')
        this.setState({ user: data })
      })
  }


  getAlbum = () => {
    // e.preventDefault()
    // console.log("clicked")
    const album = "nathaniel"
    const accessToken = this.state.user.access_token
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.searchAlbums(album).then(data => {
      console.log(`Search albums by ${album}`, data)
      // console.log(data.albums.items)
      this.setState({ albumSearchResult: data.albums.items })
      // console.log(this.state.albumSearchResult)
    }).catch(error => console.log(error))
  }

  postAlbum = (albumInfo) => {
    console.log(albumInfo)
    return fetch('http://localhost:3000/albums', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(albumInfo)
    }).then(res => res.json())
      .then(data => console.log("working", data))
  }



  renderHomeOrPlaybase = () => {
    console.log('renderHomeOr...')
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <div className="message-container">
            <h3 className="message">Playbase!</h3>
          </div>
          <div className="login-button">
            <Button />
          </div>
        </div>
      )
    } else if (this.state.isLoggedIn) {
      return <Router>
        <Route exact path="/"
          component={() => <Button />}
        />
        <Route exact path="/playbase"
          component={() => <Playbase
            state={this.state.user}
            getAlbum={this.getAlbum}
            albumSearchResult={this.state.albumSearchResult}
            postAlbum={this.postAlbum} 
            accessToken = {this.state.user.access_token} />}
        />
      </Router>

    }
  }


  render() {
    return (
      <div>
        {this.renderHomeOrPlaybase()}
      </div>
    )
  }
}

export default Home