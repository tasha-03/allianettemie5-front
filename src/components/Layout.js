import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
    return <>
    <Header/>
    <NavBar/>
    {children}
    <Footer/>
    </>
}
export default Layout