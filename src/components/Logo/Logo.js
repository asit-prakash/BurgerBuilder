import React from "react";
import burgerLogo from "../../assets/Logo/burger-logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.Logo} src={burgerLogo} alt="logo" />;
};

export default Logo;
