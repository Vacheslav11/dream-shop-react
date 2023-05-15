import React from "react";
import furniture from "../../assets/img/cushioned-furniture.png";
import kitchens from "../../assets/img/kitchens.png";
import hallways from "../../assets/img/hallways.png";
import styles from "./catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogFurniture}>
        <img src={furniture} alt="" />
        <a className={styles.catalogFurniture__catalog}>Каталог</a>
        <a className={styles.catalogHm}>126 предметов</a>
        <a className={styles.catalogText}>Мягкая мебель</a>
      </div>
      <div className={styles.catalogKitchens}>
        <a className={styles.catalogHm}>68 предметов</a>
        <a className={styles.catalogText}>Кухни</a>
        <img src={kitchens} alt="" />
      </div>
      <div className={styles.catalogHallways}>
        <img src={hallways} alt="" />
        <a className={styles.catalogHm}>53 предмета</a>
        <a className={styles.catalogText}>Прихожие</a>
        <div className={styles.testStop__old}>
          <div className={styles.test_old}>
            <p className={styles.testBorder__old} />
            <p className={`${styles.arrow} ${styles.right}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
