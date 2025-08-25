import type { MutableRefObject } from 'react';
import styles from './Footer.module.css'
import email from "./email.svg"

interface reactProps {
  footerRef: MutableRefObject<HTMLElement | null>
}

const Footer = ({ footerRef }: reactProps) => {

  return (
    <footer className={styles["footer-container"]} ref={footerRef}>
      {/* <span></span> */}
      <object className="email" width="260" height="24" data={email} type="image/svg+xml"></object>
      {/* <a href="https://www.linkedin.com/in/allendcooper/" target="_blank">LinkedIn</a> */}
    </footer>
  )
}

export default Footer;