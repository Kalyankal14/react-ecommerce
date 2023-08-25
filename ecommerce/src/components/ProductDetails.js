import React from 'react'
import { useAppContext } from '../contexts/AppProvider';
import ProductCard from './ProductCard';

export default function ProductDetails({match, ...props}) {
  const { params } = match;
  const { id } = params;

  const { products } = useAppContext();
  const product = products.find(prod => prod.id == id);

  if(!product) return <h1>No Product Found....</h1>

  return (
    <>
      <div>
        ProductDetails: {id}
        <ProductCard product={product} />
      </div>
    </>
  )
}
