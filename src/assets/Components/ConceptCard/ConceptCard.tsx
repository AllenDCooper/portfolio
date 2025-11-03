import styles from './ConceptCard.module.css';
import type { Concept } from '../../../types/concept.types';
import { useState, type Dispatch, type SetStateAction } from 'react';

interface reactProps {
  project: Concept,
  setOpenProject?: Dispatch<SetStateAction<Concept | null>>
}

const ConceptCard = ({ project, setOpenProject }: reactProps) => {

  console.log(project)
  // const DEFAULT_WIDTH = "728px";
  // const DEFAULT_MAX_WIDTH = "100vw";
  const DEFAULT_HEIGHT = "600px";

  const [curImage, setCurImage] = useState<number>(0)

  const handleImageChange = (index: number, direction: "previous" | "next") => {
    if (direction === "previous" && index === 0) {
      setCurImage(0)
    } else if (direction === "next" && index + 1 === project.thumbnail.length) {
      setCurImage(project.thumbnail.length)
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
          <button className={styles["back-btn"]} onClick={() => setOpenProject(null)}>Back to List of Designs</button>
        </header>
        :
        null}
      <div className={styles["project-card-container"]}>
        <div className={styles["project-card-info-wrapper"]}>
          <p className={styles["project-card-title"]}>{project.title}</p>
          <p className={styles["project-card-short-description"]}>{project.shortDescription}</p>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        {project.gif ?
          <img src={project.gif}
            style={{ width: project.width || "auto", height: project.height || DEFAULT_HEIGHT, border: "none", boxShadow: "none", backgroundColor: "transparent", marginLeft: project.marginLeft || "36px" }}
          />
          :
          Array.isArray(project.gif) && project.gif.length > 1 ?
            <div>
              {project.gif.map((img, imgIndex) => (
                typeof img === "string" ?
                  <div className={styles["img-carousel-wrapper"]} hidden={imgIndex !== curImage}>
                    <button className={styles["img-carousel-back-btn"]} onClick={() => handleImageChange(imgIndex, "previous")} hidden={imgIndex === 0}>
                      <span className="material-symbols-outlined">
                        arrow_back_ios
                      </span>
                    </button>
                    <img style={{ width: project.width || "auto" }} src={img} />
                    <button className={styles["img-carousel-next-btn"]} onClick={() => handleImageChange(imgIndex, "next")} hidden={imgIndex + 1 === project.thumbnail.length}>
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
                    <button className={styles["img-carousel-next-btn"]} onClick={() => handleImageChange(imgIndex, "next")} hidden={imgIndex + 1 === project.thumbnail.length}>
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </button>
                  </div>
              ))}
            </div>
            :
            typeof project.gif === "string" ?
              <img style={{ width: project.width || "auto" }} src={project.gif} />
              :
              null
        }
      </div>
    </>
  )
}

export default ConceptCard