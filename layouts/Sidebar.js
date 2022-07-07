import React from "react";
import styles from "scss/layout/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <button className={`pointer ${styles.active}`}>
        <img src="./images/icons/homeicon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/bagicon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/currenticon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/communityicon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/bitcoinicon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/locationicon.svg" alt="" />
      </button>
      <button className={`pointer`}>
        <img src="./images/icons/bitcoiniconyellow.svg" alt="" />
      </button>
      <button className={`pointer ${styles.baggingIcon}`}>
        <img src="./images/icons/bagging.svg" alt="" />
      </button>
    </div>
  );
}

export default Sidebar;
