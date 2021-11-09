import { Link } from "react-router-dom"
import styles from "../style/Login.module.css"
import dstyles from "../style/DefaultStyles.module.css"

const Login = () =>{
    return <>
    <div className={`${styles.login} ${dstyles.insdinline}`}>
        <Link className={`${styles.loginbtn} ${dstyles.nomargin}`}>
            <p>Авторизоваться</p>
        </Link>
    </div>
    </>
}
export default Login