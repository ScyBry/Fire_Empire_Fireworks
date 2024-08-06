import styles from "./styles.module.sass";

const benefits = [
  "Выделяет жар при сгорании без открытого огня, дыма и копоти",
  "Зола, остающаяся после сгорания угля — органическое удобрение",
  "Экологичный и 100% натуральный продукт",
  "Высококачественный продукт из сырья северных территорий Беловежской пущи",
];

export const CoalBenefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <header className={styles.benefits__header}>
          <h2>Преимущества древесного угля</h2>
        </header>
        <div className={styles.benefits__list}>
          {benefits.map((benefit, index) => (
            <article key={index} className={styles.benefits__item}>
              <div className={styles.item__number}>
                <span>{index + 1}</span>
              </div>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
