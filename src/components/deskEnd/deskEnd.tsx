import React from "react";
import styles from "./deskEnd.module.scss";
import Visa from "../items/visa";
import MaserCard from "../items/masterCard";
import Mir from "../items/mir";
import Farm from "../items/farm";

const DeskEnd = () => {
  return (
    <div className={styles.boxEnd}>
      <div className={styles.boxEnd__item}>
        <p className={styles.boxEnd__itemText}>
          © 2022 г. Мебельная компания «Мечта».
          <br />
          Все права защищены
        </p>
        <a href="#" className={styles.boxEnd__textItem}>
          Политика конфиденциальности
        </a>
        <p className={styles.boxEnd__payment}>
          Вы можете
          <br />
          оплатить
        </p>
        <div className={styles.boxEnd__card}>
          <Visa id='svg' />
         <MaserCard id='svg' />
         <Mir id='svg' />
        </div>
        <div className={styles.boxEnd__svg}>
          <Farm id='svg' />
        </div>
      </div>
    </div>
  );
};

export default DeskEnd;
