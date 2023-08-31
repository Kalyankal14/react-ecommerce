import React from 'react'
import { useAppContext } from '../contexts/AppProvider';
import UIButton from './UIButton';

export default function ProductDetails({match, ...props}) {
  const { params } = match;
  const { id } = params;

  const { productsById, addProductToCart, cartProducts } = useAppContext();
  const product = productsById[id];
  const cartProductInfo = cartProducts[id]

  if(!product) return <h1>No Product Found....</h1>

  const { images, title, description, price } = product;
  const [ productMainImage ] = images;

  const addToCart = () => {
    addProductToCart(product);
  }

  return (
    <>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex gap-4 '>
          <img src={productMainImage} alt={title} className='w-1/3 rounded-lg transition-shadow' />
          <div className='w-2/3'>
            <h2 className='text-2xl font-semibold'>{title} | { cartProductInfo ? cartProductInfo.quantity : 0   }</h2>
            <p className='mt-2 text-gray-700'>{description}</p>
            <p className='mt-4 text-2xl'>₹{price}/-</p>
            <UIButton onClick={addToCart}>Add to cart</UIButton>
          </div>
        </div>

        <div className='flex gap-2 mt-4'>
          {images.map(imageUrl => <div key={imageUrl} className="w-1/5">
            <img 
              className="w-full rounded border object-cover" 
              src={imageUrl} 
              alt="Product" 
            />
          </div>
          )}
        </div>
      </div>
    </>
  )
}
