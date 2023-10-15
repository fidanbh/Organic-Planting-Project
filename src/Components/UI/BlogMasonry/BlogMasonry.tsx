import React, { useState } from "react";
import { paginationData } from "../Pagination/usePagination";

import { useSelector, useDispatch } from "react-redux";
import { addToCart,getViewMore, wishList} from "../../../redux/cartSlice";

import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";

import styles from "./blogMasonry.style.module.scss";
import { Link } from "react-router-dom";

const BlogMasonry = () => {
  const [data, setData] = useState(paginationData);

  const dispatch = useDispatch();

  const states = useSelector((state) => console.log(state));
  // console.log(states);

  const handleViewMore = (item) => {
    dispatch(getViewMore(item));
  };
  return (
    <div className={styles.cartBlogMasonry}>
      <div className={styles.cartIcons}>
        <h4 className={styles.textColor}>
          <FaHome className={styles.homeIcon} /> Home{" "}
          <AiOutlineRight className={styles.cartIcon} /> Blog{" "}
          <AiOutlineRight className={styles.cartIcon} />
        </h4>{" "}
        <h4>Blog masonry</h4>
      </div>
      <div className={styles.mainblogStyle}>
        {data.map((item) => (
          <div className={styles.blogStyle}>
            <div>
              <img src={item.img} className={styles.blogImg}></img>
            </div>
            <div>
              <h4 className={styles.categoryStyle}>{item.category}</h4>
              <Link to='/blogViewMore'>
                <h1 className={styles.tittleStyle} onClick={()=>handleViewMore(item)}>
                  {item.tittle}
                </h1>
              </Link>
              <span>{item.date}</span>
              <span>{item.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogMasonry;
