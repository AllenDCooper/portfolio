import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import type { MutableRefObject } from "react"

interface reactProps {
  navRef: MutableRefObject<HTMLElement | null>
}

const Nav = ({ navRef }: reactProps) => {

  return (
    <nav className={styles["nav-container"]} ref={navRef}>
      {/* <span className={styles["nav-title"]} onClick={handleNavigation}>Allen Cooper</span> */}
      <Link className={styles["nav-title"]} to="/">Allen Cooper</Link>
      {/* <a href="https://www.linkedin.com/in/allendcooper/" target="_blank">(LinkedIn)</a> */}
    </nav>
  )
}

export default Nav;