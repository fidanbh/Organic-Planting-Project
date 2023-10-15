import React from "react";

import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, removeItems, decreaseCart } from "../../../redux/cartSlice";

import styles from "./orderComplete.style.module.scss";
import BlockLine from "../BlockLine/BlockLine";

const OrderCpmplete = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  //console.log(cart);

  return (
    <div>
      <div className={styles.cartIcons}>
        <h4 className={styles.textColor}>
          <FaHome className={styles.cartIcon} /> Shop{" "}
          <AiOutlineRight className={styles.cartIcon} /> Shop{" "}
          <AiOutlineRight className={styles.cartIcon} />
        </h4>{" "}
        <h4>Order Complete</h4>
      </div>
      <div>
        <BlockLine />
      </div>
      <div>
        <h1 className={styles.text}>
          Congratulation! You’ve{" "}
          <span className={styles.complspan}>completed</span> payment
        </h1>
      </div>
    </div>
  );
};

export default OrderCpmplete;
