import React from 'react';
import styles from "./desk.module.scss";

import desk from "../../assets/img/desk.png";
import desk2 from "../../assets/img/desk2.png";
import desk3 from "../../assets/img/desk3.png";
import desk4 from "../../assets/img/desk4.png";
import desk5 from "../../assets/img/desk5.png";
import desk6 from "../../assets/img/desk6.png";
import desk7 from "../../assets/img/desk7.png";



const Desk = () => {
    return (
        <div className={styles.desk}>
            <div className={styles.deskBox}>
                <div className={styles.onePng}>
                    <div>
                        <img src={desk} alt="" className={styles.deskImg__one} />
                            <img src={desk2} alt="" className={styles.deskImg__two} />
                                <img src={desk3} alt="" className={styles.deskImg__three} />
                    </div>
                    <div>
                        <img src={desk5} alt="" className={styles.deskImg__four} />
                            <img src={desk6} alt="" className={styles.deskImg__five} />
                    </div>
                </div>
                <div className={styles.deskName__box}>
                    <a className={styles.deskBox__name}>#МебельМечта</a>
                    <a className={styles.deskBox__info}>Интересные идеи<br /> для твоего дома<br />
                        и квартиры</a>
                    <div className={styles.deskButton__name}>
                            <button className={`${styles.deskBox__vk} ${styles.styled}`} type="button">
                            Мы ВКонтакте
                        </button>
                        <button className={`${styles.deskBox__odn} ${styles.styled}`} type="button">
                            Мы в Одноклассниках
                        </button>
                        <button className={`${styles.deskBox__inst} ${styles.styled}`} type="button">
                            Мы в Instagram
                        </button>
                    </div>
                </div>
                <div className={styles.twoPng}>
                    <img src={desk4} alt="" className={styles.deskImg__six} />
                        <img src={desk7} alt="" className={styles.deskImg__seven} />
                </div>
            </div>
        </div>
    );
};

export default Desk;