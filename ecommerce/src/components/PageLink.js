import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function PageLink({children, ...props}) {
  return (
   <Link className="border-solid border-2 border-indigo-600 px-2 rounded-lg hover:bg-indigo-600 hover:text-white" {...props}>
        {children}
   </Link>
  )
}

export default PageLink