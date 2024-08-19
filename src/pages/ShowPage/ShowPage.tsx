import { ShowItem } from "../../components/ShowItem/ShowItem";
import { showItems } from "../../constansts";
import styles from "./styles.module.sass";

export const ShowPage = () => {
  return (
    <section className={styles.show}>
      <div className="container">
        <header className={styles.show__header}>
          <h2>Организация шоу</h2>
        </header>

        <div className={styles.items__wrapper}>
          {showItems.map((item) => (
            <ShowItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
