import styles from "./Nav.module.css";
import logo from "./assets/logo.svg";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo icon" />
      </div>
      <menu className={styles.menu}>
        <ul>
          <li className={styles.active}>Home</li>
          <li>
            <p>About us <span className="maker"></span></p>
            
          </li>
          <li>
            <p>
              service <span className="maker"></span>
            </p>
          </li>
          <li>
            <p>
              Gallery <span className="maker"></span>
            </p>
          </li>
          <li>
            <p>
              Testimonials <span className="maker"></span>
            </p>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default Nav;
