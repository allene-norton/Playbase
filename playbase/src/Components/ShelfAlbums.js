import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



class ShelfAlbums extends Component {

    spotify_id = this.props.album.spotify_id
    albumURI = `spotify:album:${this.spotify_id}`

    handleClick = () => {
        this.props.setDisplayPlayer(this.albumURI)
    }

    handleDelete = () => {
        this.props.deleteAlbum(this.props.album.id)
    }

    render() {
        let album = this.props.album
        return (
            <div className="container">
                <div className="image">
                    <img src={album.image_url} alt="" />
                </div>
                <div className="content">
                    <div className="title">
                        <p >{album.name}</p>
                        <div className="artist">
                            <p>{album.artist}</p>
                        </div>
                    </div>
                </div>
                <div className="overlay">

                </div>
                <div onClick={this.handleClick} className="button"><p>Play Album</p> </div>
            </div>
        )
    }
}

export default ShelfAlbums

// <h3>{album.name}</h3>
//                 <h4>{album.artist}</h4>
//                 <img src={album.image_url} />
//                 <button onClick={this.handleClick}>Play Album</button>
//                 <button onClick={this.handleDelete}>Remove from Shelf</button>

/* <div className="container">
<img src={album.image_url} alt="" />
<p className="title">{album.name}</p>
<div className="overlay"></div>
<div onClick={this.handleClick} className="button"><p>Play Album</p> </div>
</div> */

// <div class="ui card">
//   <div class="image">
//     <img src="/images/avatar2/large/kristy.png">
//   </div>
//   <div class="content">
//     <a class="header">Kristy</a>
//     <div class="meta">
//       <span class="date">Joined in 2013</span>
//     </div>

//   </div>

// </div>