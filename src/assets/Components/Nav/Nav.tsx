import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = () => {

  return (
    <nav className={styles["nav-container"]}>
      {/* <span className={styles["nav-title"]} onClick={handleNavigation}>Allen Cooper</span> */}
      <Link className={styles["nav-title"]} to="/">Allen Cooper</Link>
    </nav>
  )
}

export default Nav;