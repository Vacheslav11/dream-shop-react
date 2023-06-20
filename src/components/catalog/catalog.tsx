import React from "react";
import styles from "./catalog.module.scss";

const Catalog = (props) => {
  const { icon, count, name, allName } = props;

  return (
    <div className={styles.catalogFurniture}>
      <img src={icon} alt="icon" />
      {allName && <a className={styles.catalogFurniture__catalog}>{allName}</a>}
      <a className={styles.catalogHm}>{count}</a>
      <a className={styles.catalogText}>{name}</a>
    </div>
  );
};

export default Catalog;
