import React from "react";
import styles from "scss/components/ShapedButton.module.scss";

function ShapedButton({ title }) {
  return (
    <button className={`${styles.button} fs-30px black pointer weight-5`}>
      {title}
    </button>
  );
}

export default ShapedButton;
