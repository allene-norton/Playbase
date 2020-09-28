import React, { Component } from 'react'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
//import SearchBar from '../Components/SearchBar'

class Result extends Component {
    state = {
        name: this.props.result.name,
        image_url: this.props.result.images[1]["url"],
        artist: this.props.result.artists[0].name,
        album_url: this.props.result.external_urls.spotify,
        spotify_id: this.props.result.id,
        spotify_uri: this.props.result.uri
    }
    handleClick = () => {
        this.props.postAlbum(this.state)
    }
    render() {
        let album = this.props.result
        console.log(this.props.result.uri)
        return (
            <div className="card">
                <h3>{album.name}</h3>
        <h4>{album.artists[0].name}</h4>
        <img src={album.images[1]["url"]} alt = {album.name} />
        <button onClick={this.handleClick}>Add to Shelf</button>
            </div>
        )
    }
}

export default Result