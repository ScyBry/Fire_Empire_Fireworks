import { useParams } from "react-router-dom";
import styles from "./styles.module.sass";
import { works } from "../../constansts";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const work = works.find((work) => work.id === Number(id));

  return (
    <section className={styles.workDetails}>
      <div className="container">
        <div className={styles.workDetailes__wrapper}>
          <div className={styles.title}>
            <h2>{work?.title}</h2>
            <p>{work?.date}</p>
          </div>
          {work && <img src={work?.media[0].src} alt="work" />}

          {/* 
          <Slider {...settings}>
            {work?.media.map((img) => (
              <img key={img.src} src={img.src} alt="img" />
            ))}
          </Slider> */}

          <div className={styles.text__container}>
            <p>{work?.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
