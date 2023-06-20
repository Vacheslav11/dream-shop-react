import React from "react";
import sofaImage1 from "../../assets/img/sofaImage.png";
import background1 from "../../assets/img/background.png";
import wing1 from "../../assets/img/wing.png";
import bacWind1 from "../../assets/img/bacWing.png";
import hallway1 from "../../assets/img/hallway.png";
import bacHallway from "../../assets/img/hallwayBac.png";
import bed1 from "../../assets/img/bed.png";
import bedBac1 from "../../assets/img/bedBac.png";
import armchair1 from "../../assets/img/armchair.png";
import armchairBac1 from "../../assets/img/armchairBac.png";
import hallwayImage1 from "../../assets/img/hallwayImage.png";
import hallwayBac from "../../assets/img/hallwayBackground.png";
import kitchen1 from "../../assets/img/kitchen.png";
import kitchenBac1 from "../../assets/img/kitchenBac.png";
import bedroom1 from "../../assets/img/bedroom.png";
import bedroomBac1 from "../../assets/img/bedroomBac.png";
import styles from "./cover.module.scss";

const Cover = () => {
  const items = [
    {
      background: "rgba(201, 201, 201, 0.21)",
      backgroundImage: `url(${sofaImage1}),url(${background1})`,
    },
    {
      background: " linear-gradient(90deg, #DFE9F3 0%, #FFFFFF 100%)",
      backgroundImage: `url(${wing1}),url(${bacWind1})`,
    },
    {
      background: "linear-gradient(90deg, #E3FDF5 0%, #FFE6FA 100%)",
      backgroundImage: `url(${hallway1}),url(${bacHallway})`,
    },
    {
      background: "linear-gradient(90deg, #FFFEFF 0%, #D7FFFE 100%)",
      backgroundImage: `url(${bed1}),url(${bedBac1})`,
    },
    {
      background: "linear-gradient(90deg, #DFE9F3 0%, #FFFFFF 100%)",
      backgroundImage: `url(${armchair1}),url(${armchairBac1})`,
    },
    {
      background:
        "linear-gradient(90deg, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%)",
      backgroundImage: `url(${hallwayImage1}),url(${hallwayBac})`,
    },
    {
      background: "linear-gradient(90deg, #FDFCFB 0%, #E2D1C3 100%)",
      backgroundImage: `url(${kitchen1}),url(${kitchenBac1})`,
    },
    {
      background: "linear-gradient(90deg, #E6E9F0 0%, #EEF1F5 100%)",
      backgroundImage: `url(${bedroom1}),url(${bedroomBac1})`,
    },
  ];
  const renderItems = () => {
    return items.map((item, index) => {
      const { background, backgroundImage } = item;
      return (
        <div
          key={index}
          className={styles.coverImage__sofa}
          style={{ background }}
        >
          <div
            className={styles.coverImage__sofaImage}
            style={{ backgroundImage }}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <div className={styles.cover}>
        <div className={styles.coverBac}>
          <div className={styles.coverText}>
            <p>Хочется сэкономить?</p>
          </div>
          <div className={styles.coverText__discount}>
            <p>
              Скидка 5% <br /> при самовывозе
            </p>
          </div>
        </div>
      </div>
      <div className={styles.coverImage}>{renderItems()}</div>
    </div>
  );
};

export default Cover;
