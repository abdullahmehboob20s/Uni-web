import ServiceCard from "components/ServiceCard";
import ShapedButton from "components/ShapedButton";
import React from "react";
import styles from "scss/layout/Services.module.scss";

function Services() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2">
        <h1 className="text-center fs-84px white weight-4 mb-120px">
          OUR SERVICES
        </h1>

        <div className={`${styles.chart} mb-80px`}>
          <ServiceCard img="./images/bitcoin.svg" size="35%" direction="left">
            Token <br /> Distribution <br /> Support
          </ServiceCard>
          <ServiceCard
            img="./images/community.svg"
            size="40%"
            direction="right"
          >
            Community
            <br /> Development
          </ServiceCard>
          <ServiceCard img="./images/digital.svg" size="35%" direction="left">
            Digital
            <br /> Strategy
          </ServiceCard>
          <ServiceCard img="./images/security.svg" size="30%" direction="right">
            Security
            <br /> Support
          </ServiceCard>
          <ServiceCard
            img="./images/customer-support.svg"
            size="35%"
            direction="left"
          >
            24/7
            <br /> Customer
            <br /> Services
          </ServiceCard>
          <ServiceCard
            img="./images/end-to-end.svg"
            size="30%"
            direction="right"
          >
            End-To-End <br />
            Encrypted
            <br /> Chat
          </ServiceCard>
        </div>

        <div className="text-center">
          <ShapedButton title="CONNECT NOW" />
        </div>
      </div>
    </div>
  );
}

export default Services;
