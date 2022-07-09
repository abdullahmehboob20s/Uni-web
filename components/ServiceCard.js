import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/components/ServiceCard.module.scss";

function ServiceCard({ direction, children, img, size, title, desc }) {
  return (
    <div
      className={`${styles.card} ${
        direction === "left" ? styles.left : styles.right
      }`}
    >
      <IKImage
        path={
          direction === "left"
            ? "/images/services-left-border.png"
            : "/images/services-right-border.png"
        }
        lqip={{ active: true }}
        style={{ width: size }}
        alt=""
        className={styles.cardBorder}
      />

      <div className={styles.leftSection}>
        <h1>{title}</h1>
        <p className="font-secondary lh-1_6">{desc}</p>
      </div>
      <div className={styles.rightSection}>
        <IKImage
          path={
            direction === "left"
              ? "/images/services-left-icon-bg.png"
              : "/images/services-right-icon-bg.png"
          }
          alt=""
          lqip={{ active: true }}
          className={styles.cardIconBG}
        />
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
