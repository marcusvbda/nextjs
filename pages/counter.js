import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("first")
    }, [])

    useEffect(() => {
        console.log("counter alterado")
    }, [counter])

    return (
        <div>
            <h1>Counter : {counter}</h1><br />
            <button onClick={() => setCounter(counter + 1)}>
                Counter
            </button><br />
            <Link href="/"><a>Home</a></Link><br />
        </div>
    )
}

export default Counter