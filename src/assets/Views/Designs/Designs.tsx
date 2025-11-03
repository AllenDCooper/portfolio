import { useEffect, useState } from 'react';
import styles from './Designs.module.css';
import '../../../App.css';
import type { Concept } from '../../../types/concept.types';
import { useSearchParams } from 'react-router-dom';
import ConceptCard from '../../Components/ConceptCard/ConceptCard';

const projects_data = [
  {
    title: "Learning App",
    gif: "./assets/designs/learning-coachA.gif",
    shortDescription: "A concept for a textbook app",
    tags: [
      {
        text: "Prototype",
        link: ""
      }
    ],
    description: "Based on Deci & Ryan's theory of Self Determination Theory (SDT). Combines feature concepts to build competence, autonomy, and relatedness.",
    thumbnail: "./assets/designs/learning-coachA.png"
  },
  {
    title: "Stories",
    gif: "./assets/designs/learning-coach2.gif",
    shortDescription: "A multimedia visual storytelling concept for a psychology product",
    tags: [
      {
        text: "Prototype",
        link: ""
      }
    ],
    description: "Concept for an alternative approach to scrolling ebook.",
    thumbnail: "./assets/designs/learning-coach2.png"
  },
  {
    title: "Scrollytelling",
    gif: "./assets/designs/scrollytelling2.gif",
    shortDescription: "SVG image coded with scroll events",
    tags: [
      {
        text: "Prototype",
        link: ""
      }
    ],
    description: "",
    thumbnail: "./assets/designs/scrollytelling2.png"
  },
  {
    title: "Tabbed Figure 1",
    gif: "./assets/designs/tabbed-figure3.gif",
    shortDescription: "Map image dynamically controlled with UI inputs",
    tags: [
      {
        text: "Prototype",
        link: ""
      },
      {
        text: "Production",
        link: ""
      }
    ],
    description: "Transformed a static image to a dynamic, clickable figure",
    thumbnail: "./assets/designs/tabbed-figure3.png"
  },
  {
    title: "Tabbed Figure 2",
    gif: "./assets/designs/tabbed-figure_v2.gif",
    shortDescription: "Biology figure dynamically controlled with UI inputs",
    tags: [
      {
        text: "Prototype",
        link: ""
      }
    ],
    description: "Includes experimental scroll events to snap figure in viewport",
    thumbnail: "./assets/designs/tabbed-figure_v2.png"
  },
  {
    title: "Schematic Figure",
    gif: "./assets/designs/schematic-figure_v2-compressed.gif",
    shortDescription: "SVG cell figure events control css zoom/transform of detailed cell image",
    tags: [
      {
        text: "Prototype",
        link: ""
      }
    ],
    description: "Includes experimental scroll events to snap figure in viewport",
    thumbnail: "./assets/designs/schematic-figure_v2.png"
  },
  {
    title: "Sticky Scrolling",
    gif: "./assets/designs/sticky.gif",
    shortDescription: "CSS sticky scrolling solution to handle media with annotations",
    tags: [
      {
        text: "Prototype",
        link: ""
      },
      {
        text: "Production",
        link: ""
      }
    ],
    description: "",
    thumbnail: "./assets/designs/sticky.png"
  },
  {
    title: "Writing Activity",
    gif: "./assets/designs/writing-activity-ebook.gif",
    shortDescription: "Guided free-writing activities",
    tags: [
      {
        text: "Prototype",
        link: ""
      },
      {
        text: "Production",
        link: ""
      }
    ],
    description: "Data persistance, handled through local storage and postMessage API",
    thumbnail: "./assets/designs/writing-activity-ebook.png"
  }
]

const Designs = () => {

  const [searchParams] = useSearchParams();

  const getProject = (params: URLSearchParams) => {
    if (params && params.get("project")) {
      const projectName = params.get("project")
      console.log(projectName)
      const projectLookup = projects_data.filter(el => el.title.replaceAll(" ", "-") === projectName)[0] || null
      console.log(projectLookup)
      return (projectLookup)
    } else {
      return null
    }
  }

  const [openProject, setOpenProject] = useState<Concept | null>(getProject(searchParams))

  useEffect(() => {
    console.log(searchParams)
    setOpenProject(getProject(searchParams))
  }, [searchParams])

  const [previewProject, setPreviewProject] = useState<number | null>(null)

  return (
    <section className={styles["projects-container"]}>
      <h2 className="view-heading">Designs</h2>
      <p className="view-text">These are some of the design concepts I've developed at W. W. Norton & Company. Some of these are prototypes developed with content teams while others have progressed to production releases. Hover on or click into image to learn more.</p>
      {/* <p className="view-text">Most of these are microservices that are built into e-books and assessments.</p> */}
      {openProject ?
        <ConceptCard project={openProject} setOpenProject={setOpenProject} />
        :
        <div className={styles["project-tiles-container"]}>
          {projects_data.map((project, projectIndex) => (
            <div className={styles["project-tile"]}>
              <div className={styles["project-tile-content"]}>
                <h3 className={styles["project-tile-title"]} onClick={() => setOpenProject(project)}>{project.title}</h3>
                <img className={styles["project-thumbnail"]} src={previewProject && previewProject === projectIndex + 1 ? project.gif : project.thumbnail} onMouseOver={() => setPreviewProject(projectIndex + 1)} onMouseLeave={() => setPreviewProject(null)} onClick={() => setOpenProject(project)} />
              </div>
              <footer className={styles["tag-footer"]}>
                <p className={styles["project-tile-short-description"]}>{project.shortDescription}</p>
                <ul className={styles["tag-list"]}>
                  {project.tags.map(tag => (
                    tag.link ?
                      <li><a href={tag.link} target='_blank'>{tag.text}</a></li>
                      :
                      <li>{tag.text}</li>
                  ))}
                </ul>
              </footer>
            </div>
          ))}
        </div>
      }
    </section>
  )
}

export default Designs;