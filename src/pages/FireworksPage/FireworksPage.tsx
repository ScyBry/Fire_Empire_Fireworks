import React from "react";
import styles from "./styles.module.sass";
import { works } from "../../constansts";
import { WorkCard } from "../../components/WorkCard/WorkCard";

export const FireworksPage: React.FC = () => {
  return (
    <section className={styles.fireworks}>
      <div className="container">
        <div className={styles.works__container}>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};
