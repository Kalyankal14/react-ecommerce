import React from 'react'

function PageLayout({children, title}) {
  return (
    <div className='container mx-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
        {children}
    </div>
  )
}

export default PageLayout