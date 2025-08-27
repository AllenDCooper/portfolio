import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './Innovation.module.css';

const projects_data = [
  {
    title: "Development Matters",
    url: "",
    shortDescription: "Winner, first prize, Macmillan Learning Innovation Tournament, 2021",
    tags: [],
    description: "<p>It all began with a simple conversation with a customer and resulted in a valuable new process for our organization.</p><blockquote class='blockquote'><p>It’s a conversation that continues here today, with me and with you...</p><p>About a new kind of relationship with our customers, made possible by a new kind of development process, one that is:</p><p>not privileged, but public.</p><p>not political, but pedagogical.</p><p>not performative, but restorative.</p><p>not perfect, but progress.</p></blockquote><p>The political conversation has evolved on this topic since 2018, but what's important is the longstanding importance of customer focus as an aspect of quality management.</p><p>Explore the documenting of this project at: <a href='https://www.macmillanlearning.com/college/us/content/developmentmatters' target='_blank'>Development Matters</a></p>",
    imageSrc: [{ type: "video", source: "./assets/Innovation_Video.mp4", poster: "./assets/innovation-1_poster.png" }, { type: "embed", source: "https://docs.google.com/document/d/e/2PACX-1vSRhLwdFygyxx1uatnuM2WJefVLRh577aCJgOHprOAuwNDAtd3CW7naiJ4a5pH9Iu_mzm8x0kDPwuVm/pub?embedded=true" }, { type: "embed", source: "https://www.youtube.com/embed/4ccMvTKRmJ8?si=8Rk5i5fueGf8uxIN" }],
    width: ""
  }
]

const Innovation = () => {
  return (
    <section className={styles["innovation-container"]}>
      <h2 className="view-heading">Innovation</h2>
      <p className="view-text"></p>
      {projects_data.map(project => (
        <ProjectCard project={project} />
      ))}

    </section>
  )
}

export default Innovation;