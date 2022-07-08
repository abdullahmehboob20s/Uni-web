import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/components/PartnerCard.module.scss";

function PartnerCard({ active }) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}>
      <IKImage
        path="/images/partners-card-img.png"
        loading="lazy"
        className="w-full"
        lqip={{ active: true }}
        alt=""
      />
    </div>
  );
}

export default PartnerCard;
