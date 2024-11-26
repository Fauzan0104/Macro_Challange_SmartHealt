import React from "react";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthy Life</div>
      <nav className={styles.navMenu}>
        <a href="#" className={styles.navItem}>Home</a>
        <a href="#" className={styles.navItem}>Fitur</a>
        <a href="#" className={styles.navItem}>Artikel</a>
        <a href="#" className={styles.navItem}>Pusat Bantuan</a>
      </nav>
    </header>
  );
};

export default Header;
