import React from "react";
import styles from "./end.module.scss";
import Telegram from "../items/telegram";
import Messenger1 from "../items/messenger1";
import Messenger2 from "../items/messenger2";

const End = () => {
  const arr = [
    `Шкафы`,
    `Спальня`,
    `Кухня`,
    `Прихожая`,
    `Гостинная`,
    `Спальные гарнитуры`,
    `Мягкая мебель`,
  ];
  const renderArr = () => {
    return arr.map((element) => {
      return (
        <a key={element} className={styles.endText} href="#">
          {element}
        </a>
      );
    });
  };
  const arrOne = [
    "Обеденные зоны",
    `Стулья`,
    `Столы`,
    `Матрасы`,
    `Детская`,
    `Коллекция`,
  ];
  const renderArrOne = () => {
    return arrOne.map((element) => {
      return (
        <a key={element} className={styles.endText} href="#">
          {element}
        </a>
      );
    });
  };
  const arrTwo = [
    `Каталог`,
    `Скидки и акции`,
    `Как купить`,
    `Доставка`,
    `Гарантии`,
    `Оплата`,
  ];
  const renderArrTwo = () => {
    return arrTwo.map((element) => {
      return (
        <a key={element} className={styles.endText} href="#">
          {element}
        </a>
      );
    });
  };
  const arrThree = [`О нас`, `Магазины`, `Оптовикам`, `Контакты`];
  const renderArrThree = () => {
    return arrThree.map((element) => {
      return (
        <a key={element} className={styles.endText} href="#">
          {element}
        </a>
      );
    });
  };
  return (
    <div className={styles.end}>
      <div className={styles.endBox}>
        <div className={styles.endBox__text}>
          <div className={styles.endBox__textOne}>
            <p>Каталог</p>
            <div className={styles.endRedact__text}>{renderArr()}</div>
          </div>
          <div className={styles.endRedact__textTwo}>{renderArrOne()}</div>

          <div className={styles.endRedact__three}>
            <p>Покупателям</p>
            <div className={styles.endRedact__four}>{renderArrTwo()}</div>
          </div>
          <div className={styles.endRedact__five}>
            <p>Всё о Мечте</p>
            <div className={styles.endFive__redact}>{renderArrThree()}</div>
          </div>
          <div className={styles.endRedact__six}>
            <p className={styles.endRedact__textSix}>
              Подпишитесь на лучшие акции и скидки!
            </p>
            <div className={styles.endInput__redact}>
              <input
                placeholder="Введите свой e-mail"
                className={styles.endInput}
              />
            </div>
            <div className={styles.endInput__wrapper}>
              <button
                className={`${styles.endButton}  ${styles.styled}`}
                type="button"
              >
                Подпишись
              </button>
              <h6 className={styles.endButton__text}>
                Нажимая на кнопку, Вы
                <br /> подтверждаете, что согласны
                <br />с политикой конфидециальности
              </h6>
            </div>
          </div>
          <div className={styles.endRedact__seven}>
            <a className={styles.sevenNumber} href="tel:+73812504888">
              +7 3812 50-48-88
            </a>
            <p className={styles.sevenMail}>mechtameb55@mail.ru</p>
            <h6 className={styles.sevenAddress}>Адрес склада:</h6>
            <p className={styles.sevenPlace}>г. Омск, ул. Биофабрика 28/2</p>
            <h6 className={styles.sevenInf}>Время работы склада:</h6>
            <p className={styles.sevenTime}>
              Пн-пт с 9:00 до 19:00,
              <br />
              сб с 9:00 до 15:00,
              <br />
              вс— выходной
            </p>
            <div className={styles.endApplications}>
              <div className={styles.tgIcon__oll}>
                <p className={styles.tgIcon}>
                  <Telegram className={styles.tgIcon_center} />
                </p>
              </div>
              <div className={styles.vkIcon__oll}>
                <p className={styles.vkIcon}>
                   <Messenger1 className={styles.vkIcon_center} />
                </p>
              </div>
              <div className={styles.classIcon__oll}>
                <p className={styles.classIcon}>
                   <Messenger2 className={styles.classIcon_center} />
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
