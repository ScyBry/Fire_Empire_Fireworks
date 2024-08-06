import { LocationOn, Phone } from "@mui/icons-material";
import styles from "./styles.module.sass";
import EmailIcon from "@mui/icons-material/Email";

export const MapInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__wrapper}>
        <div>
          <h5>АДРЕС</h5>
          <div className={styles.info__item}>
            <LocationOn fontSize="small" />
            <p>Гродненская область, Берестовицкий р-н, д. Лесная</p>
          </div>
        </div>
        <div>
          <h5>ТЕЛЕФОНЫ</h5>
          <div className={styles.info__item}>
            <Phone fontSize="small" />
            <a href="tel:8 (01511) 7-03-37">8 (01511) 7-03-37</a>
          </div>
          <div className={styles.info__item}>
            <Phone fontSize="small" />
            <a href="tel:+375(33)377-36-43">+375 (33) 377-36-43</a>
          </div>
        </div>
        <div>
          <h5>EMAIL</h5>
          <div className={styles.info__item}>
            <EmailIcon fontSize="small" />
            <a href="mailto:fireempire@mail.ru">fireempire@mail.ru</a>
          </div>
        </div>
      </div>
    </div>
  );
};
