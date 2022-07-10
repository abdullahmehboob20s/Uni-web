import React from "react";
import styles from "scss/components/ShapedButton.module.scss";

function ShapedButton({ title, className, fsSize = "fs-30px" }) {
  return (
    <button
      className={`${styles.button} ${className} ${fsSize} black pointer weight-5`}
    >
      {title}
    </button>
  );
}

export default ShapedButton;
