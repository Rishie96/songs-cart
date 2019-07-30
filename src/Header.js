import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleCart: false
        }
    }

    toggleCart = () => {
        let cart = document.getElementById('cart');
        cart.style.display = this.state.toggleCart? 'none': 'block';
        this.setState({toggleCart: !this.state.toggleCart});
    }

    renderCart = () => {
        let cart = this.props.cart;        
        return cart.map((song, index) => {
                return (
                    <div className="cart-item" key={song.name}>
                        <span className="cart-song-name">{song.name}</span><br/>
                            <span className="cart-song-artist">{song.artist}</span>
                            <span className="cart-song-price">${song.price}</span>                        
                        <span className="cart-song-remove" onClick={() => this.props.onSongRemove(index)}>&nbsp; x</span>
                        <hr style={{border: '0.5px solid #5cb8ff', width: '100%'}}/>
                    </div>
                )
            })                            
    }

    render() {
        return (
            <div className="header-main">
                <span className="brand">MU$IC</span>
                <div className="cart">
                    <i className="fa fa-shopping-cart" style={styleCart} onClick={this.toggleCart} ><sup className="cart-item-count">{this.props.cart.length}</sup></i>
                    <div className="cart-contents" id="cart">
                        {this.renderCart()}
                        <div className="cart-checkout">
                            <span className="cart-total">Total: ${this.props.total}</span>
                            {this.props.cart.length===0? null: <button onClick={() => window.location.reload()} className="checkout">CHECKOUT</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let styleCart = {
    fontSize: '3.6vh', 
    color: '#cc9200', 
    marginRight: '0.4vw',
}