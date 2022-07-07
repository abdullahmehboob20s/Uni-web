import React from "react";
import styles from "scss/layout/Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import useMediaQuery from "hooks/useMediaQuery";

function Footer() {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)"); // 760px

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2">
        <div className={styles.footer}>
          <div className={`${styles.line} mb-50px`}></div>

          <div className={`${styles.eggBoxOuter} mb-50px`}>
            <img src="./images/egg.svg" className="mb-15px" alt="" />
            <p className="font-secondary white fs-24px weight-6">uni.Bond</p>
          </div>

          <div className="mb-70px">
            <div className={`${styles.footerColumn} `}>
              <div className={styles.eggBox}>
                <img src="./images/egg.svg" className="mb-15px" alt="" />
                <p className="font-secondary white fs-24px weight-6">
                  uni.Bond
                </p>
              </div>

              <div className={styles.desc}>
                <h4 className="fs-20px weight-4 mb-15px">ABOUT US</h4>
                <p className="font-secondary white fs-16px white lh-1_8">
                  uniBond is the first-ever company to provide designing
                  services for IPFS and Blockchain. uniBond is the first-ever
                  company to provide designing services for IPFS and Blockchain.
                  uniBond is the first-ever company to provide designing
                  services.
                </p>
              </div>
              <div className={styles.box}>
                <h4 className="fs-20px weight-4 mb-15px">COMPANY</h4>

                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  What We Do
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  What We Think
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer"
                >
                  Careers
                </a>
              </div>
              <div className={styles.box}>
                <h4 className="fs-20px weight-4 mb-15px">COMPANY</h4>

                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  What We Do
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  What We Think
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer"
                >
                  Careers
                </a>
              </div>

              <div className={styles.box}>
                <h4 className="fs-20px weight-4 mb-15px">iNTRODUCTION</h4>

                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  {" "}
                  Team
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  Our Partners
                </a>
                <a
                  href="#"
                  className="block font-secondary fs-16px white pointer mb-20px"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles.footerLinks} mb-40px`}>
            <p className="white fs-30px wieght-4">CONNECT WITH US -</p>

            <div className={`${styles.SocialLinks}`}>
              <a href="#">
                <FaFacebook color="white" size={isBellow760px ? 24 : 34} />
              </a>
              <a href="#">
                <FaTwitter color="white" size={isBellow760px ? 24 : 34} />
              </a>
              <a href="#">
                <BsDiscord color="white" size={isBellow760px ? 22 : 32} />
              </a>
              <a href="#">
                <MdEmail color="white" size={isBellow760px ? 24 : 34} />
              </a>
              <a href="#">
                <FaInstagram color="white" size={isBellow760px ? 24 : 34} />
              </a>
              <a href="#">
                <BsLinkedin color="white" size={isBellow760px ? 20 : 30} />
              </a>
              <a href="#">
                <BsGithub color="white" size={isBellow760px ? 24 : 34} />
              </a>
            </div>
          </div>

          <div className={styles.footerCopyright}>
            <p className="white opacity-0_6 font-secondary fs-18px">
              All Rights Reserved - uni.Bond 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
