import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";
import { Button } from "../../Button/Button.tsx";

interface CoalProductCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
  handleModal: () => void;
}

export const CoalProductCard: FC<CoalProductCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  reverse = false,
  handleModal,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.coalProduct} ${reverse ? styles.reverseOrder : ""}`}
    >
      <div className={styles.coalProduct__image}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.coalProduct__details}>
        <h3 className={styles.coalProduct__title}>{title}</h3>
        <div className={styles.coalProduct__description}>
          {description.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <Button onClick={handleModal}>Заказать</Button>
      </div>
    </motion.article>
  );
};
