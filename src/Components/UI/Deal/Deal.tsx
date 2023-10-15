import React from "react";

import { BsHeartPulse } from "react-icons/bs";
import { LiaHandshakeSolid } from "react-icons/lia";

import styles from "./deal.styles.module.scss";

const Deal = () => {
  return (
    <div className={styles.dealSection}>
      <div className={styles.deal_tittle}>
        <h2>Deal of the Week</h2>
        <span className={styles.dealDecoration}></span>
      </div>
      <div>
        <div className={styles.deal_section}>
          <div>
            <div className={styles.sections}>
              <div className={styles.sections_text}>
                <h4>Eat Healthier</h4>
                <p>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
              <div className={styles.check}>
                <div className={styles.sections_image}>
                  <img src="https://i.hizliresim.com/c7ctkh2.png"></img>
                </div>
              </div>
            </div>
            <div className={styles.sections}>
              <div className={styles.sections_text}>
                <h4>We Have Brands</h4>
                <p>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
              <div>
                <div className={styles.sections_image}>
                  <img src="https://i.hizliresim.com/mhqkztv.png"></img>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainImage}>
            <div>
              <img src="https://i.hizliresim.com/sjrtx5j.png"></img>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.sections}>
              <div>
                <div className={styles.sections_image}>
                  <img src="https://i.hizliresim.com/c1bz9ox.png"></img>
                </div>
              </div>
              <div className={styles.sections_textPart2}>
                <h4>Fresh And Clean Products</h4>
                <p>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
            </div>
            <div className={styles.sections}>
              <div>
                <div className={styles.sections_image}>
                  <img src="https://i.hizliresim.com/iwxx9lf.png"></img>
                </div>
              </div>
              <div className={styles.sections_textPart2}>
                <h4>Modern Process</h4>
                <p>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
