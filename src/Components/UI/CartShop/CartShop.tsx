import React from "react";

import { FaHome, FaTimes } from "react-icons/fa";
import { AiOutlineRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { RiArchive2Line } from "react-icons/ri";
//import { LiaTimesSolid } from "react-icons/lia";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, removeItems, decreaseCart } from "../../../redux/cartSlice";

import styles from "./cartShop.style.module.scss";
import BlockLine from "../BlockLine/BlockLine";
import Button from "../Button/Button";

const CartShop = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const handleRemoveItems = (cartItems) => {
    dispatch(removeItems(cartItems));
  };

  const handleDecrease = (cartItems) => {
    dispatch(decreaseCart(cartItems));
  };

  const handleIncrease = (cartItems) => {
    dispatch(addToCart(cartItems));
  };
  return (
    <div>
      <div className={styles.cartIcons}>
        <h4 className={styles.contactUsh4}>
          <FaHome className={styles.homeIcon} /> Shop{" "}
          <AiOutlineRight className={styles.rightIcon} /> Shop{" "}
          <AiOutlineRight className={styles.rightIcon} />
        </h4>{" "}
        <h4>Cart</h4>
      </div>
      <div>
        <BlockLine/>
      </div>
      <div>
        {cart.cartItems.length === 0 ? (
          <div className={styles.emptyBox}>
            <div className={styles.emptyBoxIcon}>
              <RiArchive2Line>
                <g transform="">
                  <ellipse className={styles.ellipse}></ellipse>
                </g>
              </RiArchive2Line>
            </div>
            <p className={styles.textBox}>No product in this category</p>
          </div>
        ) : (
          <div className={styles.cartShopStyle}>
            <table className={styles.tableCartShop}>
              <thead className={styles.theadMain}>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className={styles.tBody}>
                {cart.cartItems?.map((cartItems) => (
                  <tr key={cartItems.id}>
                    <td>
                      <div className={styles.imgDiv}>
                        <img
                          src={cartItems.img}
                          className={styles.imgStyle}
                        ></img>
                      </div>
                    </td>
                    <td className={styles.name}>{cartItems.tittle}</td>
                    <td className={styles.price}>$ {cartItems.price}</td>
                    <td>
                      <div className={styles.quantityBtn}>
                        <div className={styles.quantityNumber}>
                          {cartItems.cartQuantity}
                        </div>
                        <div className={styles.incDecBtn}>
                          <button
                            className={styles.btnsStyle}
                            onClick={() => handleDecrease(cartItems)}
                          >
                            <span>-</span>
                          </button>
                          <button
                            className={styles.btnsStyle}
                            onClick={() => handleIncrease(cartItems)}
                          >
                            <span>+</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className={styles.total}>
                      $ {cartItems.price * cartItems.cartQuantity}
                    </td>
                    <td>
                      <button
                        className={styles.removeBtn}
                        onClick={() => handleRemoveItems(cartItems)}
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.cartTotal}>
              <h5>CART TOTAL</h5>
              <table className={styles.totalTable}>
                <tbody className={styles.totalTbody}>
                  <tr>
                    <th>SUBTOTAL</th>
                    <td>$ {cartTotalAmount}</td>
                  </tr>
                  <tr>
                    <th>SHIPPING</th>
                    <td>
                      <p>Free Shipping</p>
                      <p>Calculate Shipping</p>
                    </td>
                  </tr>
                  <tr>
                    <th>TOTAL</th>
                    <td>$ {cartTotalAmount}</td>
                  </tr>
                </tbody>
              </table>
              <Link to='/checkout'>
                <Button
                  text="Proceed to Checkout"
                  buttonStyle={styles.buttonStyle}
                  clickFunction={""}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* <Link to="/shopFull">
        <button>
          <AiOutlineArrowLeft />
        </button>
        Go to Products page
      </Link> */}
    </div>
  );
};

export default CartShop;
