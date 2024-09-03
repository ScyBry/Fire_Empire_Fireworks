import { IconButton } from "@mui/material";
import { socialLinks } from "../../constants";
import styles from "./styles.module.sass";
import { NavLink } from "react-router-dom";

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks__wrapper}>
      {socialLinks.map((link) => (
        <NavLink key={link.link} to={link.link}>
          <IconButton>{link.img}</IconButton>
        </NavLink>
      ))}
    </div>
  );
};
