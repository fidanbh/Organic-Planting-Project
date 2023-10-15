import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineArrowLeft,
  AiFillStar,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, decreaseCart } from "../../../redux/cartSlice";

import styles from "./viewMore.style.module.scss";

interface IModalPage {
  open?: boolean;
  clickClose?: () => void;
}

const ViewMore: React.FC<IModalPage> = ({ open, clickClose }) => {
  const cart = useSelector((state) => state.cart);
  console.log("cartlar>", cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    //navigate.push("/basket");
    console.log(addToCart);
  };
  return (
    <>
      {!!open && (
        <div className={styles.modal}>
          <div className={styles.modalSecond}>
            <div className={styles.header}>
              <AiFillCloseCircle
                className={styles.modal_close}
                onClick={clickClose}
              />
            </div>

            {
              <div>
                {cart.viewMoreItems?.map((cartItem) => (
                  <div key={cartItem.id} className={styles.modalContent}>
                    <div className={styles.modalImg}>
                      <div className={styles.modalImg_part}>
                        <img src={cartItem.img}></img>
                      </div>
                    </div>
                    <div className={styles.modalTextContent}>
                      <div>
                        <h5 className={styles.name}>{cartItem.name}</h5>
                        <h2 className={styles.tittle}>{cartItem.tittle}</h2>
                        <p className={styles.text}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. In non incidunt, nemo dicta error nisi corrupti
                          et, voluptatem minus ea consequuntur dolorem, dolore
                          commodi eveniet sed nesciunt tempore harum saepe!
                        </p>
                        <div className={styles.freeDelivery}>Free Delivery</div>
                        <div className={styles.priceStar}>
                          <h5 className={styles.price}>$ {cartItem.price}</h5>
                          <span>
                            <ul className={styles.star}>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div>
                          {/* {cart.cartItems?.map((cartItem) => (
                            <div className={styles.quantityBtn}>
                              <div className={styles.quantityNumber}>
                                <span>{cartItem.cartQuantity}</span>
                              </div>
                              <div className={styles.incDecBtn}>
                                <button
                                  className={styles.btnsStyle}
                                  onClick={() => handleDecrease(cartItem)}
                                >
                                  <span>-</span>
                                </button>
                                <button
                                  className={styles.btnsStyle}
                                  onClick={() => handleIncrease(cartItem)}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                            </div>
                          ))} */}
                          {/* <div className={styles.quantityBtn}>
                              <div className={styles.quantityNumber}>
                                <span>{cartItem.cartQuantity}</span>
                              </div>
                              <div className={styles.incDecBtn}>
                                <button
                                  className={styles.btnsStyle}
                                  onClick={() => handleDecrease(cartItem)}
                                >
                                  <span>-</span>
                                </button>
                                <button
                                  className={styles.btnsStyle}
                                  onClick={() => handleIncrease(cartItem)}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                            </div> */}
                        </div>
                        <div className={styles.addToCart}>
                          <button onClick={() => handleAddToCard(cartItem)}>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default ViewMore;
