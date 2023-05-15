import React from "react";
import size from "../../assets/img/size.png";
import design from "../../assets/img/design.png";
import cargo from "../../assets/img/cargo.png";
import delivery from "../../assets/img/delivery.png";
import installation from "../../assets/img/installation.png";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <p className={styles.servicesText}>Услуги</p>
      <div className={styles.servicesBox}>
        <div className={styles.servicesBox__size}>
          <img src={size} alt="" className={styles.servicesBox__sizeImg} />
          <p className={styles.servicesBox__sizeText}>Бесплатный замер</p>
        </div>
        <div className={styles.servicesBox__design}>
          <img src={design} alt="" className={styles.servicesBox__designImg} />
          <p className={styles.servicesBox__designText}>3D дизайн-проект</p>
        </div>
        <div className={styles.servicesBox__cargo}>
          <img src={cargo} alt="" className={styles.servicesBox__cargoImg} />
          <p className={styles.servicesBox__cargoText}>Подъём</p>
        </div>
      </div>
      <div className={styles.servicesBox__dawn}>
        <div className={styles.servicesBox__delivery}>
          <img
            src={delivery}
            alt=""
            className={styles.servicesBox__deliveryImg}
          />
          <p className={styles.servicesBox__deliveryText}>Доставка</p>
        </div>
        <div className={styles.servicesBox__installation}>
          <img
            src={installation}
            alt=""
            className={styles.servicesBox__installationImg}
          />
          <p className={styles.servicesBox__installationText}>
            Сборка и установка
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
