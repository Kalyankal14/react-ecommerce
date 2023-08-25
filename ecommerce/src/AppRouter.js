import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import Signup from './components/Signup'

export default function AppRouter({children}) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route exact path="/products" component={ProductsList} />
        <Route path="/products/:id" component={ProductDetails} />
    </Switch>
}

// <ProductsList products={products} />
//  ProductsList

// URL: /products
// URL: /products/RANDOM_ID