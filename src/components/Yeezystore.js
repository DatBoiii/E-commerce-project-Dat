import React from 'react';
import '../css/Yeezystore.css';
import products from './Data'
import Products from './Product'
import Cart from './Cart'


class Yeezystore extends React.Component {
    constructor() {
      super();
      this.state = {
        products: products,
        cartItems: JSON.parse(localStorage.getItem('cartItems'))? JSON.parse(localStorage.getItem('cartItems')): [],
      };
    }

    createOrder = (order) => {
        alert("Need to save order for " + order.name )
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({cartItems: cartItems.filter(x=>x._id !== product._id)})
        localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if(item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart) {
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    render(){
        return (
            <div className='grid-container'>
                <h1 style={{ textAlign: 'center', paddingTop:'10px', fontSize: '32px'}}>YEEƵY</h1>
                <main>
                    <div className='content'>
                        <div className='main'>
                            <Products products={this.state.products} addToCart={this.addToCart}></Products>
                        </div>
                        <div className='sidebar'>
                            <Cart cartItems={this.state.cartItems} removeFromCart = {this.removeFromCart}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Yeezystore;