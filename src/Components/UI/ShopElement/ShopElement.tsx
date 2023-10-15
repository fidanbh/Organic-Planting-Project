import React, { createContext, useContext, useState } from "react";

import { ThemeContext } from "../../../App";
import Card from "../Card/Card";
import { fullProductsData } from "../Products/productsData";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, getViewMore, wishList } from "../../../redux/cartSlice";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";
import ViewMore from "../ViewMore/ViewMore";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import styles from "./shopElement.style.module.scss";

import "./shopElement.css";

const ShopElement = () => {
  const [isHovering, setIsHovering] = useState(-1);
  const theme = useContext(ThemeContext);
  const {
    search,
    setSearch,
    getFilterList,
    state,
    searchTerm,
    setSearchTerm,
    message,
  } = theme;

  const dispatch = useDispatch();

  const states = useSelector((state) => console.log(state));
  console.log(states);

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
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

  

  return (
    <div>
      <div className={styles.cards}>
        {state.map((val) => {
            return (
              <Card
                id={val.id}
                name={val.name}
                tittle={val.tittle}
                img={val.img}
                price={val.price}
                products={styles.products}
                cards={styles.cardStyle}
                nameStyle={styles.nameStyle}
                tittleStyle={styles.tittleStyle}
                priceStyle={styles.priceStyle}
                textStyle={styles.textStyle}
                iconsStyle={isHovering === val.id ? "" : "iconsStyle"}
                iconsFlex={styles.iconsFlex}
                icon={styles.icon}
                onMouseEnter={() => setIsHovering(val.id)}
                onMouseLeave={() => setIsHovering(-1)}
                getId={() => handleAddToCard(val)}
                getView={() => handleViewMore(val)}
                openPage={openPage}
                getWish={() => handleWishList(val)}
              />
            );
          })}
      </div>
      <ViewMore clickClose={clickClose} open={open} />
    </div>
  );
};

export default ShopElement;
