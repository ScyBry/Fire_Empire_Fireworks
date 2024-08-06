import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import styles from "./styles.module.sass";
import { Header } from "../../components/Header/Header";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.app__content}>
        <Outlet />
      </main>
      <AboutCompany />
      <Footer />
    </div>
  );
};
