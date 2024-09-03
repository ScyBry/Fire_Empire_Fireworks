import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import SearchIcon from "@mui/icons-material/Search";
import img1 from "../../assets/fireworks/firework1/firework1-1.jpg";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import styles from "./styles.module.sass";
import { PageTitle } from "../../components/PageTitle/PageTitle.tsx";

export const OurWorks = () => {
  return (
    <section className={`${styles.ourWorks} container`}>
      <PageTitle title={"Наши работы"} />
      <LightGallery
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        elementClassNames={styles.gallery}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
        <a href={img1} className={styles.galleryItem}>
          <img alt="Firework" src={img1} />
          <div className={styles.searchIcon}>
            <SearchIcon style={{ fontSize: "60px", color: "#fff" }} />
          </div>
        </a>
      </LightGallery>
    </section>
  );
};
