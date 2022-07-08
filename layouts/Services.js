import ServiceCard from "components/ServiceCard";
import ShapedButton from "components/ShapedButton";
import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/layout/Services.module.scss";

function Services() {
  return (
    <div className={styles.wrapper}>
      <IKImage
        path="/images/service-upper-blob.png"
        lqip={{ active: true }}
        className={styles.upperBlob}
        alt=""
      />

      <IKImage
        path="/images/services-red-blob.png"
        lqip={{ active: true }}
        className={styles.leftRedBlob}
        alt=""
      />

      <div className={`mb-120px ${styles.titleWrapper}`}>
        <IKImage
          path="/images/services-title-stripe.svg"
          lqip={{ active: true }}
          className={styles.titleStripe}
          alt=""
        />
        <div className="container-wrapper-2">
          <h1 className="text-center fs-84px white weight-4 ">OUR SERVICES</h1>
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={`${styles.chart} mb-80px`}>
          <IKImage
            path="/images/services-cards-stripe.png"
            lqip={{ active: true }}
            className={styles.cardsStripe}
            alt=""
          />

          <IKImage
            path="/images/services-cards-blob.png"
            lqip={{ active: true }}
            className={styles.cardBlob}
            alt=""
          />

          <div className={styles.cardsLeft}>
            <ServiceCard img="/images/bitcoin.svg" size="30%" direction="left">
              Token <br /> Distribution <br /> Support
            </ServiceCard>
            <ServiceCard img="/images/digital.svg" size="30%" direction="left">
              Digital
              <br /> Strategy
            </ServiceCard>
            <ServiceCard
              img="/images/customer-support.svg"
              size="30%"
              direction="left"
            >
              24/7
              <br /> Customer
              <br /> Services
            </ServiceCard>
            <ServiceCard
              img="/images/customer-support.svg"
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
              img="/images/community.svg"
              size="30%"
              direction="right"
            >
              Community
              <br /> Development
            </ServiceCard>

            <ServiceCard
              img="/images/security.svg"
              size="26%"
              direction="right"
            >
              Security
              <br /> Support
            </ServiceCard>

            <ServiceCard
              img="/images/end-to-end.svg"
              size="26%"
              direction="right"
            >
              End-To-End <br />
              Encrypted
              <br /> Chat
            </ServiceCard>

            <ServiceCard
              img="/images/end-to-end.svg"
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
