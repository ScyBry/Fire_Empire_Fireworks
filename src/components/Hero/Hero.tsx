import { NavLink } from "react-router-dom";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={"container"}>
        <header className={styles.hero__header}>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Частное унитарное предприятие
            <br />
            «Империя Огня»
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ОРГАНИЗАЦИЯ ШОУ
          </motion.h1>
        </header>
        <motion.div
          className={styles.hero__description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>
            На любой праздник таких как день рождения, свадьба, корпоратив,
            <br />
            новый год, день города, любой городской праздник любого масштаба.
            <br />
            Организация мероприятий со спецэффектами по проекту заказчика!
            <br />
            Доступные цены! Огромный опыт работы!
          </p>
        </motion.div>
        <motion.div
          className={styles.hero__actions}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <NavLink to="/shows">
            <Button>ШОУ</Button>
          </NavLink>
          <div className={styles.hero__divider}></div>
          <NavLink to="/coal">
            <Button>УГОЛЬ</Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};
