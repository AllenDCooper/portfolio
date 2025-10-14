import styles from './Discovery.module.css';
import '../../../App.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const projects_data = [
  {
    title: "The Digital Development Studio",
    url: "",
    shortDescription: "Implement best practices, compliance checks, and risks mitigation activities for hundreds of digital projects.",
    tags: [],
    description: "This is a center of excellence (CoE) I founded with five other key stakeholders to improve governance of digital publishing program.",
    imageSrc: ["./assets/flight-cycle.png", "./assets/dds.png", "./assets/dds-2.png"],
    width: "900px"
  },
  {
    title: "Discovery Checklist",
    url: "",
    shortDescription: "Best practices for product development",
    tags: [],
    description: "Inspired by Atul Gawande's <a href='https://atulgawande.com/book/the-checklist-manifesto/' target='_blank'><em>The Checklist Manifesto</em></a>.",
    imageSrc: "./assets/Preflight_Checklist.png",
    width: "900px"
  },
  {
    title: "Product Funnel",
    url: "",
    shortDescription: "A visual representation of product development",
    tags: [
      {
        text: "React Typescript",
        link: "https://vite.dev/"
      },
      {
        text: "Norton Design System",
        link: "https://wwnorton.github.io/design-system/"
      }
    ],
    description: "Continuous discovery + continuous delivery = successful products",
    imageSrc: "./assets/Digital_Development_Funnel.png",
    width: "900px"
  }
]

const Discovery = () => {
  return (
    <section className={styles["discovery-container"]}>
      <h2 className="view-heading">Discovery</h2>
      <p className="view-text">In my experience, teams are able to use technology well when they align it to a well-defined customer problem. These are some of the resources I have developed to discover good technical solutions (and pivot away from poor ones).</p>
      {projects_data.map(project => (
        <ProjectCard project={project} />
      ))}
    </section>
  )
}

export default Discovery;