import React from "react";
import Visa from "../items/visa";
import MaserCard from "../items/masterCard";
import World from "../items/world";
import Ferma from "../items/ferma";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item}>
        <p className={styles.footer__itemText}>
          © 2022 г. Мебельная компания «Мечта».
          <br />
          Все права защищены
        </p>
        <a href="#" className={styles.footer__textItem}>
          Политика конфиденциальности
        </a>
        <p className={styles.footer__payment}>
          Вы можете
          <br />
          оплатить
        </p>
        <div className={styles.footer__card}>
          <Visa />
          <MaserCard />
          <World  />
        </div>
        <div className={styles.footer__svg}>
          <Ferma />
        </div>
      </div>
    </div>
  );
};

export default Footer;
