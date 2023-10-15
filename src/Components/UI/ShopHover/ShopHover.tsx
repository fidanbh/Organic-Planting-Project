import React from "react";
import { Link } from "react-router-dom";
import styles from "./shopHover.style.module.scss";

const ShopHover = ({shopHover,parts,textSpan,list}) => {
  return (
    <div className={shopHover}>
      <div className={parts}>
        <span className={textSpan}>Layout Shop</span>
        <ul className={list}>
          <li>
            <Link to="/shopFull">Shop Fullwidth</Link>
          </li>
          <li>
            <Link to="/shopFull">Shop 3 Column</Link>
          </li>
        </ul>
      </div>
      <div className={parts}>
        <span className={textSpan}>Detail Shop</span>
        <ul className={list}>
          <li>
            <Link to="/">Shop Detail Fullwidth</Link>
          </li>
          <li>
            <Link to="/">Shop Detail Sidebar</Link>
          </li>
        </ul>
      </div>
      <div className={parts}>
        <span className={textSpan}>Pages Shop</span>
        <ul className={list}>
          <li>
            <Link to="/checkOut">Checkout</Link>
          </li>
          <li>
            <Link to="/orderComplete">Order Complete</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/cartShop">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopHover;
