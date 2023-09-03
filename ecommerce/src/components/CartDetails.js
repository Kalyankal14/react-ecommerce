import React, { Component } from 'react'
import { AppContext } from "../contexts/AppProvider"
import UIButton from './UIButton';
import CartItem from './CartItem';

export class CartDetails extends Component {
  render() {
    return (
      <section className='container mx-auto py-4'>
        <h2 className='text-2xl font-semibold mb-4'>Cart Details</h2>
        <AppContext.Consumer>
            {({allCartProducts, totalCartAmount}) => {
              return allCartProducts.length > 0 ? <div>
                {allCartProducts.map((product) => <CartItem product={product}/>)}
                <h3 className='text-lg font-semibold mt-4'>Total Price: {totalCartAmount}</h3>
                <UIButton>Proceed to checkout</UIButton>
              </div> : <p>Your cart is empty..</p>
            }}
        </AppContext.Consumer>
      </section>
    )
  }
}

export default CartDetails