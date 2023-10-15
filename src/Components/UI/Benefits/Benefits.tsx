import React from "react";
import styles from "./benefits.styles.module.scss";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefits_parts}>
        <img src="https://i.hizliresim.com/sqgqht2.png" className={styles.benefitImage}></img>
        <h5>FREE SHIPPING</h5>
        <p>For all order over 99$</p>
      </div>
      <div className={styles.benefits_parts}>
        <img src="https://i.hizliresim.com/inupvgn.png"></img>
        <h5>DELIVERY ON TIME</h5>
        <p>If good have prolems</p>
      </div>
      <div className={styles.benefits_parts}>
        <img src="https://i.hizliresim.com/ljje0n6.png"></img>
        <h5>SECURE PAYMENT</h5>
        <p>100% secure payment</p>
      </div>
    </div>
  );
};

export default Benefits;
