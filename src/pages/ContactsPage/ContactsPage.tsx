import { ContactForm } from "../../components/ContactForm/ContactForm";
import styles from "./styles.module.sass";
import { MapInfo } from "../../components/MapInfo/MapInfo";

export const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className={styles.contacts__wrapper}>
          <div className={styles.map__wrapper}>
            <iframe
              title="map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea1b2ebc98402400183d4a02ae0f197f01c1c7ab3309146dacd0055fae118e55&amp;source=constructor"
              height="100%"
              width="100%"
            ></iframe>
            <MapInfo />
          </div>
          <div className={styles.form__wrapper}>
            <h2 className={styles.form__title}>Свяжитесь с нами</h2>
            <p className={styles.form__subtext}>
              Если у вас остались вопросы, оставьте свои контактные данные и
              наши специалисты свяжутся с вами для консультации по любым
              вопросам.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
