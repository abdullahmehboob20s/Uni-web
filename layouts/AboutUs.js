import React from "react";
import styles from "scss/layout/AboutUs.module.scss";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2">
        <main>
          <aside>
            <div className={styles.img}></div>
          </aside>
          <section>
            <h1 className="fs-84px white weight-4 mb-30px">ABOUT US</h1>

            <p className="font-secondary fs-22px white lh-1_4 mb-25px">
              Founded in 2020, uniBond is the first-ever company to provide
              designing services for IPFS and Blockchain.
            </p>

            <p className="font-secondary fs-22px white lh-1_4 mb-25px">
              We have partnered with businesses of varied sizes and industries
              to provide them with design solutions dedicated to their unique
              needs.
            </p>

            <p className="font-secondary fs-22px white lh-1_4 mb-25px">
              Our CEO Mizan Anwer Rahi has been in the blockchain industry since
              2016 and brings extensive experience and expertise to the table.
            </p>

            <p className="font-secondary fs-22px white lh-1_4 mb-25px">
              Our broad and deep experience is also a result of our exceptional
              developing team that endeavors to infuse innovation and excellence
              into every project.
            </p>

            <p className="font-secondary fs-22px white lh-1_4">
              We truly believe in supporting the adaptation of this evolved
              version of the internet labeled web3 and helping individuals and
              businesses discover its true potential.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AboutUs;
