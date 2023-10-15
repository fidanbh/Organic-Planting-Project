import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { RiArchive2Line } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, removeItems, decreaseCart } from "../../../redux/cartSlice";

import styles from "./checkOut.style.module.scss";
import BlockLine from "../BlockLine/BlockLine";
import Button from "../Button/Button";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  return (
    <div>
      <div className={styles.cartIcons}>
        <h4 className={styles.contactUsh4}>
          <FaHome className={styles.homeIcon} /> Shop{" "}
          <AiOutlineRight className={styles.rightIcon} /> Shop{" "}
          <AiOutlineRight className={styles.rightIcon} />
        </h4>{" "}
        <h4>Checkout</h4>
      </div>
      <div>
        <BlockLine />
      </div>
      <div>
        {cart.cartItems.length === 0 ? (
          <div>
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
          </div>
        ) : (
          <div className={styles.checkout}>
            <div>
              <h3 className={styles.billingTittle}>Billing Details</h3>
              <form>
                <div className={styles.inputName}>
                  <div>
                    <label>
                      <span className={styles.redSpan}>*</span> First name
                    </label>
                    <br></br>
                    <input required className={styles.input}></input>
                  </div>
                  <div className={styles.inputLast}>
                    <label>
                      <span className={styles.redSpan}>*</span> Last name
                    </label>
                    <br></br>
                    <input required className={styles.input}></input>
                  </div>
                </div>
                <div className={styles.labelStyle}>
                  <label>Company name (optional)</label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>
                    <span className={styles.redSpan}>*</span> Country
                  </label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>
                    <span className={styles.redSpan}>*</span> Street address
                  </label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>Postcode / ZIP (optional)</label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>
                    <span className={styles.redSpan}>*</span> Town / City
                  </label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>
                    <span className={styles.redSpan}>*</span> Phone
                  </label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <div className={styles.labelStyle}>
                  <label>
                    <span className={styles.redSpan}>*</span> Email address
                  </label>
                  <br></br>
                  <input required className={styles.inputCompany}></input>
                </div>
                <h3>Shipping Address</h3>
                <div className={styles.labelStyle}>
                  <input type="checkbox" value="ship"></input>
                  <label> Ship to a different address?</label>
                  <br></br>
                </div>
                <div className={styles.textAreaDiv}>
                  <label>Order notes (optional)</label>
                  <br></br>
                  <textarea className={styles.textarea}></textarea>
                </div>
              </form>
            </div>
            <div className={styles.billing}>
              <h3 className={styles.billingTittle}>Your order</h3>
              <div>
                <table>
                  <tbody>
                    {cart.cartItems?.map((item) => (
                      <tr className={styles.trBody}>
                        <td className={styles.tdBody}>
                          {item.tittle} x {item.cartQuantity}{" "}
                        </td>
                        <td className={styles.tdprice}>
                          $ {item.price * item.cartQuantity}
                        </td>
                      </tr>
                    ))}
                    <tr className={styles.total}>
                      <th>SUBTOTAL</th>
                      <td className={styles.priceColor}>${cartTotalAmount}</td>
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
                      <td className={styles.priceColor}>$ {cartTotalAmount}</td>
                    </tr>
                  </tbody>
                  <Link to="/orderComplete">
                    <Button
                      text="PLACE ORDER"
                      clickFunction={""}
                      buttonStyle={styles.buttonShop}
                    />
                  </Link>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
