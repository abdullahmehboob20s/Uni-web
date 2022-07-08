import styles from "scss/layout/Navbar.module.scss";
import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isBellow1550px = useMediaQuery("(max-width : 96.875em)");
  const sidebarRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-wrapper">
        <nav>
          <div className={styles.left}>
            <img
              src="./images/egg.svg"
              className={`${styles.logo} pointer`}
              alt=""
            />

            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={`white ${isBellow1550px ? "fs-16px" : "fs-18px"}`}
              />
              <span>
                <GoSearch className="fs-26px" color="#525252" />
              </span>
            </div>
          </div>

          <button
            className={`${styles.hamburger} pointer`}
            onClick={() => setIsOpen((val) => !val)}
          >
            <FiMenu size={30} color="white" />
          </button>

          <div
            className={`${styles.right} ${isOpen ? styles.active : ""}`}
            ref={sidebarRef}
          >
            <button
              className={styles.closeNavbarBtn}
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={30} color="white" />
            </button>
            <button
              className={`${
                isBellow1550px ? "fs-16px" : "fs-18px"
              } white uppercase radius-6px pointer ${styles.active}`}
            >
              Homepage
            </button>
            <button
              className={`${
                isBellow1550px ? "fs-16px" : "fs-18px"
              } white uppercase radius-6px pointer `}
            >
              Contact Us
            </button>
            <button
              className={`${
                isBellow1550px ? "fs-16px" : "fs-18px"
              } white uppercase radius-6px pointer `}
            >
              My Account
            </button>
          </div>
        </nav>

        <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
      </div>
    </div>
  );
}

export default Navbar;
