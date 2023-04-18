import React from 'react';

import styles from "./cover.module.scss";

const Cover = () => {
    return (
        <div className={styles.cover}>
            <div className={styles.coverBac}>
                <div className={styles.coverText}>
                    <p>Хочется сэкономить?</p>
                </div>
                <div className={styles.coverText__discount}>
                    <p>Скидка 5% <br /> при самовывозе</p>
                </div>
            </div>

            <div className={styles.coverImage}>
                <div className={styles.coverImage__sofa}>
                    <div className={styles.coverImage__sofaImage}></div>
                </div>
                <div className={styles.coverImage__wing}>
                    <div className={styles.coverImage__wingImage}>
                    </div>
                </div>
                <div className={styles.coverImage__hallway}>
                    <div className={styles.coverImage__hallwayBac}></div>
                </div>
                <div className={styles.coverImage__bed}>
                    <div className={styles.coverImage__bedBac}>

                    </div>
                </div>
                <div className={styles.coverImage__armchair}>
                    <div className={styles.coverImage__armchairBac}></div>
                </div>
                <div className={styles.coverImage__hallwayImage}>
                    <div className={styles.coverBac__hallwayImage}></div>
                </div>
                <div className={styles.coverImage__kitchen}>
                    <div className={styles.coverImage__kitchenBac}></div>
                </div>
                <div className={styles.coverImage__bedroom}>
                    <div className={styles.coverImage__bedroomBac}></div>
                </div>
            </div>
        </div>
    );
};

export default Cover;