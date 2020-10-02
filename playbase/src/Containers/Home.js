import React, { Component } from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogInButton from '../Components/Button'
import Playbase from './Playbase'
import SpotifyWebApi from "spotify-web-api-js";
import SearchForm from '../Components/SearchForm'
import logo from '../images/playbaseSmall.png'




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
      albumSearchResult: [],
      addedAlbum: {}
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


  getAlbum = (searchedAlbum) => {
    //e.preventDefault()
    // console.log("clicked")
    const album = searchedAlbum
    const accessToken = this.state.user.access_token
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.searchAlbums(album).then(data => {
      console.log(`Search albums by ${album}`, data)
      // console.log(data.albums.items)
      this.setState({ albumSearchResult: data.albums.items })
      // console.log(this.state.albumSearchResult)
    }).catch(error => console.log(error))
  }

  handleSearch = (e) => {
    this.setState({ searchTxt: e.target.value })
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
      .then(data => {
        console.log("working", data)
        this.setState({ addedAlbum: data })
      })
  }

  logout = () => {
    this.setState({isLoggedIn: false})
  }



  renderHomeOrPlaybase = () => {
    console.log('renderHomeOr...')
    if (!this.state.isLoggedIn) {
      return (
        <div className = "home-page-div">
          <div className="message-container">
            <img src={logo} alt='playbase logo' />
            <div className="login-button">
              <LogInButton logged={this.state.isLoggedIn} />
            </div>
          </div>
        </div>
      )
    } else if (this.state.isLoggedIn) {
      return <Router>
        <NavBar logout={this.logout}/>
        {/* <Route exact path="/"
          component={() => <Button />}
        /> */}
        <Route exact path="/playbase"
          component={() => <Playbase
            state={this.state.user}
            addedAlbum={this.state.addedAlbum}
            getAlbum={this.getAlbum}
            albumSearchResult={this.state.albumSearchResult}
            postAlbum={this.postAlbum}
            accessToken={this.state.user.access_token}
            handleSearch={this.handleSearch} />}
        />
        <Route exact path="/search"
          component={() => <SearchForm getAlbum={this.getAlbum} handleSearch={this.handleSearch} albumSearchResult={this.state.albumSearchResult}
            postAlbum={this.postAlbum} />} />
            <Route exact path='/' />
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