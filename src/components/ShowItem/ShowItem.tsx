import { FC } from "react";
import styles from "./styles.module.sass";

import { IShowItem } from "../../types";

interface ShowItemProps {
  item: IShowItem;
}

export const ShowItem: FC<ShowItemProps> = ({ item }) => {
  const { imgSrc, subtitle, title, text } = item;

  return (
    <div className={styles.item}>
      <div className={styles.img__wrapper}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.text__wrapper}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
