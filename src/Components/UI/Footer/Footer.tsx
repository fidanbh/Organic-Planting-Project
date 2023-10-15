import React from "react";
import styles from "./footer.styles.module.scss";
import ElementorRow from "../ElementorRow/ElementorRow";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          <img src="https://i.hizliresim.com/qel1d8j.png"></img>
          <br />
          <span>Address: 60-49 Road 11378 New York</span>
          <br />
          <span>Phone: +65 11.188.888</span>
          <br />
          <span>Email: example@gmail.com</span>
          <br />
          <div className={styles.footerSocDiv}>
            <ul className={styles.footerSocial}>
              <li>
                <GrFacebookOption />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <BiLogoPinterestAlt />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.informationPart}>
          <h4>INFORMATION</h4>
          <ul className={styles.footerDecoration}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to='/checkOut'>Checkout</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to="/about">Service</Link></li>
          </ul>
        </div>
        <div className={styles.accountPart}>
          <h4>MY ACCOUNT</h4>
          <ul className={styles.footerDecoration}>
            <li><Link to="/about">My account</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cartShop'>Shop Cart</Link></li>
            <li><Link to='/orderComplete'>Tracking Order</Link></li>
          </ul>
        </div>
        <div className={styles.quickPart}>
          <h4>QUICK SHOP</h4>
          <ul className={styles.footerDecoration}>
            <li><Link to=''>Shipping & Returns</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/shopFull'>Secure Shopping</Link></li>
            <li><Link to=''>Affiliates</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.elementor}>
        <ElementorRow />
      </div>
    </div>
  );
};

export default Footer;
