import styles from "./styles.module.sass";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constansts";
import { Phone, LocationOn } from "@mui/icons-material";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__branding}>
            <NavLink to="/">
              <img src={Logo} alt="Лого" className={styles.logo} />
            </NavLink>
            <nav className={styles.navigation}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.link}
                  className={`hover-underline-animation ${styles.navigation__link}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
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
