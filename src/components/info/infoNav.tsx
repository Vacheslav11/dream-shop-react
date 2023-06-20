import React from "react";
import styles from "./info.module.scss";

const nav = ["О нас", "Магазины", "Оптовикам", "Доставка", "Контакты"];

const InfoNav = () => {
  return nav.map((element) => {
    return (
      <a key={element} className={styles.infoNav__item} href="#">
        {element}
      </a>
    );
  });
};

export default InfoNav;
