import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Link from 'next/link'
import Router from 'next/router'
// import Head from 'next/head'

const Home = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            {/* <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
                <meta name="description" content="A page's description, usually one or two sentences." />
            </Head>
            <Head>
                <meta property="og:title" content="My new title" key="title" />
                <meta property="og:description" content="A page's description, usually one or two sentences." key="description" />
                <meta property="og:image" content="www.meusite.com.br/imagem.jpg" key="image" />
                <meta property="og:url" content="image/jpeg" key="url" />
                <meta property="og:type" content="A page's description, usually one or two sentences." key="type" />
            </Head> */}
            <h1>Hello</h1>
            <h2>{user.userName}</h2>
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