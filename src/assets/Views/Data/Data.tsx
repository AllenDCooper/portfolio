import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './Data.module.css'

const projects_data = [
  {
    title: "Flight Tracker",
    url: "",
    shortDescription: "A dashboard I built for tracking activity, velocity, and other KPIs.",
    tags: [],
    description: "Uses API to scrape code repositories. (Imaginary data used for mock-up image.) ",
    imageSrc: "./assets/dashboard.png",
    width: "900px"
  }
]

const Data = () => {
  return (
    <section className={styles["data-container"]}>
      <h2 className="view-heading">Data</h2>
      {/* <p className="view-text">"You can't manage what you can't measure."</p> */}
      <p className="view-text">"You can't manage what you can't measure." Gathering a shared set of metrics can help build conensus and inform strategy. These are some of the ways I have gathered and used data to strengthen a technical program.</p>
      {projects_data.map(project => (
        <ProjectCard project={project} />
      ))}
    </section>
  )
}

export default Data;