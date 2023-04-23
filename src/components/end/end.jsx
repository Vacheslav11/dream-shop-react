import React from 'react';
import styles from "./end.module.scss";


const End = () => {
    return (
        <div className={styles.end}>
            <div className={styles.endBox}>
                <div className={styles.endBox__text}>
                    <div className={styles.endBox__textOne}>
                        <p>Каталог</p>
                        <div className={styles.endRedact__text}>
                            <a className={styles.endText} href="#">Шкафы</a>
                            <a className={styles.endText} href="#">Спальня</a>
                            <a className={styles.endText} href="#">Кухня</a>
                            <a className={styles.endText} href="#">Прихожая</a>
                            <a className={styles.endText} href="#">Гостинная</a>
                            <a className={styles.endText} href="#">Спальные гарнитуры</a>
                            <a className={styles.endText} href="#">Мягкая мебель</a>
                        </div>
                    </div>
                    <div className={styles.endRedact__textTwo}>
                        <a className={styles.endText} href="#">Обеденные зоны</a>
                        <a className={styles.endText} href="#"> Стулья</a>
                        <a className={styles.endText} href="#">Столы</a>
                        <a className={styles.endText} href="#">Матрасы</a>
                        <a className={styles.endText} href="#">Детская</a>
                        <a className={styles.endText} href="#">Коллекция</a>
                    </div>

                    <div className={styles.endRedact__three}>
                        <p>Покупателям</p>
                        <div className={styles.endRedact__four}>
                            <a className={styles.endText} href="#">Каталог</a>
                            <a className={styles.endText} href="#">Скидки и акции</a>
                            <a className={styles.endText} href="#">Как купить</a>
                            <a className={styles.endText} href="#">Доставка</a>
                            <a className={styles.endText} href="#">Гарантии</a>
                            <a className={styles.endText} href="#">Оплата</a>
                        </div>
                    </div>
                    <div className={styles.endRedact__five}>
                        <p>Всё о Мечте</p>
                        <div className={styles.endFive__redact}>
                            <a className={styles.endText} href="#">О нас</a>
                            <a className={styles.endText} href="#">Магазины</a>
                            <a className={styles.endText} href="#">Оптовикам</a>
                            <a className={styles.endText} href="#">Контакты</a>
                        </div>
                    </div>
                    <div className={styles.endRedact__six}>
                        <p className={styles.endRedact__textSix}>Подпишитесь на лучшие акции и скидки!</p>
                        <div className={styles.endInput__redact}>
                            <input placeholder="Введите свой e-mail" className={styles.endInput} />
                        </div>
                        <div className={styles.endInput__wrapper}>
                            <button className={styles.endButton} type="button">
                                Подпишись
                            </button>
                            <h6 className={styles.endButton__text}>Нажимая на кнопку, Вы<br /> подтверждаете,
                                что согласны<br />
                                    с политикой конфидециальности</h6>
                        </div>

                    </div>
                    <div className={styles.endRedact__seven}>
                        <p className={styles.sevenNumber} href="tel:+73812504888">+7 3812 50-48-88</p>
                        <p className={styles.sevenMail}>mechtameb55@mail.ru</p>
                        <h6 className={styles.sevenAddress}>Адрес склада:</h6>
                        <p className={styles.sevenPlace}>г. Омск, ул. Биофабрика 28/2</p>
                        <h6 className={styles.sevenInf}>Время работы склада:</h6>
                        <p className={styles.sevenTime}>Пн-пт с 9:00 до 19:00,<br />
                            сб с 9:00 до 15:00,<br />
                            вс— выходной
                        </p>
                        <div className={styles.endApplications}>
                            <div className={styles.tgIcon__oll}>
                                <p className={styles.tgIcon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 22 20"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M21.935 1.737l-3.32 16.189c-.25 1.142-.903 1.427-1.831.889l-5.058-3.855-2.44 2.427c-.27.28-.497.513-1.017.513l.363-5.326 9.375-8.76c.407-.376-.089-.584-.634-.208L5.784 11.152.794 9.537c-1.085-.35-1.104-1.123.227-1.66L20.536.101c.903-.35 1.694.208 1.4 1.635z"
                                        ></path>
                                    </svg>
                                </p>
                            </div>
                            <div className={styles.vkIcon__oll}>
                                <p className={styles.vkIcon}>
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="14"
                                        fill="none"
                                        viewBox="0 0 25 14"
                                    >
                                        <path
                                            fill="#fff"
                                            fillRule="evenodd"
                                            d="M11.978 13.819h1.487s.438-.088.7-.262c.175-.263.175-.613.175-.613s0-1.924.875-2.274c.875-.262 2.013 1.925 3.238 2.712.963.612 1.663.524 1.663.524l3.237-.087s1.75-.088.875-1.487c-.088-.087-.438-.962-2.45-2.799-2.012-1.924-1.75-1.574.7-4.898 1.487-2.011 2.1-3.236 1.925-3.76-.175-.525-1.313-.35-1.313-.35h-3.674s-.263 0-.438.087c-.175.088-.35.438-.35.438s-.613 1.574-1.4 2.886c-1.663 2.799-2.275 2.973-2.538 2.799-.612-.438-.437-1.662-.437-2.45 0-2.71.437-3.848-.788-4.11-.437-.088-.7-.175-1.75-.175-1.312 0-2.45 0-3.062.35-.438.175-.7.7-.525.7.262 0 .787.174 1.05.524.35.525.35 1.662.35 1.662s.175 3.149-.525 3.586c-.525.262-1.138-.262-2.625-2.799a18.906 18.906 0 01-1.313-2.711s-.087-.262-.262-.437C4.54.7 4.278.612 4.278.612h-3.5s-.525 0-.7.263c-.175.175 0 .612 0 .612s2.712 6.385 5.862 9.62c2.8 2.974 6.038 2.712 6.038 2.712z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </p>
                            </div>
                            <div className={styles.classIcon__oll}>
                                <p className={styles.classIcon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 17 25"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M7.27 17.61c-1.939-.203-3.686-.68-5.182-1.85-.186-.146-.377-.286-.547-.449-.655-.629-.72-1.349-.203-2.091.444-.636 1.188-.805 1.961-.44.15.07.293.158.43.253 2.788 1.916 6.618 1.969 9.417.086.277-.212.573-.386.917-.474.668-.172 1.29.074 1.65.658.409.667.403 1.319-.101 1.837-.774.794-1.705 1.37-2.739 1.77-.978.38-2.05.57-3.11.697.16.174.236.26.336.36 1.44 1.447 2.886 2.887 4.32 4.338.49.494.591 1.107.322 1.682-.294.628-.953 1.042-1.599.998-.41-.029-.728-.232-1.012-.518-1.086-1.093-2.193-2.166-3.257-3.28-.31-.324-.459-.263-.732.019A217.722 217.722 0 014.82 24.54c-.502.495-1.099.584-1.68.301-.62-.3-1.013-.931-.982-1.565.02-.43.232-.757.526-1.051 1.425-1.423 2.846-2.85 4.267-4.274.094-.095.182-.195.318-.342z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M8.45 12.654c-3.457-.012-6.292-2.878-6.272-6.34C2.198 2.811 5.035-.01 8.526 0c3.499.01 6.307 2.872 6.29 6.41-.018 3.455-2.873 6.256-6.366 6.244zm3.143-6.333A3.082 3.082 0 008.5 3.231 3.086 3.086 0 005.402 6.36a3.082 3.082 0 003.115 3.065 3.075 3.075 0 003.075-3.103z"
                                        ></path>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default End;