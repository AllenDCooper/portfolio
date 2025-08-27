import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles["contact-container"]}>
      <h2 className="view-heading">Contact</h2>
      <p className="view-text">I'd love to hear from you! Message/connect with me on <a href='https://www.linkedin.com/in/allendcooper/' target='_blank'>LinkedIn</a>.</p>
    </section>
  )
}

export default Contact;