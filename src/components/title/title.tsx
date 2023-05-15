import React from "react";
import styles from "./title.module.scss";

const Title = () => {
  return (
    <div className={styles.title}>
      <a className={styles.titleText}>Успей купить</a>
    </div>
  );
};

export default Title;
