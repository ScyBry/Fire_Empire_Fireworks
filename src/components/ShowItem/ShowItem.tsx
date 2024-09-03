import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";
import { IShowItem } from "../../types";

interface ShowItemProps {
  item: IShowItem;
}

export const ShowItem: FC<ShowItemProps> = ({ item }) => {
  const { imgSrc, subtitle, title, text } = item;

  return (
    <motion.article
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={styles.img__wrapper}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.text__wrapper}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  );
};
