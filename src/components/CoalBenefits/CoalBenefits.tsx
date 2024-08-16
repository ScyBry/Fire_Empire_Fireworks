import styles from "./styles.module.sass";

const benefits = [
  "Выделяет жар при сгорании без открытого огня, дыма и копоти",
  "Зола, остающаяся после сгорания угля — органическое удобрение",
  "Экологичный и 100% натуральный продукт",
  "Высококачественный продукт из сырья северных территорий Беловежской пущи",
];

export const CoalBenefits = () => {
  return (
    <section className={styles.coalBenefits}>
      <div className="container">
        <header className={styles.coalBenefits__header}>
          <h2>Преимущества древесного угля</h2>
        </header>
        <ul className={styles.coalBenefits__list}>
          {benefits.map((benefit, index) => (
            <li key={benefit} className={styles.coalBenefits__item}>
              <div className={styles.coalBenefits__number}>
                <span>{index + 1}</span>
              </div>
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
