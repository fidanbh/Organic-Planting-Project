import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { TbEye } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({
  img,
  name,
  tittle,
  price,
  nameStyle,
  tittleStyle,
  priceStyle,
  products,
  cards,
  id,
  textStyle,
  iconsFlex,
  iconsStyle,
  icon,
  onMouseEnter,
  onMouseLeave,
  idBag,
  getId,
  idView,
  getView,
  openPage,
  getWish
}) => {
  return (
    <div
      className={cards}
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <div>
          <img src={img} className={products}></img>
        </div>
        <div className={textStyle}>
          <h4 className={nameStyle}>{name}</h4>
          <h5 className={tittleStyle}>{tittle}</h5>
          <span className={priceStyle}>$ {price}</span>
        </div>
        <div className={iconsStyle}>
          <div className={iconsFlex}>
            <div className={icon}>
              <AiOutlineHeart onClick={getWish}/>
            </div>
            <div className={icon}>
              <PiBag id={idBag} onClick={getId} />
            </div>
            <div className={icon} onClick={openPage}>
              <TbEye onClick={getView} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
