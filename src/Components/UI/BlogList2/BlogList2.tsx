import React, { useState, useContext } from "react";
import Pagination from "../Pagination/Pagination";

import styles from "./blogList2.style.module.scss";
import { paginationData } from "../Pagination/usePagination";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, getViewMore, wishList } from "../../../redux/cartSlice";

import { BiChevronsRight } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";

const BlogList2 = () => {
  const theme = useContext(ThemeContext);
  const {
    state,
    getFilterList,
    setState,
    currentPage,
    records,
    numbers,
    prePage,
    nextPage,
    changeCPage,
    getCategory,
    menuItems,
    category,
    setCategory,
    pageNumbers,
  } = theme;

  const dispatch = useDispatch();

  const states = useSelector((state) => console.log(state));
  // console.log(states);

  const handleViewMore = (item) => {
    dispatch(getViewMore(item));
  };

  return (
    <div className={styles.blogList2}>
      <div className={styles.cartIcons}>
        <h4 className={styles.textColor}>
          <FaHome className={styles.homeIcon} /> Home{" "}
          <AiOutlineRight className={styles.cartIcon} /> Blog{" "}
          <AiOutlineRight className={styles.cartIcon} />
        </h4>{" "}
        <h4>Blog Grid 2 Column</h4>
      </div>
      <div className={styles.pagGrid}>
        {records?.map((item) => (
          <Pagination
            blogStyle={styles.blogStyle}
            blogImg={styles.blogImg}
            mainBlogStyle={styles.mainBlogStyle}
            categoryStyle={styles.categoryStyle}
            tittleStyle={styles.tittleStyle}
            spanStyle={styles.spanStyle}
            textStyle={styles.textStyle}
            part2Style={styles.part2Style}
            img={item.img}
            category={item.category}
            tittle={item.tittle}
            date={item.date}
            comments={item.comments}
            text={''}
            textBtn="READ MORE"
            icon={
              <span>
                <BiChevronsRight />
              </span>
            }
            styleButton={styles.styleButton}
            viewMore={() => handleViewMore(item)}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <ul>
          <li>
            <Link to="" onClick={prePage}>
              <GrFormPrevious />
            </Link>
          </li>
          {pageNumbers}
          <li>
            <Link to="" onClick={nextPage}>
              <GrFormNext />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogList2;
