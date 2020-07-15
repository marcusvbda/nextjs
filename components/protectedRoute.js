import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import Router from 'next/router'

const redirectTo = "/user"

const protectedRoute = Component => {

    const Handler = (props) => {
        const { user } = useContext(UserContext)
        const [visible, setVisible] = useState(false)

        const frontendRedirect = () => {
            Router.push(redirectTo)
        }

        const isLogged = () => {
            const logged = user.userName ? true : false
            return logged
        }

        useEffect(() => {
            if (!isLogged()) return frontendRedirect()
            setVisible(true)
        })

        return (visible ? <Component {...props} /> : <></>)
    }

    return Handler
}

export default protectedRoute