import React from "react";
import styles from "./home.module.scss";

const HomeIcon = (props) => {
  const { icon, name } = props;

  return (
    <div>
      <a href="#" className={styles.homeUser__text}>
        <div className={styles.iconCenter}>{icon}</div>
        {name}
      </a>
    </div>
  );
};

export default HomeIcon;
