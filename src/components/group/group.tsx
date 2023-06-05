import React from "react";
import bedroomBig1 from "../../assets/img/bedroomBig.png";
import sofaBig from "../../assets/img/sofaBig1.png";
import closet1 from "../../assets/img/closet21.png";
import styles from "./group.module.scss";
import Groups from "./groups";

const Group = () => {
  const items = [
    {
      icon: closet1,
      category: "ШКАФ ТРЕХДВЕРНЫЙ",
      name: "Ким",
      price: "19 370 ₽",
      prevPrice: "23 140 ₽",
      margin: "0 15%",
    },
    {
      icon: bedroomBig1,
      name: "Констанция NEW",
      price: "34 800 ₽",
      prevPrice: "42 450 ₽",
      margin: "0",
    },
    {
      icon: sofaBig,
      name: "Финка 20 с оттоманкой",
      price: "58 000 ₽",
      prevPrice: "62 000 ₽",
      margin: "0 10%",
    },
  ];
  const renderItems = () => {
    return items.map((item, index) => {
      return <Groups key={index} {...item} />;
    });
  };
  return (
    <div className={styles.group}>
      <div className={styles.groupText__on}>
        <a className={styles.groupText__new}>Новинки</a>
        <br />
        <a className={styles.groupText__style}>
          Стильные и актуальные <br /> новинки каждую неделю
        </a>
        <div className={styles.groupText__forwardOll}>
          <div className={styles.groupText__forward}>
            <div className={styles.test}>
              <p className={styles.testBorder} />
              <p className={`${styles.arrow} ${styles.left}`} />
            </div>
          </div>
          <div className={styles.groupText__back}>
            <div className={styles.test}>
              <p className={styles.testBorder} />
              <p className={`${styles.arrow} ${styles.right}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupCards}>{renderItems()}</div>
    </div>
  );
};

export default Group;
