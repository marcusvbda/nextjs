import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = ({ posts }) => {
    const router = useRouter()
    const { id } = router.query
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("first", posts)
    }, [])

    useEffect(() => {
        console.log("counter alterado")
    }, [counter])

    return (
        <div>
            <h1>Posts : {id}</h1><br />
            <button onClick={() => setCounter(counter + 1)}>Counter : {counter}</button><br />
            <Link href="/"><a>Home</a></Link><br />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

Post.getInitialProps = async ({ query }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return { posts }
}

export default Post