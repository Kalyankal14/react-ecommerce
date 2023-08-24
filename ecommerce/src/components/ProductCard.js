import React from 'react'
import {Link} from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <Link to={`/products/${product.id}`} className='product-card'>
        <img src={product.images[0]} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
    </Link>
  )
}
