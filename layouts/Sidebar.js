import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/layout/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <button className={`pointer ${styles.active}`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/homeicon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/bagicon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/currenticon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/communityicon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/bitcoinicon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/locationicon.svg"
          alt=""
        />
      </button>
      <button className={`pointer`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/bitcoiniconyellow.svg"
          alt=""
        />
      </button>
      <button className={`pointer ${styles.baggingIcon}`}>
        <IKImage
          lqip={{ active: true }}
          path="/images/icons/bagging.svg"
          alt=""
        />
      </button>
    </div>
  );
}

export default Sidebar;
