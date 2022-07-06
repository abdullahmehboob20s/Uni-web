import React from "react";
import styles from "scss/components/PartnerCard.module.scss";

function PartnerCard({ active }) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}></div>
  );
}

export default PartnerCard;
