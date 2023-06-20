import React from "react";
import pointer from "../../assets/img/carbon_location.png";
import styles from "./info.module.scss";
import InfoNav from "./infoNav";

const App = () => {
  return (
    <div className={`${styles.info} ${styles.container}`}>
      <div className={styles.infoContainer__item}>
        <img src={pointer} alt="" />
        <a className={styles.infoImage} href="">
          Омск
        </a>
      </div>
      <div className={styles.infoNav}>
        <a className={styles.infoLine__item} href="tel:+73812504888">
          +7 3812 50-48-88
        </a>
        {InfoNav()}
      </div>
    </div>
  );
};

export default App;
