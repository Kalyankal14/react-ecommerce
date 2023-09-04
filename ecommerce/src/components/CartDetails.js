import React, { Component } from 'react'
import { AppContext } from "../contexts/AppProvider"
import UIButton from './UIButton';
import CartItem from './CartItem';


export class CartDetails extends Component {

  gotoCheckout = () => {
    this.props.history.push('/checkout')
  }

  render() {
    console.log(":: CartDetails :: ", this.props)
    return (
      <section className='container mx-auto py-4'>
        <h2 className='text-2xl font-semibold mb-4'>Cart Details</h2>
        <AppContext.Consumer>
            {({allCartProducts, totalCartAmount}) => {
              return allCartProducts.length > 0 ? <div>
                {allCartProducts.map((product) => <CartItem key={product.id} product={product}/>)}
                <h3 className='text-lg font-semibold mt-4'>Total Price: {totalCartAmount}</h3>
                <UIButton onClick={this.gotoCheckout}>Proceed to checkout</UIButton>
              </div> : <p>Your cart is empty..</p>
            }}
        </AppContext.Consumer>
      </section>
    )
  }
}

export default CartDetails