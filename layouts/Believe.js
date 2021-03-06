import React from "react";
import styles from "scss/layout/Believe.module.scss";
import { IKImage } from "imagekitio-react";

function Believe() {
  return (
    <div className={styles.wrapper}>
      <IKImage
        path="images/belive-stripe-1.svg"
        className={styles.believeStripe1}
        loading="lazy"
      />

      <div className="container-wrapper-2">
        <div className={styles.container}>
          <div className={styles.left}>
            <IKImage path="images/tiles.png" />
          </div>
          <div className={styles.right}>
            <h1 className="fs-80px white mb-20px weight-4 text-right">
              WE BELIEVE
            </h1>
            <p className="fs-16px white font-secondary lh-1_5 text-right">
              We believe in the technological future of Web3. Hence we help new
              web3 projects find their supporters and clients. We believe in the
              t their supporters and clients. We believe in the technological
              future of Web3. Hence wechnological future of Web3. Hence we help
              new web3 projects find their supporters and clients.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Believe;
