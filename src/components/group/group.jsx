import React from 'react';
import styles from "./group.module.scss";

import closet from "../../assets/img/closet.png";
import bedroomBig from "../../assets/img/bedroom-big.png";
import sofaBig from "../../assets/img/sofa-big.png";

const Group = () => {
    return (
        <div className={styles.group}>
            <div className={styles.groupText__on}>
                <a className={styles.groupText__new}>Новинки</a>
                <br />
                    <a className={styles.groupText__style}>Стильные и актуальные <br /> новинки каждую неделю</a>
                    <div className={styles.groupText__forwardOll}>
                        <div className={styles.groupText__forward}>
                            <div className={styles.test}>
                                <p className={styles.testBorder}></p>
                                <p className={`${styles.arrow} ${styles.left}`}></p>
                            </div>
                        </div>
                        <div className={styles.groupText__back}>
                            <div className={styles.test}>
                                <p className={styles.testBorder}></p>
                                <p className={`${styles.arrow} ${styles.left}`}></p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.groupCards}>
                <div className={styles.groupCards__closet}>
                    <div className={styles.groupCards__svg}>
                        <svg className={styles.cardFavorites}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            fill="none"
                            viewBox="0 0 24 25"
                        >
                            <path
                                fill="#969696"
                                d="M12 4.498l-.848.53.847 1.358.849-1.357-.848-.53zm0 19.495l-.64.768a1 1 0 001.195.064L12 23.993zm.848-18.964c.987-1.578 3.261-2.418 5.332-1.867a4.62 4.62 0 012.634 1.85C21.509 6.007 22 7.46 22 9.503h2c0-2.364-.571-4.24-1.548-5.636a6.62 6.62 0 00-3.757-2.637c-2.804-.746-6.03.32-7.543 2.74l1.696 1.06zM22 9.502c0 1.965-.833 4.182-2.6 6.532-1.763 2.347-4.42 4.772-7.954 7.127l1.109 1.664c3.665-2.442 6.508-5.013 8.444-7.589C22.933 14.665 24 12.035 24 9.502h-2zm-9.36 13.722C11.072 21.92 8.421 20 6.1 17.557 3.769 15.105 2 12.35 2 9.502H0c0 3.648 2.231 6.889 4.65 9.433 2.429 2.555 5.278 4.634 6.71 5.826l1.28-1.537zM2 9.502c0-2.04.491-3.493 1.187-4.487A4.626 4.626 0 015.82 3.162c2.072-.553 4.345.286 5.332 1.866l1.696-1.06C11.335 1.546 8.108.483 5.305 1.23a6.626 6.626 0 00-3.757 2.638C.57 5.264 0 7.14 0 9.502h2z"
                            ></path>
                        </svg>
                        <svg className={styles.cardRating}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <g stroke="#333" strokeLinejoin="round" strokeWidth="2" opacity="0.3">
                                <path d="M1 1v22h8V1H1zM15 5v18h8V5h-8z"></path>
                            </g>
                        </svg>
                    </div>
                    <img src={closet} alt="" className={styles.groupCards__closetImg} />
                        <a className={styles.groupCards__closetName}>ШКАФ ТРЕХДВЕРНЫЙ</a>
                        <a className={styles.groupCards__closetText}>Ким</a>
                        <div className={styles.closetHm__oll}>
                            <a className={styles.groupCards__closetHm}>19 370 ₽</a>
                            <a className={styles.groupCards__closetOld}> 23 140 ₽</a>
                        </div>
                        <button className={`${styles.groupCards__closetBuy} ${styles.styled}`}
                                type="button">
                            Добавить в корзину
                        </button>
                </div>
                <div className={styles.groupCards__room}>
                    <div className={styles.groupCards__svg}>
                        <svg className={styles.cardFavorites}
                             xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="25"
                             fill="none"
                             viewBox="0 0 24 25"
                        >
                            <path
                                fill="#969696"
                                d="M12 4.498l-.848.53.847 1.358.849-1.357-.848-.53zm0 19.495l-.64.768a1 1 0 001.195.064L12 23.993zm.848-18.964c.987-1.578 3.261-2.418 5.332-1.867a4.62 4.62 0 012.634 1.85C21.509 6.007 22 7.46 22 9.503h2c0-2.364-.571-4.24-1.548-5.636a6.62 6.62 0 00-3.757-2.637c-2.804-.746-6.03.32-7.543 2.74l1.696 1.06zM22 9.502c0 1.965-.833 4.182-2.6 6.532-1.763 2.347-4.42 4.772-7.954 7.127l1.109 1.664c3.665-2.442 6.508-5.013 8.444-7.589C22.933 14.665 24 12.035 24 9.502h-2zm-9.36 13.722C11.072 21.92 8.421 20 6.1 17.557 3.769 15.105 2 12.35 2 9.502H0c0 3.648 2.231 6.889 4.65 9.433 2.429 2.555 5.278 4.634 6.71 5.826l1.28-1.537zM2 9.502c0-2.04.491-3.493 1.187-4.487A4.626 4.626 0 015.82 3.162c2.072-.553 4.345.286 5.332 1.866l1.696-1.06C11.335 1.546 8.108.483 5.305 1.23a6.626 6.626 0 00-3.757 2.638C.57 5.264 0 7.14 0 9.502h2z"
                            ></path>
                        </svg>
                        <svg className={styles.cardRating}
                             xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="24"
                             fill="none"
                             viewBox="0 0 24 24"
                        >
                            <g stroke="#333" strokeLinejoin="round" strokeWidth="2" opacity="0.3">
                                <path d="M1 1v22h8V1H1zM15 5v18h8V5h-8z"></path>
                            </g>
                        </svg>
                    </div>
                    <img src={bedroomBig} alt="" className={styles.groupCards__roomImg} />
                        <div className={styles.groupCards__ollName}>
                            <a className={styles.groupCards__roomName}>Констанция NEW</a>
                            <br />
                                <div className={styles.closetHm__oll}>
                                    <a className={styles.groupCards__roomHm}>34 800 ₽</a>
                                    <a className={styles.groupCards__roomOld}>42 450 ₽</a>
                                </div>
                                <div className={styles.groupCards__closetOll}>
                                    <button className={`${styles.groupCards__closetBuy} ${styles.styled}`}
                                            type="button">
                                        Добавить в корзину
                                    </button>
                                </div>
                        </div>
                </div>
                <div className={styles.groupCards__sofa}>
                    <div className={styles.groupCards__svg}>
                        <svg className={styles.cardFavorites}
                             xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="25"
                             fill="none"
                             viewBox="0 0 24 25"
                        >
                            <path
                                fill="#969696"
                                d="M12 4.498l-.848.53.847 1.358.849-1.357-.848-.53zm0 19.495l-.64.768a1 1 0 001.195.064L12 23.993zm.848-18.964c.987-1.578 3.261-2.418 5.332-1.867a4.62 4.62 0 012.634 1.85C21.509 6.007 22 7.46 22 9.503h2c0-2.364-.571-4.24-1.548-5.636a6.62 6.62 0 00-3.757-2.637c-2.804-.746-6.03.32-7.543 2.74l1.696 1.06zM22 9.502c0 1.965-.833 4.182-2.6 6.532-1.763 2.347-4.42 4.772-7.954 7.127l1.109 1.664c3.665-2.442 6.508-5.013 8.444-7.589C22.933 14.665 24 12.035 24 9.502h-2zm-9.36 13.722C11.072 21.92 8.421 20 6.1 17.557 3.769 15.105 2 12.35 2 9.502H0c0 3.648 2.231 6.889 4.65 9.433 2.429 2.555 5.278 4.634 6.71 5.826l1.28-1.537zM2 9.502c0-2.04.491-3.493 1.187-4.487A4.626 4.626 0 015.82 3.162c2.072-.553 4.345.286 5.332 1.866l1.696-1.06C11.335 1.546 8.108.483 5.305 1.23a6.626 6.626 0 00-3.757 2.638C.57 5.264 0 7.14 0 9.502h2z"
                            ></path>
                        </svg>
                        <svg className={styles.cardRating}
                             xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="24"
                             fill="none"
                             viewBox="0 0 24 24"
                        >
                            <g stroke="#333" strokeLinejoin="round" strokeWidth="2" opacity="0.3">
                                <path d="M1 1v22h8V1H1zM15 5v18h8V5h-8z"></path>
                            </g>
                        </svg>
                    </div>
                    <img src={sofaBig} alt="" className={styles.groupCards__sofaImg} />
                        <a className={styles.groupCards__sofaName}>Финка 20 с оттоманкой</a>
                        <div className={styles.closetHm__oll}>
                            <a className={styles.groupCards__sofaHm}>58 000 ₽</a>
                            <a className={styles.groupCards__sofaOld}>62 000 ₽</a>
                        </div>
                        <button className={`${styles.groupCards__closetBuy} ${styles.styled}`}
                                type="button">
                            Добавить в корзину
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Group;