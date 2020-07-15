import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import UserContextProvider from '../context/userContext'
import parseCookies from '../utils/parseCookies'
import { isTrue } from '../utils/helpers'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, cookie_user }) => {
    return (
        <UserContextProvider cookie_user={cookie_user}>
            <Component {...pageProps} />
        </UserContextProvider>
    )
}

App.getInitialProps = ({ ctx }) => {
    const { req } = ctx
    const { username } = parseCookies(req)

    let user = {
        userName: isTrue(username) ? username : null,
    }

    return { cookie_user: user }
}


export default App