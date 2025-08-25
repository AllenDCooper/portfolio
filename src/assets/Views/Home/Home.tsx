import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {

  return (
    <main className={styles["home-container"]}>
      <img className={styles["headshot"]} src="./assets/headshot-cutout.jpg" alt="headshot" />
      <article className={styles["bio"]}>
        <p>
          I am a technical program manager with over ten years of experience in edtech and educational publishing. I live in New York City with my wife and my cat.
        </p>
      </article>
      <section className={styles["nav-button-container"]}>
        <Link to="/discovery" className={styles["nav-button"]}>Discovery</Link>
        <Link to="/code" className={styles["nav-button"]}>Code</Link>
        <Link to="/data" className={styles["nav-button"]}>Data</Link>
      </section>
    </main>
  )
}
export default Home;