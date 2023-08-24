import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'

export default function AppRouter({children, products}) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" render={routerProps => <ProductsList {...routerProps} products={products} />} />
        <Route path="/products/:id" component={ProductDetails} />
    </Switch>
}

// <ProductsList products={products} />
//  ProductsList

// URL: /products
// URL: /products/RANDOM_ID