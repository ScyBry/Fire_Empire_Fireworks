import { motion } from "framer-motion";
import styles from "./styles.module.sass";

export const AboutCompany = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.about}>
      <div className="container">
        <motion.div
          className={styles.about__wrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={textVariants}>О компании</motion.h2>
          <motion.p variants={textVariants}>
            Основным направлением деятельности компании является организация,
            обеспечение и проведение пиротехнических шоу постановок, создание
            неповторимых огненных представлений, способных удовлетворить вкусы
            самых требовательных заказчиков; популяризация фейерверков,
            сценических представлений, пиротехнических шоу на водной глади,
            информирование о традициях, истории, достижениях, событиях в этой
            области.
          </motion.p>
          <motion.p variants={textVariants}>
            Также наша компания выпускает широкий ассортимент угля (березовый,
            дубовый, фруктовый). Высококачественный продукт из экологически
            чистого сырья северных территорий Беловежской пущи. Производство
            соответствует установленным ТУ и ГОСТам. Продукт в экономичной
            стандартной упаковке. Вы можете купить древесный уголь под заказ с
            доставкой или самовывозом.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
