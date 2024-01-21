import React from "react";
import styles from "./VictoryPopup.module.css";
import RatingStars from "../rating-stars/RatingStars";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";

const VictoryPopup = ({ stars, props, handleReMatchBtn, handleHomeBtn }) => {
  return (
    <div className={styles.wrapperPopup} {...props}>
      <h1 className={styles.heading}>PLAYER 1 WIN !!</h1>
      <div className={styles.wraperRatingStars}>
        <RatingStars numberOfActiveStar={stars} />
      </div>

      <div className={styles.footerBtn}>
        <button type="submit" onClick={handleReMatchBtn} className={styles.btn}>
          <TfiReload className={styles.iconBtn} />
        </button>

        <button type="submit" onClick={handleHomeBtn} className={styles.btn}>
          <FaHouseChimneyWindow className={styles.iconBtn} />
        </button>
      </div>
    </div>
  );
};

export default VictoryPopup;
