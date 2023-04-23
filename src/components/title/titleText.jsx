import React from 'react';
import styles from "./title.module.scss";

const TitleText = () => {
    return (
        <div>
            <a className={styles.titleText}>Хиты продаж</a>
        </div>
    );
};

export default TitleText;