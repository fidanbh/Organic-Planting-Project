import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

import styles from "./navbar.style.module.scss";
import "./navbar.css";

import ShopHover from "../ShopHover/ShopHover";

import { NavLink } from "react-router-dom";
import { NavMenu, Bars, Nav } from "../NavbarElements/NavbarElements";

import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../../redux/cartSlice";
import NavbarModel from "../NavbarModel/NavbarModel";


interface TotalQuantityI {
  cartTotalQuantity: string;
}

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isShop, setIsShop] = useState(false);

  //total elements

  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  console.log("card", cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const [open, setOpen] = useState(false);
  const clickClose = () => {
    setOpen((prev) => !prev);
  };

  const openPage = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src="https://i.hizliresim.com/qel1d8j.png"></img>
      </div>
      <div className={styles.bar}>
        <FaBars onClick={openPage}/>
      </div>
      <NavbarModel clickClose={clickClose} open={open} />
      <div className={styles.pages}>
        <nav>
          <ul className={styles.pages_ul}>
            <li>
              <Link to="/" className={styles.linkColor}>
                HOME
              </Link>
            </li>
            <li
              onMouseEnter={() => setIsShop(true)}
              onMouseLeave={() => setIsShop(false)}
            >
              <Link to="/shop" className={styles.linkColor}>
                SHOP <BiChevronDown />
              </Link>
              <div className={isShop ? "" : "blogPagesLi"}>
                <ShopHover shopHover={styles.shopHover} parts={styles.parts} textSpan={styles.textSpan} list={styles.list}/>
                {/* <div>Hello</div> */}
              </div>
            </li>
            <li
              onMouseEnter={() => setIsBlog(true)}
              onMouseLeave={() => setIsBlog(false)}
            >
              <Link to="/blogList" className={styles.linkColor}>
                BLOG <BiChevronDown />
              </Link>
              <div className={isBlog ? "" : "blogPagesLi"}>
                <div className={styles.blogStyle}>
                  <ul className={styles.blogUl}>
                    <li>
                      <Link to="/blogList">Blog List Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blogList2">Blog Grid 2 Column</Link>
                    </li>
                    <li>
                      <Link to="/blogList">Blog Grid Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blogMasonry">Blog Masonry</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Link to="/page" className={styles.linkGreen}>
                Pages
              </Link>
              <div className={isHovering ? "" : "navbarPagesLi"}>
                <div className={styles.pagesStyle}>
                  <ul className={styles.pagesUl}>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/coming">Coming Soon</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link to="/about" className={styles.linkGreen}>
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.bags}>
        <Link to="/wishlist">
          <BsHeart className={styles.bagsStyle} />{" "}
        </Link>
        <Link to="/cartShop">
          <FiShoppingBag className={styles.bagsStyle} />{" "}
          <span className={styles.quantityStyle}>$ {cartTotalQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
