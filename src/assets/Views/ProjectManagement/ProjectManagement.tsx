
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './ProjectManagement.module.css';


const projects_data = [
  {
    title: "Smartsheet tracking for interactives",
    url: "",
    shortDescription: "Built and managed a kanban board and Gantt tracking system for interactives projects at W. W. Norton ",
    tags: [],
    description: "<p>At W. W. Norton, interactives are an essential dependency of the Norton Illumine Ebook and often the bottleneck in production. To alleviate this, I created a project tracking system to manage interactives through their development. A kanban board allowed us to assign developers/coaches in a given sprint within an agile model. A Gantt report allowed us to track how development was comparing against the overall book schedule to help meet our waterfall project goals.</p>",
    imageSrc: ["./assets/kanban.png", "./assets/project-log.png", "./assets/gantt.png", "./assets/interactive-michum.gif"],
    width: ""
  },
  {
    title: "JIRA epics for textbook programs",
    url: "",
    shortDescription: "Utilized JIRA tickets to manage complicated textbook projects often 1-3 years at Macmillan Learning",
    tags: [],
    description: "<p>At Macmillan Learning, I managed a a number of large textbook projects (print and digital) in the communication and college success disciplines throughout the entire lifecycle: market research, opportunity selection, definining requirements/acceptance criteria, delivery, acceptance testing, maintanence, and retirement. All of this was tracked using Jira tickets, organized into epics.</p>",
    imageSrc: ["./assets/ebook-cs.png", "./assets/lc.png", "./assets/los.png", "./assets/aces.png"],
    width: "400px"
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