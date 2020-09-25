import React, { Component } from 'react'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Button from '../Components/Button'
import Playbase from './Playbase'

const usersAPI = 'http://localhost:3000/api/v1/users'
const playlistAPI = 'https://api.spotify.com/v1/me/playlists'
const newPlaylistAPI = 'https://api.spotify.com/v1/users/'
const devicesAPI = 'https://api.spotify.com/v1/me/player/devices'
const audioAnalysisAPI = "https://api.spotify.com/v1/audio-analysis/"

class Home extends Component {
  constructor() {
    super()

    let isLoggedIn = false;
    if (window.location.href.includes("/playbase")) {
      isLoggedIn = true;
    }

    this.state = {
      isLoggedIn,
      users: []
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
      this.setState({users: data})
    })
  }

  

  refreshToken = () => {
    console.log('refreshing token')
    fetch(usersAPI)
    .then(results => results.json())
    .then(json => {
      this.setState({users: json})
    })
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
          state={this.state}/>} 
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