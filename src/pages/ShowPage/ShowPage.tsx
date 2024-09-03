import { ShowItem } from "../../components/ShowItem/ShowItem";
import { showItems } from "../../constants";
import styles from "./styles.module.sass";
import { PageTitle } from "../../components/PageTitle/PageTitle.tsx";

export const ShowPage = () => {
  return (
    <section className={styles.show}>
      <div className="container">
        <PageTitle title="Организация пиротехнического шоу" />

        <div className={styles.items__wrapper}>
          {showItems.map((item) => (
            <ShowItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
