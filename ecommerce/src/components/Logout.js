import React, { useEffect } from 'react'
import { useUser } from '../contexts/UserProvider'

function Logout() {
    const { logout } = useUser();

    useEffect(() => {
        logout();
    }, [])

  return (
    null
  )
}

export default Logout