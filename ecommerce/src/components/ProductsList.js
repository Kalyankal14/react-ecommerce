import React from 'react'
import ProductCard from './ProductCard';
import { useAppContext } from '../contexts/AppProvider';

export default function ProductsList() {
  const { products } = useAppContext()
    console.log(":: ProductsList -> products ::", products);
  return (
    <>
      <h3>Products</h3>
      <div className='product-list'>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  )
}
