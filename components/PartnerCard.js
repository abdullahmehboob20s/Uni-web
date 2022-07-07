import React from "react";
import styles from "scss/components/PartnerCard.module.scss";

function PartnerCard({ active }) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}>
      <img src="./images/partners-card-img.png" className="w-full" alt="" />
    </div>
  );
}

export default PartnerCard;
