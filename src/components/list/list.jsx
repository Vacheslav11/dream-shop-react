import React from 'react';
import styles from "./list.module.scss";


const List = () => {
    return (
        <div>
            <div className={`${styles.list} ${styles.container}`}>
                <a href="#" className={styles.listText}>АКЦИИ</a>
                <a href="#" className={styles.listText}>ШКАФЫ</a>
                <a href="#" className={styles.listText}>СПАЛЬНЯ</a>
                <a href="#" className={styles.listText}>КУХНЯ</a>
                <a href="#" className={styles.listText}>ПРИХОЖАЯ</a>
                <a href="#" className={styles.listText}>ГОСТИНАЯ</a>
                <a href="#" className={styles.listText}>МЯГКАЯ МЕБЕЛЬ</a>


                <div className={styles.menu__mobileButton} id="click">
                    <span></span>
                    <div id="menu__mobile-text" className={styles.menu__mobileText}>
                        <ul>
                            <li>АКЦИИ</li>
                            <li>ШКАФЫ</li>
                            <li>СПАЛЬНЯ</li>
                            <li>КУХНЯ</li>
                            <li>ПРИХОЖАЯ</li>
                            <li>ГОСТИНАЯ</li>
                            <li>МЯГКАЯ МЕБЕЛЬ</li>
                            <li>ОБЕДЕННЫЕ ЗОНЫ</li>
                            <li>СТУЛЬЯ</li>
                            <li>СТОЛЫ</li>
                            <li>МАТРАСЫ</li>
                            <li>ДЕТСКАЯ</li>
                            <li>ТЕКСТИЛЬ ДЛЯ ДОМА</li>
                            <li>КОЛЛЕКЦИИ</li>
                        </ul>
                    </div>
                </div>


                <a href="#" className={styles.listText}>ОБЕДЕННЫЕ ЗОНЫ</a>
                <a href="#" className={styles.listText}>СТУЛЬЯ</a>
                <a href="#" className={styles.listText}>СТОЛЫ</a>
                <a href="#" className={styles.listText}>МАТРАСЫ</a>
                <a href="#" className={styles.listText}>ДЕТСКАЯ</a>
                <a href="#" className={styles.listText}>ТЕКСТИЛЬ ДЛЯ ДОМА</a>
                <a href="#" className={styles.listText}>КОЛЛЕКЦИИ</a>
            </div>
        </div>
    );
};

export default List;