import React, { useContext, useState } from "react";
import Pagination from "../Pagination/Pagination";

import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { Link } from "react-router-dom";

import styles from "./blogList.style.module.scss";

import { paginationData } from "../Pagination/usePagination";
import { ThemeContext } from "../../../App";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, getViewMore, wishList } from "../../../redux/cartSlice";

const BlogList = () => {
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
    <div>
      <div className={styles.cartIcons}>
        <h4 className={styles.textColor}>
          <FaHome className={styles.homeIcon} /> Home{" "}
          <AiOutlineRight className={styles.cartIcon} /> Blog{" "}
          <AiOutlineRight className={styles.cartIcon} />
        </h4>{" "}
        <h4>Blog list with sidebar</h4>
      </div>
      <div className={styles.categoriesFlex}>
        <div>
          <h3 className={styles.departments_h3}>Categories</h3>
          <p className={styles.depLine}></p>
          <div>
            <ul className={styles.categoryList}>
              <li>
                <button onClick={() => setCategory(paginationData)}>
                  All departments
                </button>
              </li>
              {menuItems?.map((val) => (
                <div className={styles.categoryList}>
                  <li>
                    <button onClick={() => getCategory(val)}>{val}</button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.paginationPart}>
          {records?.map((val) => (
            <Pagination
              blogStyle={styles.blogStyle}
              blogImg={styles.blogImg}
              mainBlogStyle={""}
              categoryStyle={styles.categoryStyle}
              tittleStyle={styles.tittleStyle}
              spanStyle={styles.spanStyle}
              textStyle={styles.textStyle}
              part2Style={styles.part2Style}
              img={val.img}
              category={val.category}
              tittle={val.tittle}
              date={val.date}
              comments={val.comments}
              text={val.text}
              textBtn="READ MORE"
              icon={
                <span>
                  <BiChevronsRight />
                </span>
              }
              styleButton={styles.styleButton}
              viewMore={() => handleViewMore(val)}
            />
          ))}
        </div>
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

export default BlogList;
