import React, { useEffect, createContext, useState } from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'
import { isJSON } from '../utils/helpers'

export const UserContext = createContext()

const UserContextProvider = ({ children, cookie_user }) => {
    const [user, setUser] = useState(cookie_user)

    const setUserName = username => {
        setUser({ ...user, userName: username })
        return Cookie.set("username", username, { expires: 365 }) //one year
    }

    const logout = () => {
        setUserName(null)
        return Router.push("/user")
    }

    const isLogged = () => user.userName ? true : false

    return (
        <UserContext.Provider value={{ user, setUserName, logout, isLogged }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider