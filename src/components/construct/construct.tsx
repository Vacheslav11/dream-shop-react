import React from "react";
import constructRoom1 from "../../assets/img/constructRoom.png";
import link from "../../assets/img/link.png";
import linkNone1 from "../../assets/img/linkNone.png";
import bedside from "../../assets/img/bedside.png";
import Arrow from "../arrow";
import Item from "../items/item";
import Basket from "../items/basket";
import Link from "./link";
import styles from "./construct.module.scss";

const Construct = () => {
  const arr = [`Кухня`, `Спальня`, `Гостиная`, `Прихожая`, `Детская`];
  const renderArr = () => {
    return arr.map((element, index) => {
      return (
        <a
          key={`${element}-${index}`}
          href="#"
          className={styles.constructText__sofa}
        >
          {element}
        </a>
      );
    });
  };
  return (
    <div className={styles.construct}>
      <div className={styles.constructLeft}>
        <div className={styles.constructLeft}>
          <a className={styles.constructText__name}>Идеи для вдохновения</a>
          <div className={styles.constructMenu}>{renderArr()}</div>
        </div>
        <div className={styles.constructBox_oll}>
          <div className={styles.constructBox}>
            <div className={styles.constructBox_one}>
              <img
                src={constructRoom1}
                alt=""
                className={styles.constructBox__img}
              />
              <div className={styles.constructBox__group}>
                <p className={styles.constructBox__text}>Бруклин</p>
                <p className={styles.constructBox__textTwo}>Комод</p>
                <Item className={styles.boxSvg__favorite} />
                <p className={styles.constructBox__textHm}>11 750 ₽</p>
                <p className={styles.constructBox__textNone}>13 450 ₽</p>
                <Basket className={styles.boxSvg__basket} />
              </div>
              <Link src={link} className={styles.constructLink} />
              <Link src={linkNone1} className={styles.constructLink_none} />
              <Link src={link} className={styles.constructLink__back} />
              <Link src={link} className={styles.constructLink__left} />
            </div>
          </div>
          <div className={styles.constructBox__left}>
            <img
              className={styles.constructBox__leftImg}
              src={bedside}
              alt=""
            />
            <div className={styles.constructBox_border}>
              <div className={styles.testBorder__left}>
                <a className={styles.constructBox_line} />
                <a className={styles.constructBox_line_all} />
                <Arrow position="left" />
              </div>
              <div className={styles.testBorder__right}>
                <Arrow position="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construct;
