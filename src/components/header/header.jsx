import React from 'react';
import styles from "./header.module.scss";


import pointer from "../../assets/img/carbon_location.png";

const App = () => {
    return (
        <div className={`${styles.header} ${styles.container}`}>
                <div className={styles.headerContainer__item}>
                    <img src={pointer} alt=""/>
                    <a className={styles.headerImage} href="">Омск</a>
                </div>
                <div className={styles.headerNav}>
                    <a className={styles.headerLine__item} href="tel:+73812504888">+7 3812 50-48-88</a>
                    <a className={styles.headerNav__item} href="#">О нас</a>
                    <a className={styles.headerNav__item} href="#">Магазины</a>
                    <a className={styles.headerNav__item} href="#">Оптовикам</a>
                    <a className={styles.headerNav__item} href="#">Доставка</a>
                    <a className={styles.headerNav__item }href="#">Контакты</a>
                </div>
        </div>
    );
};

export default App;