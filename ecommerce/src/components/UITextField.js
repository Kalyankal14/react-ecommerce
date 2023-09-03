import React from 'react'

function UITextField(props) {
    console.log(":: UITextField -> props ::", props)
  return (
    <input 
        className='border-solid border-2 border-gray-600 mb-3 py-1 px-2 rounded w-full block hover:shadow-xl focus:shadow-xl' 
        {...props}
    />
  )
}

/*
props = {
    "type": "email",
    "placeholder": "Email",
    "value": ""
}

<input className="text-white" {...props} /> ===> input({ className: "text-white" })
<input className="text-white" type="email" placeholder="Email" value="" />

<input 
    className="text-white"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
/>
*/

export default UITextField;

// <UITextField />              ===> <input className='border-solid border-2 border-gray-600 m-3' />
// <UITextField type="email" /> ===> <input className='border-solid border-2 border-gray-600 m-3' type="email" />
// <UITextField type="email" placeholder="Enter Email" onChange={() => {}} />
/*
    <input 
        className='border-solid border-2 border-gray-600 m-3' 
        type="email" 
        placeholder="Enter Email" 
        onChange={() => {}} />
*/