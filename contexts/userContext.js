import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState({})

    const setUserName = username => setUser({ ...user, userName: username })

    return (
        <UserContext.Provider value={{ user, setUserName }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider