import type { Dispatch, SetStateAction } from "react";
import styles from "./Nav.module.css"

interface reactProps {
  setView: Dispatch<SetStateAction<string>>
}

const Nav = ({ setView }: reactProps) => {
  return (
    <nav className={styles["nav-container"]}>
      <span className={styles["nav-title"]} onClick={() => setView("home")}>Allen Cooper</span>
    </nav>
  )
}

export default Nav;