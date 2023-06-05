import React, { useState } from "react";
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
        <a
          key={element}
          href="#"
          className={`${styles.listText} ${styles.listText__on}`}
        >
          {element}
        </a>
      );
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`${styles.list} ${styles.container}`}>
        {renderArr()}
        <div
          className={`${styles.menu__mobile_button} ${
            isOpen ? styles.active : ""
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span />
          <div
            className={`${styles.menu__mobileText} ${
              isOpen ? styles.show : ""
            }`}
          >
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
