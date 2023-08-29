import React from 'react'

function UIButton(props) {
  return (
    <button
        className='w-full block bg-slate-500 text-white px-4 py-1 rounded hover:bg-slate-700 my-1'
        {...props}
    >
        {props.children}
    </button>
  )
}

// <UIButton>Title</UIButton>

export default UIButton