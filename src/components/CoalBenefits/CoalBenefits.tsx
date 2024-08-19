import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";

const benefits = [
  "Выделяет жар при сгорании без открытого огня, дыма и копоти",
  "Зола, остающаяся после сгорания угля — органическое удобрение",
  "Экологичный и 100% натуральный продукт",
  "Высококачественный продукт из сырья северных территорий Беловежской пущи",
];

export const CoalBenefits: FC = () => {
  return (
    <section className={styles.coalBenefits}>
      <div className="container">
        <header className={styles.coalBenefits__header}>
          <h2>Преимущества древесного угля</h2>
        </header>
        <motion.ul
          className={styles.coalBenefits__list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit}
              className={styles.coalBenefits__item}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className={styles.coalBenefits__number}>
                <span>{index + 1}</span>
              </div>
              <p>{benefit}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
