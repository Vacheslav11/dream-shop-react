import React from "react";
import Telegram from "../items/telegram";
import Vk from "../items/vk";
import Odnoclassniki from "../items/odnoclassniki";
import styles from "./categories.module.scss";

const Categories = () => {
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
        <a key={element} className={styles.categoriesText} href="#">
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
        <a key={element} className={styles.categoriesText} href="#">
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
        <a key={element} className={styles.categoriesText} href="#">
          {element}
        </a>
      );
    });
  };
  const arrThree = [`О нас`, `Магазины`, `Оптовикам`, `Контакты`];
  const renderArrThree = () => {
    return arrThree.map((element) => {
      return (
        <a key={element} className={styles.categoriesText} href="#">
          {element}
        </a>
      );
    });
  };
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesBox}>
        <div className={styles.categoriesBox__text}>
          <div className={styles.categoriesBox__textOne}>
            <p>Каталог</p>
            <div className={styles.categoriesRedact__text}>{renderArr()}</div>
          </div>
          <div className={styles.categoriesRedact__textTwo}>{renderArrOne()}</div>

          <div className={styles.categoriesRedact__three}>
            <p>Покупателям</p>
            <div className={styles.categoriesRedact__four}>{renderArrTwo()}</div>
          </div>
          <div className={styles.categoriesRedact__five}>
            <p>Всё о Мечте</p>
            <div className={styles.categoriesFive__redact}>{renderArrThree()}</div>
          </div>
          <div className={styles.categoriesRedact__six}>
            <p className={styles.categoriesRedact__textSix}>
              Подпишитесь на лучшие акции и скидки!
            </p>
            <div className={styles.categoriesInput__redact}>
              <input
                placeholder="Введите свой e-mail"
                className={styles.categoriesInput}
              />
            </div>
            <div className={styles.categoriesInput__wrapper}>
              <button
                className={`${styles.categoriesButton}  ${styles.styled}`}
                type="button"
              >
                Подпишись
              </button>
              <h6 className={styles.categoriesButton__text}>
                Нажимая на кнопку, Вы
                <br /> подтверждаете, что согласны
                <br />с политикой конфидециальности
              </h6>
            </div>
          </div>
          <div className={styles.categoriesRedact__seven}>
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
            <div className={styles.categoriesApplications}>
              <div className={styles.tgIcon__oll}>
                <p className={styles.tgIcon}>
                  <Telegram className={styles.tgIcon_center} />
                </p>
              </div>
              <div className={styles.vkIcon__oll}>
                <p className={styles.vkIcon}>
                  <Vk className={styles.vkIcon_center} />
                </p>
              </div>
              <div className={styles.classIcon__oll}>
                <p className={styles.classIcon}>
                  <Odnoclassniki className={styles.classIcon_center} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
