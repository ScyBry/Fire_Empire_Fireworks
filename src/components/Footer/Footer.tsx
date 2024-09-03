import { FC } from "react";
import styles from "./styles.module.sass";
import logo from "../../assets/logo.png";
import clock_icon from "../../assets/icons/clock-icon.svg";
import smartphone_icon from "../../assets/icons/smartphone-icon.svg";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.logo__wrapper}>
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <p>Империя огня</p>
          </div>
          <div className={styles.navlinks__wrapper}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.link}
                className={({ isActive }) =>
                  `hover-underline-animation ${isActive ? "activeLink" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.number__wrapper}>
            <div className={styles.number__item}>
              <img src={clock_icon} alt="clock_icon" />
              <p>Пн-Пт с 8.00-17.00</p>
            </div>
            <div className={styles.number__item}>
              <img src={smartphone_icon} alt="smartphone_icon" />
              <a href="tel:+375(33) 377-36-43">+375(33) 377-36-43</a>
            </div>
            <div className={styles.number__item}>
              <a href="tel:8 (01511) 7-03-37">8 (01511) 7-03-37</a>
            </div>
          </div>
          <SocialLinks />
          <div className={styles.contacts__wrapper}>
            <a href="mailto:fireempire@mail.ru">fireempire@mail.ru</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
