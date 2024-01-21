import { React } from "react";
import styles from "./RatingStars.module.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const RatingStars = ({ numberOfActiveStar, size, color, props }) => {
  const stars = [];
  for (let i = 1; i <= numberOfActiveStar; i++) {
    let star = <FaStar key={i} className={styles.star} />;
    stars.push(star);
  }

  if (numberOfActiveStar < 5) {
    for (let i = numberOfActiveStar + 1; i <= 5; i++) {
      let emptyStar = <CiStar key={"empty" + i} className={styles.star} />;
      stars.push(emptyStar);
    }
  }

  return (
    <div className={styles.container} {...props}>
      {stars.map((star) => {
        return star;
      })}
    </div>
  );
};

export default RatingStars;
