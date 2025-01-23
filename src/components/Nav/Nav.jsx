import { useState } from "react";
import styles from "./Nav.module.css";
import logo from "./assets/logo.svg";

function Nav() {
  let [isOpen, setIsOpen] = useState(true);
  const close = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo icon" />
      </div>
      {isOpen ? (
        <div className={styles.bars} onClick={()=> close()}>
          <div></div>
        </div>
      ) : (
        <div className={styles.close} onClick={()=> close()}>
          <div></div>
        </div>
      )}
      {isOpen? false : <menu className={styles.menu}>
        <ul>
          <li className={styles.active}>Home</li>
          <li>
            <p>
              About us <span className="maker"></span>
            </p>
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
      </menu>}
    </nav>
  );
}

export default Nav;
