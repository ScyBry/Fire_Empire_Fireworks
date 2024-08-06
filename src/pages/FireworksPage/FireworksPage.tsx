import React from "react";
import styles from "./styles.module.sass";
import { WorkCard } from "../../components/WorkCard/WorkCard.tsx";
import { works } from "../../constansts";
import Slider from "react-slick";

export const FireworksPage: React.FC = () => {
  let settings = {
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.worksPage}>
      <div className="container">
        <div className={styles.worksPage__title}>
          <h1>Наши работы</h1>
        </div>

        {/*<div className={styles.worksList}>*/}
        {/*  {works.map((work) => (*/}
        {/*    <WorkCard work={work} />*/}
        {/*  ))}*/}
        {/*</div>*/}

        <Slider {...settings}>
          {works.map((work) => (
            <WorkCard work={work} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
