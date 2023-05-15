import React from "react";
import styles from "./list.module.scss";

const List = () => {
  const arr = [
    `АКЦИИ`,
    `ШКАФЫ`,
    `СПАЛЬНЯ`,
    `КУХНЯ`,
    `ПРИХОЖАЯ`,
    `ГОСТИНАЯ`,
    `МЯГКАЯ МЕБЕЛЬ`,
    `ОБЕДЕННЫЕ ЗОНЫ`,
    `СТУЛЬЯ`,
    `СТОЛЫ`,
    `МАТРАСЫ`,
    `ДЕТСКАЯ`,
    `ТЕКСТИЛЬ ДЛЯ ДОМА`,
    `КОЛЛЕКЦИИ`,
  ];
  const renderArr = () => {
    return arr.map((element) => {
      return (
        <a key={1} href="#" className={styles.listText}>
          {element}
        </a>
      );
    });
  };
  return (
    <div>
      <div className={`${styles.list} ${styles.container}`}>
        {renderArr()}
        <div className={styles.menu__mobileButton} id="click">
          <span />
          <div id="menu__mobile-text" className={styles.menu__mobileText}>
            <ul>
              <li>АКЦИИ</li>
              <li>ШКАФЫ</li>
              <li>СПАЛЬНЯ</li>
              <li>КУХНЯ</li>
              <li>ПРИХОЖАЯ</li>
              <li>ГОСТИНАЯ</li>
              <li>МЯГКАЯ МЕБЕЛЬ</li>
              <li>ОБЕДЕННЫЕ ЗОНЫ</li>
              <li>СТУЛЬЯ</li>
              <li>СТОЛЫ</li>
              <li>МАТРАСЫ</li>
              <li>ДЕТСКАЯ</li>
              <li>ТЕКСТИЛЬ ДЛЯ ДОМА</li>
              <li>КОЛЛЕКЦИИ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
