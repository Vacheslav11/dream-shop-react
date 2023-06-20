import React from "react";
import Favorite from "../items/favorite";
import Rating from "../items/rating";
import styles from "./group.module.scss";

const Group = (props) => {
  const { icon, category, name, price, prevPrice, margin } = props;

  return (
    <div className={styles.groupCards__closet}>
      <div className={styles.groupCards__svg}>
        <Favorite className={styles.cardFavorites} />
        <Rating className={styles.cardRating} />
      </div>
      <img
        style={{ margin }}
        src={icon}
        alt="icon"
        className={styles.groupCards__closetImg}
      />
      <div className={styles.groupCards__text}>
        <a className={styles.groupCards__closetName}>{category}</a>
        <a className={styles.groupCards__closetText}>{name}</a>
        <div className={styles.closetHm__oll}>
          <a className={styles.groupCards__closetHm}>{price}</a>
          <a className={styles.groupCards__closetOld}>{prevPrice}</a>
        </div>
      </div>
      <button
        className={`${styles.groupCards__closetBuy} ${styles.styled}`}
        type="button"
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default Group;
