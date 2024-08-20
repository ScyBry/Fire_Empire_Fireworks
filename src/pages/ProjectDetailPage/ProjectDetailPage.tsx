import { useParams } from "react-router-dom";
import styles from "./styles.module.sass";
import { works } from "../../constants";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const work = works.find((work) => work.id === Number(id));

  return (
    <section className={styles.workDetails}>
      <div className="container">
        <div className={styles.workDetailsWrapper}>
          <div className={styles.title}>
            <h2>{work?.title}</h2>
            <p>{work?.date}</p>
          </div>
          {work && (
            <LightGallery
              mode="lg-fade"
              pager={false}
              thumbnail={true}
              elementClassNames={styles.gallery}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              {work.media.map((image) => (
                <a key={image.src} href={image.src}>
                  <img
                    src={image.src}
                    alt={work.title}
                    className={styles.workImage}
                  />
                </a>
              ))}
            </LightGallery>
          )}
          <div className={styles.textContainer}>
            <p>{work?.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
