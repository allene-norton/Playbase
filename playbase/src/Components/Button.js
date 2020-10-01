import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class LogInButton extends Component {

  render() {
    return (
      // <Button basic color='black' content="Log in with Spotify" href="http://localhost:3000/api/v1/login"/>
      <a href="http://localhost:3000/api/v1/login"><button className="glow-on-hover">Log in with Spotify</button></a>
      
    )
  }
}

export default LogInButton