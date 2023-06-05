import React from "react";
import constructRoom1 from "../../assets/img/constructRoom.png";
import link from "../../assets/img/link.png";
import linkNone1 from "../../assets/img/linkNone.png";
import bedside from "../../assets/img/bedside.png";
import styles from "./construct.module.scss";

const Construct = () => {
  const arr = [`Кухня`, `Спальня`, `Гостиная`, `Прихожая`, `Детская`];
  const renderArr = () => {
    return arr.map((element, index) => {
      return (
        <a
          key={`${element}-${index}`}
          href="#"
          className={styles.constructText__sofa}
        >
          {element}
        </a>
      );
    });
  };
  return (
    <div className={styles.construct}>
      <div className={styles.constructLeft}>
        <div className={styles.constructLeft}>
          <a className={styles.constructText__name}>Идеи для вдохновения</a>
          <div className={styles.constructMenu}>{renderArr()}</div>
        </div>
        <div className={styles.constructBox_oll}>
          <div className={styles.constructBox}>
            <div className={styles.constructBox_one}>
              <img
                src={constructRoom1}
                alt=""
                className={styles.constructBox__img}
              />
              <div className={styles.constructBox__group}>
                <p className={styles.constructBox__text}>Бруклин</p>
                <p className={styles.constructBox__textTwo}>Комод</p>
                <a href="#">
                  <svg
                    className={styles.boxSvg__favorite}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="#333"
                      d="M12.5 4.498l-.848.53.847 1.358.849-1.357-.848-.53zm0 19.495l-.64.768a1 1 0 001.195.064l-.555-.832zm.848-18.964c.987-1.578 3.261-2.418 5.332-1.867a4.62 4.62 0 012.634 1.85c.695.994 1.186 2.447 1.186 4.49h2c0-2.364-.571-4.24-1.548-5.636a6.62 6.62 0 00-3.757-2.637c-2.804-.746-6.03.32-7.543 2.74l1.696 1.06zM22.5 9.502c0 1.965-.833 4.182-2.6 6.532-1.763 2.347-4.42 4.772-7.954 7.127l1.109 1.664c3.665-2.442 6.508-5.013 8.444-7.589 1.934-2.571 3.001-5.201 3.001-7.734h-2zm-9.36 13.722C11.572 21.92 8.921 20 6.6 17.557c-2.331-2.452-4.1-5.207-4.1-8.055h-2c0 3.648 2.231 6.889 4.65 9.433 2.429 2.555 5.278 4.634 6.71 5.826l1.28-1.537zM2.5 9.502c0-2.04.491-3.493 1.187-4.487A4.626 4.626 0 016.32 3.162c2.072-.553 4.345.286 5.332 1.866l1.696-1.06C11.835 1.546 8.608.483 5.805 1.23a6.626 6.626 0 00-3.757 2.638C1.07 5.264.5 7.14.5 9.502h2z"
                    />
                  </svg>
                </a>
                <p className={styles.constructBox__textHm}>11 750 ₽</p>
                <p className={styles.constructBox__textNone}>13 450 ₽</p>

                <svg
                  className={styles.boxSvg__basket}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path fill="#fff" d="M0.5 0H24.5V24H0.5z" />
                  <path
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.5 23a1 1 0 100-2 1 1 0 000 2zM20.5 23a1 1 0 100-2 1 1 0 000 2zM1.5 1h4l2.68 15.175c.091.522.342.99.708 1.324.365.334.823.51 1.292.5h9.72c.47.01.927-.166 1.293-.5.365-.334.616-.802.707-1.324l1.6-9.508h-17"
                  />
                </svg>
              </div>
              <p>
                <a href="#">
                  <img src={link} alt="" className={styles.constructLink} />
                </a>
              </p>
              <p>
                <a href="#">
                  <img
                    src={linkNone1}
                    alt=""
                    className={styles.constructLink_none}
                  />
                </a>
              </p>
              <p>
                <a href="#">
                  <img
                    src={link}
                    alt=""
                    className={styles.constructLink__back}
                  />
                </a>
              </p>
            </div>
            <p>
              <a href="#">
                <img src={link} alt="" className={styles.constructLink__left} />
              </a>
            </p>
          </div>
          <div className={styles.constructBox__left}>
            <img
              className={styles.constructBox__leftImg}
              src={bedside}
              alt=""
            />
            <div className={styles.constructBox_border}>
              <div className={styles.testBorder__left}>
                <a className={styles.constructBox_line} />
                <a className={styles.constructBox_line_all} />
                <div className={styles.test}>
                  <p className={styles.testBorder} />
                  <p className={`${styles.arrow} ${styles.left}`} />
                </div>
              </div>
              <div className={styles.testBorder__right}>
                <div className={styles.test}>
                  <p className={styles.testBorder} />
                  <p className={`${styles.arrow} ${styles.right}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construct;
