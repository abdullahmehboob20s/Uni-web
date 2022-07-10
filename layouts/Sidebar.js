import { IKImage } from "imagekitio-react";
import Link from "next/link";
import React, { useState } from "react";
import styles from "scss/layout/Sidebar.module.scss";

function Sidebar() {
  const [id, setId] = useState("1");

  const IDhandler = (givenID) => {
    setId(givenID);
  };

  return (
    <div className={styles.sidebar}>
      <Link href="#" passHref>
        <button
          className={`pointer ${id === "1" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="1"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/homeicon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "2" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="2"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/bagicon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "3" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="3"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/currenticon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "4" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="4"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/communityicon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "5" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="5"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/bitcoinicon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "6" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="6"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/locationicon.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "7" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="7"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/bitcoiniconyellow.svg"
            alt=""
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer ${styles.baggingIcon}  ${
            id === "8" ? styles.active : ""
          }`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="8"
        >
          <IKImage
            lqip={{ active: true }}
            path="/images/icons/bagging.svg"
            alt=""
          />
        </button>
      </Link>
    </div>
  );
}

export default Sidebar;
