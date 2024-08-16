import React from "react";
import styles from "./styles.module.sass";
import { works } from "../../constansts";
import { WorkCard } from "../../components/WorkCard/WorkCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const ProjectsPage: React.FC = () => {
  return (
    <section className={styles.fireworks}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className={styles.works__container}
        >
          {works.map((work) => (
            <WorkCard variant={item} key={work.id} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};