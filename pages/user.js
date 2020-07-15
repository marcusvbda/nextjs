import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Link from 'next/link'


const User = () => {
    const { user, setUserName } = useContext(UserContext)

    return (
        <div>
            <h1>User : {user.userName}</h1><br />
            <button onClick={() => setUserName("Marcus Vinicius Bassalobre de Assis")}>Test Context</button><br />
            <Link href="/"><a>Home</a></Link><br />
        </div >
    )
}

export default User