
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './ProjectManagement.module.css';


const projects_data = [
  {
    title: "Smartsheet tracking for interactives",
    url: "",
    shortDescription: "Built and managed a kanban board and Gantt tracking system for interactives projects ",
    tags: [],
    description: "<p>At W. W. Norton, interactives are an essential dependency of the Norton Illumine Ebook and often the bottleneck in production. To alleviate this, I created a project tracking system to manage interactives through their development. A kanban board allowed us to assign developers/coaches to items. A Gantt report allowed us to track how development was comparing against the overall book schedule.</p>",
    imageSrc: ["./assets/kanban.png", "./assets/project-log.png", "./assets/gantt.png"],
    width: ""
  }
]

const ProjectManagement = () => {
  return (
    <section className={styles["innovation-container"]}>
      <h2 className="view-heading">Project Management</h2>
      <p className="view-text">These are some of the ways I have managed complex projects.</p>
      {projects_data.map(project => (
        <ProjectCard project={project} />
      ))}

    </section>
  )

}

export default ProjectManagement;