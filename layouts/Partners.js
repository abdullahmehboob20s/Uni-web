import PartnerCard from "components/PartnerCard";
import React from "react";
import styles from "scss/layout/Partners.module.scss";

function Partners() {
  return (
    <div>
      <div className="container-wrapper-3">
        <h1 className="fs-70px white mb-80px text-center">
          PARTNERS & INSPIRATIONS
        </h1>

        <div className={styles.cards}>
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard active={true} />
          <PartnerCard active={true} />
          <PartnerCard active={true} />
          <PartnerCard active={true} />
          <PartnerCard active={true} />
          <PartnerCard active={true} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
