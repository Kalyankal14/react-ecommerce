import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../firebaseApp';


function AuthenticationView({ isLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Signup';

  const handleAuthentication = (event) => { 
    const formData = {
      email,    // email: email
      password  // password: password
    }
    console.log(":: handleAuthentication ::", title, isLogin, formData)
    event.preventDefault() ;
    // https://firebase.google.com/docs/auth/web/start?authuser=0&hl=en
    const auth = getAuth(firebaseApp);
    if(isLogin) {
      // Login
      signInWithEmailAndPassword(auth, email, password)
        .then(res => console.log(":: LOGIN RESPONSE ::", res))
    } else {
      // Signup
      
      createUserWithEmailAndPassword(auth, email, password)
      .then(res => console.log(":: SIGNUP RESPONSE ::", res))
        .catch(error => console.log(error))
    }

  };


  return (
    <form onSubmit={handleAuthentication}>
      <h2>{title}</h2>

      <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        className='border-solid border-2 border-gray-600 m-3'
      />

      <input 
        type="password"
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='border-solid border-2 border-gray-600 m-3'
      />

      <button className='bg-gray-600 text-white px-4 rounded m-3'>{title}</button>
  </form>
  )
}

export default AuthenticationView