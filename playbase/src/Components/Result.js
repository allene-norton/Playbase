import React, { Component } from 'react'
import { Image, Item, Grid } from 'semantic-ui-react'
//import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
//import SearchBar from '../Components/SearchBar'
import { Responsive, Segment } from 'semantic-ui-react'

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
            // <Segment.Group>
            <div className="float-item">
                <Responsive as={Item.Group}>
                    <Item.Group unstackable relaxed>

                        <Item>

                            <Item.Image src={album.images[1]["url"]} alt={album.name} />
                            <Responsive as={Item.Content}>
                                {/* <Item.Content> */}
                                    <Item.Header>{album.name}</Item.Header>
                                    <Item.Meta>
                                        <span>{album.artists[0].name}</span>
                                    </Item.Meta>
                                    <button onClick={this.handleClick}>Add to Shelf</button>

                                {/* </Item.Content> */}
                            </Responsive>
                        </Item>
                    </Item.Group>
                </Responsive>
            </div>
        )
    }
}

export default Result