import React from 'react';
import styles from "./home.module.scss";

import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import user from "../../assets/img/icons/user.svg"

const Home = () => {
    return (
        <div className={`${styles.home} ${styles.container}`}>

                <p><a href="#"><img src={logo} alt="logo" className={styles.homeLogo} /></a></p>
                <div className={styles.homeSearch}>
                    <input placeholder="Что вы ищете?" className={styles.homeSearch__input} />
                        <img src={search} alt="search" className={styles.homeSearch__image} />
                </div>
                <div className={styles.homeIcon__oll}>
                    <div className={styles.homeIcon}>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path fill="#fff" d="M0 0H24V24H0z"></path>
                                <path
                                    stroke="#333"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M1 23c1.333-2.167 5.4-7 11-7s9.667 4.833 11 7"
                                ></path>
                                <circle cx="12" cy="8" r="7" stroke="#333" strokeWidth="2"></circle>
                            </svg>
                        </a>
                            <a href="#" className={styles.homeUser__text}>Войти</a>
                    </div>
                    <div className={styles.homeIcon}>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="none"
                                viewBox="0 0 25 25"
                            >
                                <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5 1)"></path>
                                <path
                                    fill="#333"
                                    d="M12.5 4.498l-.848.53.847 1.358.849-1.357-.848-.53zm0 19.495l-.64.768a1 1 0 001.195.064l-.555-.832zm.848-18.964c.987-1.578 3.261-2.418 5.332-1.867a4.62 4.62 0 012.634 1.85c.695.994 1.186 2.447 1.186 4.49h2c0-2.364-.571-4.24-1.548-5.636a6.62 6.62 0 00-3.757-2.637c-2.804-.746-6.03.32-7.543 2.74l1.696 1.06zM22.5 9.502c0 1.965-.833 4.182-2.6 6.532-1.763 2.347-4.42 4.772-7.954 7.127l1.109 1.664c3.665-2.442 6.508-5.013 8.444-7.589 1.934-2.571 3.001-5.201 3.001-7.734h-2zm-9.36 13.722C11.572 21.92 8.921 20 6.6 17.557c-2.331-2.452-4.1-5.207-4.1-8.055h-2c0 3.648 2.231 6.889 4.65 9.433 2.429 2.555 5.278 4.634 6.71 5.826l1.28-1.537zM2.5 9.502c0-2.04.491-3.493 1.187-4.487A4.626 4.626 0 016.32 3.162c2.072-.553 4.345.286 5.332 1.866l1.696-1.06C11.835 1.546 8.608.483 5.805 1.23a6.626 6.626 0 00-3.757 2.638C1.07 5.264.5 7.14.5 9.502h2z"
                                ></path>
                            </svg>
                        </a>
                        <a href="#" className={styles.homeFavorite__text}>Избранное</a>

                    </div>
                    <div className={styles.homeIcon}>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                fill="none"
                                viewBox="0 0 25 24"
                            >
                                <path fill="#fff" d="M0.5 0H24.5V24H0.5z"></path>
                                <path
                                    stroke="#333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.5 23a1 1 0 100-2 1 1 0 000 2zM20.5 23a1 1 0 100-2 1 1 0 000 2zM1.5 1h4l2.68 15.175c.091.522.342.99.708 1.324.365.334.823.51 1.292.5h9.72c.47.01.927-.166 1.293-.5.365-.334.616-.802.707-1.324l1.6-9.508h-17"
                                ></path>
                            </svg>
                        </a>
                            <a href="#" className={styles.homeBasket__text}>Корзина</a>
                    </div>
                </div>

        </div>
    );
};

export default Home;