import React, { createContext, useContext, useState } from 'react';
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
})

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth(firebaseApp);

    // doLogin(email = 'teja@gmail.com', password = '123456')
    const doLogin = (email, password) => {
        clearErrors();
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then(res => {
            console.log(":: DO LOGIN :: SUCCESS", res)
            setUser(res.user);
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
            setUser(res.user);
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