import { IKImage } from "imagekitio-react";
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
        <p className="font-secondary white lh-1_4 weight-6">{children}</p>
      </div>
      <div className={styles.right}>
        {/* <IKImage
          path="/images/services-cards-blob.png"
          className={styles.cardBlob}
          alt=""
        /> */}
        <IKImage
          path={img}
          lqip={{ active: true }}
          style={{ width: size }}
          alt=""
        />
      </div>
    </div>
  );
}

export default ServiceCard;
