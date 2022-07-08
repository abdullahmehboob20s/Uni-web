import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/components/PartnerCard.module.scss";

function PartnerCard({ active }) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}>
      <IKImage
        path="/images/partners-card-img.png"
        className="w-full"
        alt=""
        lqip={{ active: true }}
      />
    </div>
  );
}

export default PartnerCard;
