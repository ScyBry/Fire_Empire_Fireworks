import { FC } from "react";
import styles from "./styles.module.sass";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.pageTitle}>
      <h2>{title}</h2>
    </div>
  );
};
