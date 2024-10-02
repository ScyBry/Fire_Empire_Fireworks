import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import styles from "./styles.module.sass";
import { Header } from "../../components/Header/Header";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { FeedbackForm } from "../../components/FeedbackForm/FeedbackForm";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div key={location.pathname} className={styles.app}>
      <ToastContainer />

      <Header />
      <main className={styles.app__content}>
        <Outlet />
      </main>

      <AboutCompany />

      <FeedbackForm />
      <Footer />
    </motion.div>
  );
};
