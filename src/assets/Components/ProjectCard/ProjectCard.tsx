import IframeResizer from 'iframe-resizer-react';
import styles from './ProjectCard.module.css';
import type { Project } from '../../../types/project.types';
import { useState, type Dispatch, type SetStateAction } from 'react';

interface reactProps {
  project: Project,
  setOpenProject?: Dispatch<SetStateAction<Project | null>>
}

const ProjectCard = ({ project, setOpenProject }: reactProps) => {

  console.log(project)
  const DEFAULT_WIDTH = "728px";
  const DEFAULT_MAX_WIDTH = "100vw";
  const DEFAULT_HEIGHT = "680px";

  const [curImage, setCurImage] = useState<number>(0)

  const handleImageChange = (index: number, direction: "previous" | "next") => {
    if (direction === "previous" && index === 0) {
      setCurImage(0)
    } else if (direction === "next" && index + 1 === project.imageSrc.length) {
      setCurImage(project.imageSrc.length)
    } else if (direction === "next") {
      setCurImage(prevState => prevState + 1)
    } else if (direction === "previous") {
      setCurImage(prevState => prevState - 1)
    }
  }

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
          Array.isArray(project.imageSrc) && project.imageSrc.length > 1 ?
            <div>
              {project.imageSrc.map((img, imgIndex) => (
                typeof img === "string" ?
                  <div className={styles["img-carousel-wrapper"]} hidden={imgIndex !== curImage}>
                    <button className={styles["img-carousel-back-btn"]} onClick={() => handleImageChange(imgIndex, "previous")} hidden={imgIndex === 0}>
                      <span className="material-symbols-outlined">
                        arrow_back_ios
                      </span>
                    </button>
                    <img style={{ width: project.width || "auto" }} src={img} />
                    <button className={styles["img-carousel-next-btn"]} onClick={() => handleImageChange(imgIndex, "next")} hidden={imgIndex + 1 === project.imageSrc.length}>
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </button>
                  </div>
                  :
                  <div className={styles["img-carousel-wrapper"]} hidden={imgIndex !== curImage}>
                    <button className={styles["img-carousel-back-btn"]} onClick={() => handleImageChange(imgIndex, "previous")} hidden={imgIndex === 0}>
                      <span className="material-symbols-outlined">
                        arrow_back_ios
                      </span>
                    </button>
                    <div style={{ width: project.width || "auto" }}>
                      {img.type === "embed" ?
                        <iframe width="100%" height="420px" src={img.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        :
                        <video
                          poster={img.poster ? img.poster : ""}
                          style={{ width: project.width || "100%", height: "420px" }} controls>
                          <source src={img.source} />
                        </video>
                      }
                    </div>
                    <button className={styles["img-carousel-next-btn"]} onClick={() => handleImageChange(imgIndex, "next")} hidden={imgIndex + 1 === project.imageSrc.length}>
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </button>
                  </div>
              ))}
            </div>
            :
            typeof project.imageSrc === "string" ?
              <img style={{ width: project.width || "auto" }} src={project.imageSrc} />
              :
              null
        }
      </div>
    </>
  )
}

export default ProjectCard