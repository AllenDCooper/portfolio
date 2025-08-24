import IframeResizer from 'iframe-resizer-react';
import styles from './ProjectCard.module.css';
import type { Project } from '../../../types/project.types';
import type { Dispatch, SetStateAction } from 'react';

interface reactProps {
  project: Project,
  setOpenProject: Dispatch<SetStateAction<Project | null>>
}

const ProjectCard = ({ project, setOpenProject }: reactProps) => {

  const DEFAULT_WIDTH = "728px";
  const DEFAULT_MAX_WIDTH = "100vw";
  const DEFAULT_HEIGHT = "680px";

  return (
    <>
      <header><button onClick={() => setOpenProject(null)}>Back to Projects</button></header>
      <div className={styles["project-card-container"]}>
        <div className={styles["project-card-info-wrapper"]}>
          <p>{project.title}</p>
          <p>{project.description}</p>
        </div>
        <IframeResizer
          src={project.url}
          scrolling={project.allowScroll}
          style={{ width: project.width || DEFAULT_WIDTH, maxWidth: DEFAULT_MAX_WIDTH, height: project.height || DEFAULT_HEIGHT, border: "none", boxShadow: "none", backgroundColor: "transparent", marginLeft: project.marginLeft || "36px" }}
        />
      </div>
    </>
  )
}

export default ProjectCard