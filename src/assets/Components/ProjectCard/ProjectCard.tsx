import IframeResizer from 'iframe-resizer-react';
import styles from './ProjectCard.module.css';
import type { Project } from '../../../types/project.types';
import type { Dispatch, SetStateAction } from 'react';

interface reactProps {
  project: Project,
  setOpenProject?: Dispatch<SetStateAction<Project | null>>
}

const ProjectCard = ({ project, setOpenProject }: reactProps) => {

  console.log(project)
  const DEFAULT_WIDTH = "728px";
  const DEFAULT_MAX_WIDTH = "100vw";
  const DEFAULT_HEIGHT = "680px";

  return (
    <>
      {setOpenProject ?
        <header className={styles["back-btn-header"]}>
          <button className={styles["back-btn"]} onClick={() => setOpenProject(null)}>Back to List of Coding Projects</button>
        </header>
        :
        null}
      <div className={styles["project-card-container"]}>
        <div className={styles["project-card-info-wrapper"]}>
          <p className={styles["project-card-title"]}>{project.title}</p>
          <p className={styles["project-card-short-description"]}>{project.shortDescription}</p>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        {project.url ?
          <IframeResizer
            src={project.url}
            scrolling={project.allowScroll}
            style={{ width: project.width || DEFAULT_WIDTH, maxWidth: DEFAULT_MAX_WIDTH, height: project.height || DEFAULT_HEIGHT, border: "none", boxShadow: "none", backgroundColor: "transparent", marginLeft: project.marginLeft || "36px" }}
          />
          :
          <img style={{ width: project.width || "auto" }} src={project.imageSrc} />
        }
      </div>
    </>
  )
}

export default ProjectCard