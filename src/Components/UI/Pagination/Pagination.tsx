import React, { useState } from "react";
import { paginationData } from "./usePagination";
import { Link } from "react-router-dom";
import styles from "./pagination.style.module.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import Button from "../Button/Button";

const Pagination = ({
  viewMore,
  img,
  category,
  tittle,
  date,
  comments,
  text,
  blogStyle,
  blogImg,
  mainBlogStyle,
  categoryStyle,
  tittleStyle,
  spanStyle,
  textStyle,
  part2Style,
  textBtn,
  icon,
  styleButton,
}) => {
  return (
    <div>
      <div>
        <div className={mainBlogStyle}>
          {/* {records.map((item) => ( */}
          <div className={blogStyle}>
            <div>
              <Link to="/blogViewMore">
                <img src={img} className={blogImg} onClick={viewMore}></img>
              </Link>
            </div>
            <div className={part2Style}>
              <h4 className={categoryStyle}>{category}</h4>
              <Link to="/blogViewMore">
                <h1 className={tittleStyle}>{tittle}</h1>
              </Link>
              <span className={spanStyle}>{date + " | " + comments}</span>
              {/* <span className={spanStyle}>{item.comments}</span> */}
              <p className={textStyle}>{text}</p>
              <Link to="/blogViewMore">
                <button className={styleButton} onClick={viewMore}>
                  {textBtn} {icon}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
