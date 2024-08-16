import { FC } from "react";
import { IWork } from "../../types";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button.tsx";
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

type WorkSliderProps = {
  work: IWork;
  variant: Variants;
};

export const WorkCard: FC<WorkSliderProps> = ({ work, variant }) => {
  return (
    <motion.div variants={variant}>
      <NavLink to={`/workDetail/${work.id}`}>
        <div className={styles.work_item}>
          <div className={styles.img__container}>
            <img src={work.media[0].src} alt={work.title} />
            <div className={styles.img__overlay}>
              <NavLink to={`/workDetail/${work.id}`}>
                <Button>Подробнее</Button>
              </NavLink>
            </div>
          </div>

          <div className={styles.item__text}>
            <h3 className={styles.work_title}>{work.title}</h3>
            <p className={styles.work_date}>ДАТА: {work.date}</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};
