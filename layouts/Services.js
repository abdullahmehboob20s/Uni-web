import ServiceCard from "components/ServiceCard";
import ShapedButton from "components/ShapedButton";
import React from "react";
import styles from "scss/layout/Services.module.scss";

function Services() {
  return (
    <div className={styles.wrapper}>
      <img
        src="./images/service-upper-blob.png"
        className={styles.upperBlob}
        alt=""
      />

      <img
        src="./images/services-red-blob.png"
        className={styles.leftRedBlob}
        alt=""
      />

      <div className={`mb-120px ${styles.titleWrapper}`}>
        <img
          src="./images/services-title-stripe.svg"
          className={styles.titleStripe}
          alt=""
        />
        <div className="container-wrapper-2">
          <h1 className="text-center fs-84px white weight-4 ">OUR SERVICES</h1>
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={`${styles.chart} mb-80px`}>
          <img
            src="./images/services-cards-stripe.png"
            className={styles.cardsStripe}
            alt=""
          />

          <img
            src="./images/services-cards-blob.png"
            className={styles.cardBlob}
            alt=""
          />

          <div className={styles.cardsLeft}>
            <ServiceCard img="./images/bitcoin.svg" size="30%" direction="left">
              Token <br /> Distribution <br /> Support
            </ServiceCard>
            <ServiceCard img="./images/digital.svg" size="30%" direction="left">
              Digital
              <br /> Strategy
            </ServiceCard>
            <ServiceCard
              img="./images/customer-support.svg"
              size="30%"
              direction="left"
            >
              24/7
              <br /> Customer
              <br /> Services
            </ServiceCard>
            <ServiceCard
              img="./images/customer-support.svg"
              size="30%"
              direction="left"
            >
              24/7
              <br /> Customer
              <br /> Services
            </ServiceCard>
          </div>

          <div className={styles.cardsRight}>
            <ServiceCard
              img="./images/community.svg"
              size="30%"
              direction="right"
            >
              Community
              <br /> Development
            </ServiceCard>

            <ServiceCard
              img="./images/security.svg"
              size="26%"
              direction="right"
            >
              Security
              <br /> Support
            </ServiceCard>

            <ServiceCard
              img="./images/end-to-end.svg"
              size="26%"
              direction="right"
            >
              End-To-End <br />
              Encrypted
              <br /> Chat
            </ServiceCard>

            <ServiceCard
              img="./images/end-to-end.svg"
              size="26%"
              direction="right"
            >
              End-To-End <br />
              Encrypted
              <br /> Chat
            </ServiceCard>
          </div>
        </div>

        <div className="text-center">
          <ShapedButton title="CONNECT NOW" />
        </div>
      </div>
    </div>
  );
}

export default Services;
