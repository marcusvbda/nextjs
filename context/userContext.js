import React, { useEffect, createContext, useState } from 'react'
import Router from 'next/router'

export const UserContext = createContext()

const UserContextProvider = props => {
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [isLoged, setIsLoged] = useState(false)

    const setUserName = username => setUser({ ...user, userName: username })

    const logout = () => {
        setUser({})
        Router.push("/user")
    }

    const isLogged = () => {
        return user.userName ? true : false
    }

    return (
        <UserContext.Provider value={{ user, setUserName, logout, isLogged }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider