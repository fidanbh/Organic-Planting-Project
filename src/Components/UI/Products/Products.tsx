import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../App";
import { emptyBox, fullProductsData, productsData } from "./productsData";
export { productsData, emptyBox } from "./productsData";
import styles from "./products.style.module.scss";
import "./products.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

import { ToastContainer } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, getViewMore, wishList } from "../../../redux/cartSlice";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ViewMore from "../ViewMore/ViewMore";

const Products = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);

  const onClickHandler = () => {
    console.log("hello");

    setIsActive(true);
  };
  const theme = useContext(ThemeContext);
  const { products, setProducts, getFilterCategory } = theme;

  //add to cart functions

  const dispatch = useDispatch();

  const states = useSelector((state) => console.log(state));
  console.log(states);

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    //navigate.push("/basket");
    console.log(1);
  };
  const handleViewMore = (item) => {
    dispatch(getViewMore(item));
  };

  const handleWishList = (item) => {
    dispatch(wishList(item));
    console.log("wishList>", handleWishList);
  };
  const [open, setOpen] = useState(false);
  const clickClose = () => {
    setOpen((prev) => !prev);
  };

  const openPage = () => {
    setOpen((prev) => !prev);
  };
  const menuItems = [...new Set(productsData.map((val) => val.name))];
  const EmptyElement = emptyBox.map((item) => (
    <div>
      
    </div>
  ));
  return (
    <div className={styles.mainProduct}>
      <div className={styles.dealStyle}>
        <h2 className={styles.dealText}>Deal of the Week</h2>
        <span className={styles.productsDealDecoration}></span>
      </div>
      <div className={styles.categories}>
        <div className={styles.categoriesList}>
          <Button
            text="All"
            clickFunction={() => setProducts(productsData)}
            buttonStyle={styles.button}
          />

          {menuItems.map((val) => (
            <Button
              text={val.toLowerCase()}
              clickFunction={() => getFilterCategory(val)}
              buttonStyle={styles.button}
            />
          ))}
          {/* <Button
            text="Ocean Foods"
            clickFunction={() => setProducts(EmptyElement)}
            buttonStyle={styles.button}
          /> */}
        </div>
      </div>
      <div className={styles.cards}>
        <ToastContainer />
        {products.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            tittle={item.tittle}
            img={item.img}
            price={item.price}
            products={styles.products}
            cards={styles.cardStyle}
            nameStyle={styles.nameStyle}
            tittleStyle={styles.tittleStyle}
            priceStyle={styles.priceStyle}
            textStyle={styles.textStyle}
            iconsStyle={isHovering === item.id ? "" : "iconsStyle"}
            iconsFlex={styles.iconsFlex}
            icon={styles.icon}
            onMouseEnter={() => setIsHovering(item.id)}
            // onMouseEnter={()=>mouseEnterFunction(item.id)}
            onMouseLeave={() => setIsHovering(-1)}
            idBag={item.id}
            getId={() => handleAddToCard(item)}
            getView={() => handleViewMore(item)}
            openPage={openPage}
            getWish={() => handleWishList(item)}
          />
        ))}
      </div>
      <ViewMore clickClose={clickClose} open={open} />
      {/* <div>
        <span>No product in this category</span>
      </div> */}
    </div>
  );
};

export default Products;
