import React from "react";
import styles from "./elementor.styles.module.scss";
import Button from "../Button/Button";

const ElementorRow = () => {
  return (
    <div className={styles.mainElementor}>
      <div className={styles.elementor}>
        <div className={styles.elementorMain}>
          <div>
            <h3>Join Our Newsletter Now</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
          </div>
          <div className={styles.subscribe}>
            <form className={styles.formSubscribe}>
              <input placeholder='Enter your email' className={styles.inputSubscribe} type="text">
                </input>
              {/* <button className={styles.buttonSubscribe}>Subscribe</button> */}
              <Button text='Subscribe' clickFunction={''} buttonStyle={styles.buttonStyle}/>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Copyright © 2019 Ogami - All Rights Reserved.</span>
        <img src="https://ogami-react.vercel.app/assets/images/footer/payment.png" className={styles.cardsImages}></img>
      </div>
    </div>
  );
};

export default ElementorRow;
