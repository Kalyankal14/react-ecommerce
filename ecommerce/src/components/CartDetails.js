import React, { Component } from 'react'
import { AppContext } from "../contexts/AppProvider"

export class CartDetails extends Component {
  render() {
    return (
      <section className='container mx-auto py-4'>
        <h2>Cart Items</h2>
        <AppContext.Consumer>
            {({cartItems, cartProducts}) => <table>
                   <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Per Price</th>
                        <th>Total Price</th>
                    </tr>
                   </thead>
                   <tbody>
                    {cartItems.map(item => <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                    </tr>)}
                   </tbody>
            </table>}
        </AppContext.Consumer>
        
        <hr />

        <h2>Cart Items</h2>
        <AppContext.Consumer>
            {({cartProducts}) => <table>
                   <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Per Price</th>
                        <th>Total Price</th>
                    </tr>
                   </thead>
                   <tbody>
                    {Object.values(cartProducts).map(item => <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                    </tr>)}
                   </tbody>
            </table>}
        </AppContext.Consumer>
      </section>
    )
  }
}

export default CartDetails