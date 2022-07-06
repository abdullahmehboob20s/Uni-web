import React from "react";
import styles from "scss/components/ServiceCard.module.scss";

function ServiceCard({ direction, children, img, size }) {
  return (
    <div
      className={`${styles.card} ${
        direction === "left" ? styles.left : styles.right
      }`}
    >
      <div className={styles.left}>
        <p className="font-secondary white lh-1_4 weight-6 fs-34px">
          {children}
        </p>
      </div>
      <div className={styles.right}>
        <img src={img} style={{ width: size }} alt="" />
      </div>
    </div>
  );
}

export default ServiceCard;
