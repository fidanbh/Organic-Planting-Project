import React,{useState} from "react";
import { fullProductsData } from "../Products/productsData";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from './shopPagination.style.module.scss'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ShopPagination = ({}) => {
  const [currentPage, setCurrenPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = fullProductsData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(fullProductsData.length / recordsPerPage);
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
    <div>
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

export default ShopPagination;
