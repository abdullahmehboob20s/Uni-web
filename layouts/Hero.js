import ShapedButton from "components/ShapedButton";
import React from "react";
import styles from "scss/layout/Hero.module.scss";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <img src="./images/hero-egg.svg" className={styles.heroEgg} alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
