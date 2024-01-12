import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
const Button = ({ title, handleClick, props }) => {
  return (
    <button
      className={classNames(styles.button)}
      onClick={handleClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
