import { FC } from "react";
import { IWork } from "../../types";
import styles from "./styles.module.sass";
import Slider from "react-slick";
import { Button } from "../Button/Button.tsx";
import { NavLink } from "react-router-dom";

type WorkSliderProps = {
  work: IWork;
};

export const WorkCard: FC<WorkSliderProps> = ({ work }) => {
  let settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.work_item}>
      <div className={styles.work_item__slider}>
        <Slider {...settings}>
          {work.media.map((media) => (
            <img key={media.src} src={media.src} alt="img" />
          ))}
        </Slider>
      </div>
      <div className={styles.work_item__content}>
        <div>
          <h4>{work.title}</h4>
          <p>{work.text}</p>
          <NavLink to={`/workDetail/${work.id}`}>
            <Button text={"Подробнее"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
