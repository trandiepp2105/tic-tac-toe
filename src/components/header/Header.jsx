import React from "react";
import styles from "./Header.module.css";
import { AspectRatio } from "react-aspect-ratio";
import Button from "../button/Button";

//Close menu icon
import { RiMenuFoldFill } from "react-icons/ri";
//User icon
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <AspectRatio ratio={"1/1"} style={{ height: "100%" }}>
          <div className={styles.wrapperMenuIcon}>
            <RiMenuFoldFill className={styles.icon} />
          </div>
        </AspectRatio>
        <div className={styles.gameBrand}>
          GAME <br />
          EASY
        </div>
      </div>
      <div className={styles.rightSide}>
        <Button title={"Đăng nhập"} />
        <AspectRatio ratio="1/1" style={{ height: "100%" }}>
          <div className={styles.wrapperUserIcon}>
            <FaRegUser className={styles.icon} />
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default Header;
