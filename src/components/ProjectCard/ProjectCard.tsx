import { FC } from "react";
import { IWork } from "../../types";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface WorkSliderProps {
  work: IWork;
  variant: Variants;
}

export const ProjectCard: FC<WorkSliderProps> = ({ work, variant }) => {
  return (
    <motion.div variants={variant}>
      <NavLink to={`/workDetail/${work.id}`}>
        <div className={styles.workItem}>
          <div className={styles.imgContainer}>
            <img src={work.media[0].src} alt={work.title} />
            <div className={styles.imgOverlay}>
              <NavLink to={`/workDetail/${work.id}`}>
                <Button>Подробнее</Button>
              </NavLink>
            </div>
          </div>
          <div className={styles.itemText}>
            <h3 className={styles.workTitle}>{work.title}</h3>
            <p className={styles.workDate}>Дата: {work.date}</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};
