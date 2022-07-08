import ShapedButton from "components/ShapedButton";
import React from "react";
import styles from "scss/layout/Hero.module.scss";
import { IKImage } from "imagekitio-react";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <IKImage
        lqip={{ active: true }}
        path="/images/hero-egg.svg"
        className={styles.heroEgg}
        alt=""
      />

      <IKImage
        lqip={{ active: true }}
        path="/images/hero-blob-top-right.png"
        className={styles.heroBlobTopRight}
        alt=""
      />

      <IKImage
        lqip={{ active: true }}
        path="/images/stripe-hero.svg"
        className={styles.heroStripe}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        path="/images/egg-stripe-1.svg"
        className={styles.eggStripe1}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        path="/images/egg-stripe-2.svg"
        className={styles.eggStripe2}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        path="/images/egg-stripe-3.svg"
        className={styles.eggStripe3}
        alt=""
      />

      <div className="container-wrapper-2">
        <div className={styles.hero}>
          <div>
            <h1 className="fs-78px white weight-4 mb-20px">
              LAUNCH YOUR <br /> OWN TOKEN
            </h1>

            <p className="fs-22px white font-secondary weight-3 mb-35px lh-1_4">
              Launch your own unique token with us and seal your smart contracts
              with the reliable security of Block Audit.
            </p>

            <ShapedButton title={"KNOW MORE"} />
          </div>

          <IKImage
            path="/images/hero-egg.png"
            lqip={{ active: true }}
            className={styles.heroRightImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
