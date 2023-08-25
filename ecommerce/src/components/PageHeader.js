import React from 'react'
import PageLink from './PageLink'


function PageHeader() {
  return (
    <header className='bg-yellow-400 flex justify-between p-3'>
        <PageLink to="/">
            Ecommerce App
        </PageLink>

        <nav className='flex gap-3'>
            <PageLink to="/products">Products</PageLink>
            <PageLink to="/login">Login</PageLink>
            <PageLink to="/signup">Signup</PageLink>
        </nav>
    </header>
  )
}

export default PageHeader