import React from 'react'

export default function ProductDetails({match, ...props}) {
  const { params } = match;
  const { id } = params;
  return (
    <>
      <div>ProductDetails: {id}</div>
    </>
  )
}
