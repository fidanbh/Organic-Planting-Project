import React, {useState} from "react";

import { FaHome, FaTimes } from "react-icons/fa";
import { AiOutlineRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { RiArchive2Line } from "react-icons/ri";
import {IoIosRemoveCircle} from 'react-icons/io'
//import { LiaTimesSolid } from "react-icons/lia";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, decreaseCart, getViewMore ,removeFromWishList} from "../../../redux/cartSlice";

import styles from './wishList.style.module.scss'
import './wishList.css'

import BlockLine from "../BlockLine/BlockLine";

import Card from "../Card/Card";
import ViewMore from "../ViewMore/ViewMore";

const WishList = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);

  const onClickHandler = () => {
    console.log("hello");

    setIsActive(true);
  };
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();
  const handleRemoveItems = (cartItems) => {
    dispatch(removeFromWishList(cartItems));
    console.log('remove')
  };

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    //navigate.push("/basket");
    console.log(1);
  };
  const handleViewMore = (item) => {
    dispatch(getViewMore(item));
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
      <div className={styles.cartIcons}>
        <h4 className={styles.contactUsh4}>
          <FaHome className={styles.homeIcon} /> Home{" "}
          <AiOutlineRight className={styles.rightIcon} /> Shop{" "}
          <AiOutlineRight className={styles.rightIcon} />
        </h4>{" "}
        <h4>Wishlist</h4>
      </div>
      <div>
        {cart.wishList.length === 0 ? (
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
          // <div className={styles.cartShopStyle}>
          //   <table className={styles.tableCartShop}>
          //     <thead className={styles.theadMain}>
          //       <tr>
          //         <th>Image</th>
          //         <th>Product Name</th>
          //         <th>Price</th>
          //         <th>Remove</th>
          //       </tr>
          //     </thead>
          //     <tbody className={styles.tBody}>
          //       {cart.wishList?.map((cartItems) => (
          //         <tr key={cartItems.id}>
          //           <td>
          //             <div className={styles.imgDiv}>
          //               <img
          //                 src={cartItems.img}
          //                 className={styles.imgStyle}
          //               ></img>
          //             </div>
          //           </td>
          //           <td className={styles.name}>{cartItems.tittle}</td>
          //           <td className={styles.price}>$ {cartItems.price}</td>
          //           <td>
          //             <button
          //               className={styles.removeBtn}
          //               onClick={() => handleRemoveItems(cartItems)}
          //             >
          //               <IoIosRemoveCircle />
          //             </button>
          //           </td>
          //           <td>
          //             <button>Add to cart</button>
          //           </td>
          //         </tr>
          //       ))}
          //     </tbody>
          //   </table>
          // </div>
          <div className={styles.cards}>
            {
              cart.wishList?.map((item)=>(
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
            onMouseLeave={() => setIsHovering(-1)}
            idBag={item.id}
            getId={() => handleAddToCard(item)}
            getView={()=>handleViewMore(item)}
            openPage={openPage}
            getWish={()=>handleRemoveItems(item)}/>

              ))
            }
          </div>
        )}
      </div>
      {/* <Link to="/shopFull">
        <button>
          <AiOutlineArrowLeft />
        </button>
        Go to Products page
      </Link> */}
      <ViewMore clickClose={clickClose} open={open}/>
    </div>
  );
};

export default WishList;
