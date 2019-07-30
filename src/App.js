import React, { Component } from 'react';
import SongsList from './songsList';
import Header from './Header';
import Songs from './Songs';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    }
  }

  onSongRemoveHandler = (index) => {
    let cart = this.state.cart;
    cart.splice(index, 1);
    let total = cart;
    total = total.reduce((prev, current) => prev + parseFloat(current.price), 0).toFixed(2);
    this.setState({cart, total});
  }

  onCartClickHandler = (song) => {
    let cart = this.state.cart;    
    cart.push(song);
    //DUPLICATE PURCHASES
    for(let i=0; i<cart.length; i++) {
      for(let j=i+1; j<cart.length; j++) {
        if(cart[i].name === cart[j].name) {
          cart.splice(j, 1);
          return;
        }
      }
    }
    //
    let total = cart;
    total = total.reduce((prev, current) => prev + parseFloat(current.price), 0).toFixed(2);
    this.setState({cart, total});
  }
  
  render() {
    return (
      <div>
        <Header cart={this.state.cart} onSongRemove={this.onSongRemoveHandler} total={this.state.total} />
        <Songs songsList={SongsList} onCartClick={this.onCartClickHandler} />
      </div>
    )
  }
}
