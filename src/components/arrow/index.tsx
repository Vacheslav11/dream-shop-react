import React from "react";
import styles from "./index.module.scss";

interface Props {
  position: "left" | "right";
}

const Arrow: React.FC<Props> = (props) => {
  const { position } = props;

  return (
    <div className={styles.test}>
      <p className={styles.testBorder} />
      <p className={`${styles.arrow} ${styles[position]}`} />
    </div>
  );
};

export default Arrow;
