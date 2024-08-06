import styles from "./styles.module.sass";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constansts";
import { Phone, LocationOn } from "@mui/icons-material";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <NavLink to={"/"}>
              <img src={Logo} alt="Лого" />
            </NavLink>
            <nav className={styles.header__nav}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.link}
                  className={styles.navLink}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className={styles.contacts__wrapper}>
            <div className={styles.contacts__item}>
              <LocationOn fontSize="small" />
              <p>Гродненская область, Берестовицкий р-н, д. Лесная</p>
            </div>
            <div className={styles.contacts__item}>
              <Phone fontSize="small" />
              <p>8 (01511) 7-03-37</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
