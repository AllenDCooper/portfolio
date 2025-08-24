import { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import type { Project } from '../../../types/project.types';

const projects_data = [
  {
    title: "tabbed figure",
    url: "https://tabbed-figure-499308.gitlab.io/index.html#example/demo",
    description: "lorem ipsum",
    imageSrc: "./assets/tabbed-figure.png"
  },
  {
    title: "schematic figure",
    url: "https://schematic-figure-bb507a.gitlab.io/index.html#ecb7/ch11-m5",
    description: "lorem ipsum",
    imageSrc: "./assets/schematic-figure.png"
  },
  {
    title: "annotated audio player",
    url: "https://ilg.wwnorton.com/v2/enjmusic5ess/bachlittlefugue/interact",
    description: "lorem ipsum",
    imageSrc: "./assets/annotated-audio.png"

  },
  {
    title: "annotated video player",
    url: "https://dkgmu2qb4qojy.cloudfront.net/index.html#/nfgspeaking2/nsf_1.1_Thunberg",
    description: "lorem ipsum",
    height: "800px",
    imageSrc: "./assets/annotated-video.png"
  },
  {
    title: "branching interactive",
    url: "https://dhxuep8cf6tfj.cloudfront.net/index.html#/examples/template?preview=on",
    description: "lorem ipsum",
    width: "800px",
    marginLeft: "0px",
    imageSrc: "./assets/panel-interactive.png"
  },
  {
    title: "writing interactive",
    url: "https://d13b7vh8ooopw0.cloudfront.net/index.html#/example/demo?preview=on",
    description: "lorem ipsum",
    width: "800px",
    marginLeft: "0px",
    imageSrc: "./assets/writing-activity.png"
  },
  {
    title: "graphing model",
    url: "https://main.d2f8ifo7jr8kf0.amplifyapp.com/#/exponential",
    description: "lorem ipsum",
    width: "1200px",
    // height: "800px",
    imageSrc: "./assets/ecology-population-model.png"
  },
  {
    title: "ebook",
    url: "https://ebook-4a7c0f.gitlab.io/index.html#example",
    description: "lorem ipsum",
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
      <h2>Projects</h2>
      {openProject ?
        <ProjectCard project={openProject} setOpenProject={setOpenProject} />
        :
        <div className={styles["project-tiles-container"]}>
          {projects_data.map(project => (
            <div className={styles["project-tile"]} onClick={() => setOpenProject(project)}>
              <h3 className={styles["project-tile-title"]}>{project.title}</h3>
              <img className={styles["project-thumbnail"]} src={project.imageSrc} />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      }
    </section>
  )
}

export default Projects;