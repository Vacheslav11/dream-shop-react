import React from "react";
import bigSofa1 from "../../assets/img/bigSofa.png";
import table from "../../assets/img/table.png";
import chair from "../../assets/img/chair.png";
import cardBed1 from "../../assets/img/cardBed.png";
import styles from "./card.module.scss";
import Card from "./card";

const Cards = () => {
  const items = [
    {
      icon: bigSofa1,
      category: "ДИВАН",
      name: "Авангард П—образный",
      price: "52 950 ₽",
      prevPrice: "68 450 ₽",
    },
    {
      icon: table,
      category: "СТОЛ",
      name: "Соло",
      price: "12 650 ₽",
      prevPrice: "14 200 ₽",
    },
    {
      icon: cardBed1,
      category: "КРОВАТЬ",
      name: "Гармония",
      price: "13 390 ₽",
      prevPrice: "15 480 ₽",
    },
    {
      icon: chair,
      category: "СТУЛ",
      name: "Коломбо с подлокотниками",
      price: "6 150 ₽",
      prevPrice: "7 640 ₽",
    },
  ];

  const renderItems = () => {
    return items.map((item, index) => {
      return <Card key={index} {...item} />;
    });
  };

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.svg_back}>
          <div className={styles.test}>
            <p className={styles.testBorder} />
            <p className={`${styles.arrow} ${styles.left}`} />
          </div>
        </div>
        <div className={styles.svg_forward}>
          <div className={styles.test}>
            <p className={styles.testBorder} />
            <p className={`${styles.arrow} ${styles.right}`} />
          </div>
        </div>
        <div className={styles.cardHolder}>{renderItems()}</div>
      </div>
    </div>
  );
};

export default Cards;
