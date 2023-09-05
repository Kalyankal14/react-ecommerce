import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import AuthenticationView from './components/AuthenticationView'
import Logout from './components/Logout'
import CartDetails from './components/CartDetails'
import Checkout from './components/Checkout'
import OrderHistory from './components/OrderHistory'
import { useUser } from './contexts/UserProvider'


function authRoute(ComponentView) {
    return () => {
        const { user } = useUser();
        return user ? <ComponentView /> : <Redirect to="/login" />
    }
}


export default function AppRouter({children}) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={(routerProps) => <AuthenticationView {...routerProps} isLogin />}/>
        <Route path="/signup" render={(routerProps) => <AuthenticationView {...routerProps} />}/>
        <Route exact path="/products" component={ProductsList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={CartDetails} /> 
        <Route path="/checkout" component={authRoute(Checkout)} />      {/* () => <Checkout /> */}
        <Route path="/history" component={authRoute(OrderHistory)} />   {/* () => <OrderHistory /> */}
        <Route path="/test" component={() => <div>TEST PAGE</div>}/>
    </Switch>
}

// <ProductsList products={products} />
//  ProductsList

// URL: /products
// URL: /products/RANDOM_ID