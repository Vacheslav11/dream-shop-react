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
          className={styles.listText}
        >
          {element}
        </a>
      );
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`${styles.list} ${styles.container}`}>
        <div className={`${styles.listText} ${styles.listText__on}`}>
        {renderArr()}
        </div>
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
              {renderArr()}
          </div>
        </div>
      </div>
  );
};

export default List;
