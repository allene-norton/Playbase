import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'
import { Responsive } from 'semantic-ui-react'

class Result extends Component {
    state = {
        name: this.props.result.name,
        image_url: this.props.result.images[0]["url"],
        artist: this.props.result.artists[0].name,
        album_url: this.props.result.external_urls.spotify,
        spotify_id: this.props.result.id,
        spotify_uri: this.props.result.uri
    }
    handleClick = () => {
        this.props.postAlbum(this.state)
        // alert("Album added.")
    }

    handleName = () => {
        let albumName
        if (this.props.result.name.length > 17) {
            albumName = this.props.result.name.slice(0,15) + '...'
            return albumName
        } else {
            return this.props.result.name
        }
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
                                    <Item.Header>{this.handleName()}</Item.Header>
                                    <Item.Meta>
                                        <span>{album.artists[0].name}</span>
                                    </Item.Meta>
                                    <Link to='/playbase'><button className='btn-two' id='add' onClick={this.handleClick}>Add to Shelf</button></Link>

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