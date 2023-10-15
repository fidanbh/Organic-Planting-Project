import React, { useState } from "react";
import { paginationData } from "../Pagination/usePagination";
import { Link } from "react-router-dom";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import styles from './blogGrid.style.module.scss'

const BlogGrid = () => {
  const [currentPage, setCurrenPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = paginationData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(paginationData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrenPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrenPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrenPage(currentPage + 1);
    }
  };
  return (
    <div className={styles.mainBlogGrid}>
      <div>
        <div className={styles.mainBlogStyle}>
          {records.map((item) => (
            <div className={styles.blogStyle}>
              <div>
                <img src={item.img} className={styles.blogImg}></img>
              </div>
              <div>
                {/* <h4>{item.category}</h4> */}
                <span>{item.date}</span>
                <span>{item.comments}</span>
              </div>
            </div>
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
          {numbers.map((n, i) => (
            <li key={i} className={`${currentPage === n ? "active" : ""}`}>
              <Link to="" onClick={() => changeCPage(n)}>
                {n}
              </Link>
            </li>
          ))}
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

export default BlogGrid;
