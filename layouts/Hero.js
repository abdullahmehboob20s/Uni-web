import ShapedButton from "components/ShapedButton";
import React from "react";
import styles from "scss/layout/Hero.module.scss";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <img src="./images/hero-egg.svg" className={styles.heroEgg} alt="" />

      <img
        src="./images/hero-blob-top-right.png"
        className={styles.heroBlobTopRight}
        alt=""
      />

      <img
        src="./images/stripe-hero.svg"
        className={styles.heroStripe}
        alt=""
      />
      <img
        src="./images/egg-stripe-1.svg"
        className={styles.eggStripe1}
        alt=""
      />
      <img
        src="./images/egg-stripe-2.svg"
        className={styles.eggStripe2}
        alt=""
      />
      <img
        src="./images/egg-stripe-3.svg"
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

          <img
            src="./images/hero-egg.png"
            className={styles.heroRightImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
