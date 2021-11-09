import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../style/Layout.module.css'

const Layout = ({children}) => {
    return <>
    <div className={styles.layout}>
        <Header/>
        <NavBar/>
        {children}
        <Footer/>
    </div>
    </>
}
export default Layout