import dstyles from "../style/DefaultStyles.module.css"
import styles from "../style/Header.module.css"

const Header = () => {
    return <><div className={`${dstyles.fontfamilyrr} ${styles.header}`}>
        <div className={styles.logo}>Писательский блог AllianettemE5</div>
    </div>
    </>
}
export default Header