import React, { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useUser } from '../contexts/UserProvider';
import UITextField from './UITextField';
import UIButton from './UIButton';


function AuthenticationView({ isLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Signup';
  const history = useHistory();

  const { doLogin, doSignup, error, clearErrors, user } = useUser()

  const handleAuthentication = (event) => { 
    event.preventDefault() ;
    console.log(":: handleAuthentication ::", { doLogin, doSignup, error });
    (isLogin ? doLogin : doSignup)(email, password);
  };

  useEffect(() => {}, []); // componentDidMount (invoke only once after mounted)

  useEffect(() => {
   clearErrors();
  }, [isLogin]); // Work has componentDidUpdate (invoke whenever isLogin prop change)

  /*
  useEffect(() => {
    if(user) {
      history.push('/')
    }
  }, [user])
  */

 if(user) return <Redirect to="/" />

  return (
    <form onSubmit={handleAuthentication} className='bg-slate-100 rounded shadow max-w-xs mx-auto mt-5'>
      <h2 className='bg-slate-500 text-white px-3 py-4 text-center rounded-t'>{title}</h2>
      {error && <div className='text-red-700 bg-red-200 p-1 text-center text-xs border-b-2 border-red-700'>{error}</div>}
      <div className='p-5'>
        
        <UITextField 
          type="email"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <UITextField 
          type="password"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <UIButton>{title}</UIButton>
      </div>
  </form>
  )
}

export default AuthenticationView