import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import Link from 'next/link'
import ProtectedRoute from '../utils/protectedRoute'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const { logout } = useContext(UserContext)

    // useEffect(() => {
    //     // console.log("first")

    //     return () => {
    //         // console.log("desctruction")
    //     }
    // }, [])

    // useEffect(() => {
    //     // console.log("counter alterado")
    // }, [counter])

    return (
        <div>
            <h1>Counter : {counter}</h1><br />
            <button onClick={() => setCounter(counter + 1)}>
                Counter
            </button><br />
            <button onClick={() => logout()}>
                Logout
            </button><br />
            <Link href="/"><a>Home</a></Link><br />
        </div>
    )
}


export default ProtectedRoute(Counter)