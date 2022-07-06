import styles from "scss/layout/Navbar.module.scss";
import { GoSearch } from "react-icons/go";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container-wrapper">
        <nav>
          <div className={styles.left}>
            <img
              src="./images/egg.svg"
              className={`${styles.logo} pointer`}
              alt=""
            />

            <div className={styles.inputWrapper}>
              <input type="text" className="white fs-24px" />
              <span>
                <GoSearch className="fs-26px" color="#525252" />
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <button
              className={`fs-24px white uppercase radius-6px pointer ${styles.active}`}
            >
              Homepage
            </button>
            <button className={`fs-24px white uppercase radius-6px pointer `}>
              Contact Us
            </button>
            <button className={`fs-24px white uppercase radius-6px pointer `}>
              My Account
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
