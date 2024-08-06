import { NavLink } from "react-router-dom";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={"container"}>
        <header className={styles.hero__title}>
          <h3>
            Частное унитарное предприятие
            <br />
            «Империя Огня»
          </h3>
          <h1>ОРГАНИЗАЦИЯ ШОУ</h1>
        </header>
        <div className={styles.hero__subtitle}>
          <p>
            На любой праздник таких как день рождения, свадьба, корпоратив,
            <br />
            новый год, день города, любой городской праздник любого масштаба.
            <br />
            Организация мероприятий со спецэффектами по проекту заказчика!
            <br />
            Доступные цены! Огромный опыт работы!
          </p>
        </div>
        <div className={styles.button_group}>
          <NavLink to="/coal">
            <Button>ШОУ</Button>
          </NavLink>
          <div className={styles.divider}></div>
          <NavLink to="/coal">
            <Button>УГОЛЬ</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
