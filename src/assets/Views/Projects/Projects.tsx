import { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import '../../../App.css';
import type { Project } from '../../../types/project.types';

const projects_data = [
  {
    title: "tabbed figure",
    url: "https://tabbed-figure-499308.gitlab.io/index.html#example/demo",
    shortDescription: "breaks down a chart, step by step, to help students better visualize, understand, and interpret a dataset",
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
    description: "",
    imageSrc: "./assets/tabbed-figure.png"
  },
  {
    title: "schematic figure",
    url: "https://schematic-figure-bb507a.gitlab.io/index.html#ecb7/ch11-m5",
    shortDescription: "provides a click-through exploration of a conceptual model, to help students better synthesize the workings of a system",
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
    description: "",
    imageSrc: "./assets/schematic-figure.png"
  },
  {
    title: "annotated audio player",
    url: "https://ilg.wwnorton.com/v2/enjmusic5ess/bachlittlefugue/interact",
    shortDescription: "an audio player with time-stamped annotations, allowing students to develop a deeper appreciation for the musical piece",
    tags: [
      {
        text: "React Javascript",
        link: "https://vite.dev/"
      },
      {
        text: "Norton Design System",
        link: "https://wwnorton.github.io/design-system/"
      }
    ],
    description: "",
    imageSrc: "./assets/annotated-audio.png"

  },
  {
    title: "annotated video player",
    url: "https://dkgmu2qb4qojy.cloudfront.net/index.html#/nfgspeaking2/nsf_1.1_Thunberg",
    shortDescription: "a video player with time-stamped annotations allowing students to better understand the elements of effective communication",
    tags: [
      {
        text: "React Javascript",
        link: "https://vite.dev/"
      },
      {
        text: "Norton Design System",
        link: "https://wwnorton.github.io/design-system/"
      }
    ],
    description: "",
    height: "800px",
    imageSrc: "./assets/annotated-video.png"
  },
  {
    title: "branching interactive",
    url: "https://dhxuep8cf6tfj.cloudfront.net/index.html#/examples/template?preview=on",
    shortDescription: "delivers personalized follow-up questions to help students reflect on their thinking",
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
    description: "",
    width: "800px",
    marginLeft: "0px",
    imageSrc: "./assets/panel-interactive.png"
  },
  {
    title: "writing interactive",
    url: "https://d13b7vh8ooopw0.cloudfront.net/index.html#/example/demo?preview=on",
    shortDescription: "guided free-writing activities that help students build confidence as writers through repeated practice",
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
    description: "",
    width: "800px",
    marginLeft: "0px",
    imageSrc: "./assets/writing-activity.png"
  },
  {
    title: "math formula",
    url: "https://equation-converter-666653.gitlab.io/",
    shortDescription: "a kit for converting formulas created in Microsoft Word using Equation Editor to MathML (web standard for accessibility and usability)",
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
    description: "",
    width: "800px",
    marginLeft: "0px",
    imageSrc: "./assets/math-converter.png"
  },
  {
    title: "graphing model",
    url: "https://main.d2f8ifo7jr8kf0.amplifyapp.com/#/exponential",
    shortDescription: "dynamic data visualizations that help students better understand a complex model",
    tags: [
      {
        text: "React Javascript",
        link: "https://vite.dev/"
      },
      {
        text: "Norton Design System",
        link: "https://wwnorton.github.io/design-system/"
      }
    ],
    description: "",
    width: "1200px",
    // height: "800px",
    imageSrc: "./assets/ecology-population-model.png"
  },
  {
    title: "ebook",
    url: "https://ebook-4a7c0f.gitlab.io/index.html#example",
    shortDescription: "a prototyping toolkit for editors to develop fast and inexpensive mock-ups of experimental ebook content and designs",
    tags: [
      {
        text: "React Typescript",
        link: "https://vite.dev/"
      },
      {
        text: "MDX",
        link: "https://mdxjs.com/"
      },
      {
        text: "Norton Design System",
        link: "https://wwnorton.github.io/design-system/"
      }
    ],
    description: "",
    width: "1200px",
    allowScroll: true,
    // height: "800px",
    imageSrc: "./assets/ebook.png"
  },
]

const Projects = () => {

  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <section className={styles["projects-container"]}>
      <h2 className="view-heading">Code</h2>
      <p className="view-text">These are some of the software development kits (SDKs) I've developed at W. W. Norton & Company. These kits are vital building blocks for engaging readers and powering digital books that live. Over 400 interactives have been built and released with these kits.</p>
      {/* <p className="view-text">Most of these are microservices that are built into e-books and assessments.</p> */}
      {openProject ?
        <ProjectCard project={openProject} setOpenProject={setOpenProject} />
        :
        <div className={styles["project-tiles-container"]}>
          {projects_data.map(project => (
            <div className={styles["project-tile"]}>
              <div className={styles["project-tile-content"]}>
                <h3 className={styles["project-tile-title"]} onClick={() => setOpenProject(project)}>{project.title}</h3>
                <img className={styles["project-thumbnail"]} src={project.imageSrc} onClick={() => setOpenProject(project)} />
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

export default Projects;