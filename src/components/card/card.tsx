import React from "react";
import Rating from "../items/rating";
import Favorite from "../items/favorite";
import styles from "./card.module.scss";

const Card = (props) => {
  const { icon, category, name, price, prevPrice } = props;

  return (
    <div className={styles.cardSofa__oll}>
      <div className={styles.cardSofa}>
        <a className={styles.cardSofa__text}>-15%</a>
        <a className={styles.cardSofa__textSell}>хит продаж</a>
        <img src={icon} alt="" />
        <Favorite className={styles.cardFavorites} />

        <Rating className={styles.cardRating} />
      </div>
      <div>
        <p className={styles.cardText__name}>{category}</p>
        <p className={styles.cardText__nameText}>{name}</p>
        <p className={styles.cardText__price}>
          <b>{price}</b>
          <small>
            {" "}
            <s>{prevPrice}</s>
          </small>
        </p>
        <div>
          <button
            className={`${styles.cardText__basket} ${styles.styled}`}
            type="button"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
