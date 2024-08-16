import styles from "./styles.module.sass";

export const ShowPage = () => {
  return (
    <section className={styles.show}>
      <div className="container">
        <div className={styles.show__header}>
          <h2>Организация шоу</h2>
        </div>
      </div>
    </section>
  );
};
