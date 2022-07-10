import ServiceCard from "components/ServiceCard";
import ShapedButton from "components/ShapedButton";
import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/layout/Services.module.scss";

function Services() {
  const isBellow700px = useMediaQuery("(max-width : 43.75em)");
  return (
    <div className={styles.wrapper}>
      {/* <IKImage
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
      /> */}

      <div className={`mb-60px ${styles.titleWrapper}`}>
        {/* <IKImage
          path="/images/services-title-stripe.svg"
          lqip={{ active: true }}
          className={styles.titleStripe}
          alt=""
        /> */}
        <div className="container-wrapper-2">
          <h1 className="text-center fs-84px white weight-4 ">OUR SERVICES</h1>
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={`${styles.chart}`}>
          <IKImage
            path="/images/services-tree.png"
            lqip={{ active: true }}
            className={styles.cardsStripe}
            alt=""
          />

          <IKImage
            path="/images/services-circle-red-blob.png"
            lqip={{ active: true }}
            className={styles.cardBlob}
            alt=""
          />

          {/* <IKImage
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
          /> */}

          <div className={styles.cardsLeft}>
            <ServiceCard
              title="Token Distribution Support"
              desc="A token is only as valuable as much it is distributed, we can help you with that."
              img="/images/bitcoin.svg"
              size="40%"
              direction="left"
            ></ServiceCard>
            <ServiceCard
              title="Digital Strategy"
              desc="Branding in the digital space using years oe experience on all different platforms."
              img="/images/digital.svg"
              size="40%"
              direction="left"
            ></ServiceCard>
            <ServiceCard
              title="24/7 Customer Services"
              desc="We will be available to you, whenever you need. Round the clock. "
              img="/images/customer-support.svg"
              size="40%"
              direction="left"
            ></ServiceCard>
            <ServiceCard
              title="24/7 Customer Services"
              desc="We will be available to you, whenever you need. Round the clock. "
              img="/images/customer-support.svg"
              size="40%"
              direction="left"
            ></ServiceCard>
          </div>

          <div className={styles.cardsRight}>
            <ServiceCard
              title="Community Development"
              desc="Creating an engaging and profitable community around your brand. "
              img="/images/community.svg"
              size="40%"
              direction="right"
            ></ServiceCard>

            <ServiceCard
              title="Security Support"
              desc="Making sure your product is secure against cyber attacks."
              img="/images/security.svg"
              size="32%"
              direction="right"
            ></ServiceCard>

            <ServiceCard
              title="End-To-End Encrypted Chat"
              desc="Implementing privacy protocols within chat service."
              img="/images/end-to-end.svg"
              size="32%"
              direction="right"
            ></ServiceCard>

            <ServiceCard
              title="End-To-End Encrypted Chat"
              desc="Implementing privacy protocols within chat service."
              img="/images/end-to-end.svg"
              size="32%"
              direction="right"
            ></ServiceCard>
          </div>
        </div>

        <div className="text-center">
          <ShapedButton
            title="CONNECT NOW"
            className={styles.shapedButton}
            fsSize={isBellow700px ? "fs-10px" : "fs-22px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
