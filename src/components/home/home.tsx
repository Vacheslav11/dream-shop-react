import React from "react";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import Item from "../items/item";
import Basket from "../items/basket";
import User from "../items/user";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={`${styles.home} ${styles.container}`}>
      <p>
        <a href="#">
          <img src={logo} alt="logo" className={styles.homeLogo} />
        </a>
      </p>
      <div className={styles.homeSearch}>
        <input
          placeholder="Что вы ищете?"
          className={styles.homeSearch__input}
        />
        <img src={search} alt="search" className={styles.homeSearch__image} />
      </div>
      <div className={styles.homeIcon__oll}>
        <div className={styles.homeIcon}>
          <User className={styles.homeIcon} />
          <a href="#" className={styles.homeUser__text}>
            Войти
          </a>
        </div>
        <div className={styles.homeIcon}>
          <a href="#">
            <Item className={styles.boxSvg__favorite} />
          </a>
          <a href="#" className={styles.homeFavorite__text}>
            Избранное
          </a>
        </div>
        <div className={styles.homeIcon}>
          <a href="#">
            <Basket className={styles.boxSvg__basket} />
          </a>
          <a href="#" className={styles.homeBasket__text}>
            Корзина
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
