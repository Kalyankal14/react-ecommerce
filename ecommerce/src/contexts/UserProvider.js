import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { firebaseApp } from "../firebaseApp"

const FIREBASE_AUTH_ERRORS = {
    'auth/wrong-password': `Invalid email/password`,
    'auth/user-not-found': `No user found for provided email`,
    'auth/email-already-in-use': 'Email already register, do please login'
}

// var error = { code: 'auth/wrong-password' };
// var message = FIREBASE_AUTH_ERRORS[error.code]

const UserContext = createContext({
    user: null,
    error: null
});

const APP_USER = "APP_USER";

function UserProvider({children}) {
    const localUser = localStorage.getItem(APP_USER); 
    const [user, setUser] = useState(localUser ? JSON.parse(localUser) : null);
    const [error, setError] = useState(null);
    const auth = getAuth(firebaseApp);
    const history = useHistory(); 

    const saveUser = user => {
        localStorage.setItem(APP_USER, JSON.stringify(user));
        setUser(user);
        history.push('/products');
    }

    // doLogin(email = 'teja@gmail.com', password = '123456')
    const doLogin = (email, password) => {
        clearErrors();
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then(res => {
            console.log(":: DO LOGIN :: SUCCESS", res)
            saveUser(res.user);
        }).catch(error => {
            var message = FIREBASE_AUTH_ERRORS[error.code];
            console.log(":: DO LOGIN :: FAILURE", error.code, message);
            setError(message);
        })
    }

    const doSignup = (email, password) => {
        clearErrors();
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then(res => {
            console.log(":: DO SINGUP :: SUCCESS", res)
            saveUser(res.user);
        }).catch(error => {
            var message = FIREBASE_AUTH_ERRORS[error.code];
            setError(message);
        })
    }

    const logout = () => {
        setUser(null);
    }

    const clearErrors = () => {
        setError(null);
    }

  return (
    <UserContext.Provider value={{
        user: user,
        error: error,
        doLogin,
        doSignup,
        logout,
        clearErrors
    }}>
        {children}
    </UserContext.Provider>
  )
}

// To use UserContext -> useContext(UserContext) -> { user, error, doLogin, doSignup, logout, clearErrors }
export const useUser = () => useContext(UserContext);
// useUser()
// useUser() -> { user, error, doLogin, doSignup, logout, clearErrors }
export default UserProvider