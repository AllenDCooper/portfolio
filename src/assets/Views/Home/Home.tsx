import type { Dispatch, SetStateAction } from 'react';
import styles from './Home.module.css';

interface reactProps {
  setView: Dispatch<SetStateAction<string>>
}

const Home = ({ setView }: reactProps) => {
  return (
    <main className={styles["home-container"]}>
      <img className={styles["headshot"]} src="./assets/headshot-cutout.jpg" alt="headshot" />
      <article className={styles["bio"]}>
        <p>
          I am a technical program manager with over ten years of experience in edtech / educational publishing. I live in New York City with my wife and my cat, George.
        </p>
      </article>
      <section className={styles["nav-button-container"]}>
        <button className={styles["nav-button"]} onClick={() => setView("projects")}>Projects</button>
        <button className={styles["nav-button"]} onClick={() => setView("posts")}>Posts</button>
        <button className={styles["nav-button"]} onClick={() => setView("contact")}>Contact</button>
      </section>
    </main>
  )
}
export default Home;