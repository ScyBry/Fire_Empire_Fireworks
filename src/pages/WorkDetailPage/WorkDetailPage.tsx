import { useParams } from "react-router-dom";
import styles from "./styles.module.sass";
import { works } from "../../constansts";
import Slider from "react-slick";

export const WorkDetailPage = () => {
  const { id } = useParams();
  const work = works.find((work) => work.id === Number(id));

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.workDetails}>
      <div className="container">
        <div className={styles.workDetailes__wrapper}>
          <div className={styles.title}>
            <h2>{work?.title}</h2>
            <p>{work?.date}</p>
          </div>
          <Slider {...settings}>
            {work?.media.map((img) => (
              <img key={img.src} src={img.src} alt="img" />
            ))}
          </Slider>
          <div className={styles.text__container}>
            <p>{work?.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
