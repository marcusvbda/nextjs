import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import UserContextProvider from '../context/userContext'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
    return (
        <UserContextProvider>
            <Component {...pageProps} />
        </UserContextProvider>
    )
}
export default App