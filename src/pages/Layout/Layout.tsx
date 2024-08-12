import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import styles from "./styles.module.sass";
import { Header } from "../../components/Header/Header";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const Layout = () => {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <main className={styles.app__content}>
        <Outlet />
      </main>
      <AboutCompany />
      <Footer />
    </div>
  );
};
