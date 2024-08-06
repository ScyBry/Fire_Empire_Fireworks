import { CoalProductsItem } from "./CoalProductsItem/CoalProductsItem.tsx";
import styles from "./styles.module.sass";

export const CoalProducts = () => {
  return (
    <section className={styles.coalproducts}>
      <div className="container">
        <div>
          <CoalProductsItem />
        </div>
      </div>
    </section>
  );
};
