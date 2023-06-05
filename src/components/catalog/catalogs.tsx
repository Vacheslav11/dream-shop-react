import React from "react";
import furniture from "../../assets/img/cushionedFurniture.png";
import kitchens from "../../assets/img/kitchens.png";
import hallways from "../../assets/img/hallways.png";
import styles from "./catalog.module.scss";
import Catalog from "./catalog";

const Catalogs = () => {
  const items = [
    {
      icon: furniture,
      count: "126 предметов",
      name: "Мягкая мебель",
      allName: "Каталог",
    },
    {
      icon: kitchens,
      count: "68 предметов",
      name: "Кухни",
    },
    {
      icon: hallways,
      count: "53 предмета",
      name: "Прихожие",
    },
  ];

  const renderItems = () => {
    return items.map((item, index) => {
      return <Catalog key={index} {...item} />;
    });
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.testStop__old}>
        <div className={styles.test_old}>
          <p className={styles.testBorder__old} />
          <p className={`${styles.arrow} ${styles.right}`} />
        </div>
      </div>
      <div className={styles.catalogFurniture}>{renderItems()} </div>
    </div>
  );
};

export default Catalogs;
