import React from "react";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import Item from "../items/item";
import Basket from "../items/basket";
import User from "../items/user";
import styles from "./home.module.scss";
import HomeIcon from "./homeIcon";


const Home = () => {
    const items =[
        {
            icon: <User className={styles.homeIcon} />,
            name: "Войти"
        },
        {
            icon: <Item className={styles.boxSvg__favorite} />,
            name: "Избранное"
        },
        {
            icon: <Basket className={styles.boxSvg__basket} />,
            name: "Корзина"
        }
    ];

    const renderItem = () => {
        return items.map((item, index) => {
            return <HomeIcon key={index} {...item} />;
        });
    };

  return (
    <div className={`${styles.home} ${styles.container}`}>
        <a href="#">
          <img src={logo} alt="logo" className={styles.homeLogo} />
        </a>
      <div className={styles.homeSearch}>
        <input
          placeholder="Что вы ищете?"
          className={styles.homeSearch__input}
        />
        <img src={search} alt="search" className={styles.homeSearch__image} />
      </div>
        <div className={styles.homeIcon}>{renderItem()}</div>
    </div>
  );
};

export default Home;
