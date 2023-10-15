import React, { useContext } from "react";
import ShopElement from "../ShopElement/ShopElement";

import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import { ThemeContext } from "../../../App";
import { fullProductsData } from "../Products/productsData";

import styles from "./shopFull.style.module.scss";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import ShopPagination from "../ShopPagination/ShopPagination";

const ShopFull = () => {
  const theme = useContext(ThemeContext);
  const { state, getFilterList, setState } = theme;

  const menuItems = [...new Set(fullProductsData.map((val) => val.name))];

  return (
    <div>
      <div className={styles.aboutShop}>
        <h4>
          <FaHome /> Home <AiOutlineRight />
        </h4>{" "}
        <h4 className={styles.aboutSpan}>Shop</h4>
      </div>
      <div className={styles.shopFullFlex}>
        <div className={styles.departments}>
          <h3 className={styles.departments_h3}>Departments</h3>
          <p className={styles.depLine}></p>
          <div>
            <div className={styles.depLists}>
              <ul className={styles.depLists_parts}>
                <li>
                  <button onClick={() => setState(fullProductsData)}>
                    All departments
                  </button>
                </li>
                {menuItems.map((val) => (
                  <div className={styles.line}>
                    <li>
                      <button onClick={() => getFilterList(val)}>{val}</button>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.gridDep}>Shop Grid Fullwidth</h3>
          <p className={styles.gridLine}></p>
          <div className={styles.gridProducts}>
            <ShopElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFull;
