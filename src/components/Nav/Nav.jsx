import styles from "./Nav.module.css";
import logo from "./assets/logo.svg";


function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="logo icon" />
            </div>
            <menu className={styles.menu}>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>About us</li>
                    <li>service</li>
                    <li>Gallery</li>
                    <li>Testimonials</li>
                </ul>
            </menu>
        </nav>
    )
}

export default Nav