import React, { Component } from 'react';

export default class Songs extends Component {

    // constructor(props) {
    //     super(props);
    // }

    renderSongsList = () => {
        return this.props.songsList.map((song) => {
            return (
                <div className="song-card" key={song.name}>
                    <img src={song.image} alt={song.name} />
                    <span className="name">{song.name}</span>
                    <span className="price">${song.price}</span>
                    <p>by <span className="artist">{song.artist}</span></p>
                    <button className="add-to-cart" onClick={() => this.props.onCartClick(song)}>ADD TO CART</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="songs-list">
                {this.renderSongsList()}
            </div>
        )
    }
}
