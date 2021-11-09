import { Link } from "react-router-dom"
import Login from "./Login"
import styles from "../style/NavBar.module.css"
import dstyles from "../style/DefaultStyles.module.css"

const NavBar = () => {
    return <>
    <div className={`${styles.nav} ${dstyles.dinline} ${dstyles.bgcolordbrown} ${dstyles.txtcolorwhite} ${dstyles.fontfamilyrr}`}>
        <div className={styles.navfiller}> </div>
        <ul className={`${dstyles.insdinline} ${dstyles.nomargin} ${dstyles.nopadding}`}>
            <Link to="/Home"><li><p>Главная</p></li></Link>
            <Link to="/About"><li><p>Обо мне</p></li></Link>
        </ul>
        <Login></Login>
    </div>
    </>
}
export default NavBar