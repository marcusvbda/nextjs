import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>Hello, {user.userName}</h1>
            <Link href="/about"><a>About</a></Link>
            <br />
            <Link href="/posts/[id]" as="/posts/1"><a>Posts</a></Link>
            <br />
            <button onClick={() => { Router.push("/posts/[id]", "/posts/2") }}>Posts</button><br />
            <Link href="/counter"><a>Counter</a></Link><br />
            <Link href="/user"><a>User</a></Link>
            <br />
        </div>
    )
}
export default Home