import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Link href="/about"><a>About</a></Link>
            <br />
            <Link href="/posts/[id]" as="/posts/1"><a>Posts</a></Link>
            <br />
            <button onClick={() => { Router.push("/posts/[id]", "/posts/2") }}>Posts</button><br />
            <Link href="/counter"><a>Counter</a></Link>
            <br />
        </div>
    )
}
export default Home