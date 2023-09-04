import React from 'react'
import PageLink from './PageLink'
import { useUser } from '../contexts/UserProvider'
import { useAppContext } from '../contexts/AppProvider';


function PageHeader() {
  const { user } = useUser();
  const { cartCount } = useAppContext();
  return (
    <header className='bg-yellow-400 flex justify-between p-3'>
        <PageLink to="/">
            React Ecommerce
        </PageLink>

        <nav className='flex gap-3'>
            <PageLink to="/products">Products</PageLink>
            {user ? <div>{user.email} <PageLink to="/logout">Logout</PageLink></div> : <>
              <PageLink to="/login">Login</PageLink>
              <PageLink to="/signup">Signup</PageLink>
            </>}

            <PageLink to="/cart">Cart Item: {cartCount}</PageLink>
            
        </nav>
    </header>
  )
}

export default PageHeader