import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {

  return (
    <main className={styles["home-container"]}>
      <img className={styles["headshot"]} src="./assets/headshot-cutout.jpg" alt="headshot" />
      <article className={styles["bio"]}>
        <p>
          I am a technical program manager with over ten years of experience in edtech / educational publishing. I live in New York City with my wife and my cat, George.
        </p>
      </article>
      <section className={styles["nav-button-container"]}>
        <Link to="/projects" className={styles["nav-button"]}>Projects</Link>
        <Link to="/projects" className={styles["nav-button"]}>Posts</Link>
        <Link to="/projects" className={styles["nav-button"]}>Contact</Link>
      </section>
    </main>
  )
}
export default Home;