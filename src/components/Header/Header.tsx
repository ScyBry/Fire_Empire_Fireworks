import { useState } from "react";
import styles from "./styles.module.sass";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import { Close, LocationOn, Menu, Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="/">
            <img src={Logo} alt="Лого" className={styles.logo} />
          </NavLink>

          <div className={styles.burgerMenu}>
            <IconButton onClick={toggleMenu}>
              {isMenuOpen ? (
                <Close fontSize="large" />
              ) : (
                <Menu fontSize="large" />
              )}
            </IconButton>
          </div>

          <nav
            className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ""}`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.link}
                className={`hover-underline-animation ${styles.navigation__link}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className={styles.contact__info}>
              <div className={styles.contact__item}>
                <LocationOn fontSize="small" />
                <p>Гродненская область, Берестовицкий р-н, д. Лесная</p>
              </div>
              <div className={styles.contact__item}>
                <Phone fontSize="small" />
                <p>8 (01511) 7-03-37</p>
              </div>
            </div>
          </nav>

          <div className={styles.contact__info}>
            <div className={styles.contact__item}>
              <LocationOn fontSize="small" />
              <p>Гродненская область, Берестовицкий р-н, д. Лесная</p>
            </div>
            <div className={styles.contact__item}>
              <Phone fontSize="small" />
              <p>8 (01511) 7-03-37</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
