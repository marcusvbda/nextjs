import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Post = ({ posts }) => {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        console.log("first", posts)
    }, [])

    return (
        <div>
            <h1>Posts : {id}</h1><br />
            <Link href="/"><a>Home</a></Link><br />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

Post.getInitialProps = async ({ ctx }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return { posts: posts }
}

export default Post