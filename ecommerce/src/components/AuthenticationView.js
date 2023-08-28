import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/UserProvider';


function AuthenticationView({ isLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Signup';

  const { doLogin, doSignup, error, clearErrors } = useUser()

  const handleAuthentication = (event) => { 
    event.preventDefault() ;
    console.log(":: handleAuthentication ::", { doLogin, doSignup, error });
    (isLogin ? doLogin : doSignup)(email, password);
    /*
    if(isLogin) {
      doLogin(email, password);
    } else {
      doSignup(email, password);
    }
    */
  };

  useEffect(() => {}, []); // componentDidMount (invoke only once after mounted)

  useEffect(() => {
   clearErrors();
  }, [isLogin]); // Work has componentDidUpdate (invoke whenever isLogin prop change)


  return (
    <form onSubmit={handleAuthentication}>
      <h2>{title}</h2>
      {error && <div className='text-red-500 p-2 m-2'>{error}</div>}
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