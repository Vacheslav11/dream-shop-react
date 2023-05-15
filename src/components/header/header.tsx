import React from "react";
import pointer from "../../assets/img/carbon_location.png";
import styles from "./header.module.scss";

const App = () => {
  const nav = ["О нас", "Магазины", "Оптовикам", "Доставка", "Контакты"];
  const renderNav = () => {
    return nav.map((element) => {
      return (
        <a key={element} className={styles.headerNav__item} href="#">
          {element}
        </a>
      );
    });
  };
  return (
    <div className={`${styles.header} ${styles.container}`}>
      <div className={styles.headerContainer__item}>
        <img src={pointer} alt="" />
        <a className={styles.headerImage} href="">
          Омск
        </a>
      </div>
      <div className={styles.headerNav}>
        <a className={styles.headerLine__item} href="tel:+73812504888">
          +7 3812 50-48-88
        </a>
        {renderNav()}
      </div>
    </div>
  );
};

export default App;
