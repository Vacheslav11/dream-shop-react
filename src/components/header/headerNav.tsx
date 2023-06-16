import React from 'react';
import styles from "./header.module.scss";

const nav = ["О нас", "Магазины", "Оптовикам", "Доставка", "Контакты"];

const HeaderNav = () => {
        return nav.map((element) => {
            return (
                <a key={element} className={styles.headerNav__item} href="#">
                    {element}
                </a>
            );
        });
};

export default HeaderNav;