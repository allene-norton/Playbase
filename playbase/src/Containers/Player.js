import React, { Component } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"

class Player extends Component {


    renderPlayer = () => {
        if (this.props.displayPlayer) {
          return <SpotifyPlayer autoPlay={true} play={true}
            token={this.props.accessToken}
            uris={this.props.currentURI}
          />
        } else {
          return <div></div>
        }
      }

    render() {
        return (
            <div className="player">{this.renderPlayer()}</div>
        )
    }
}

export default Player