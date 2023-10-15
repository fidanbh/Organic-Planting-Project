import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import { fullProductsData } from "../Products/productsData";

import { Link } from "react-router-dom";

import styles from "./departmentsList.style.module.scss";

const DepartmentsList = () => {
  const theme = useContext(ThemeContext);
  const { isActive, setIsActive, state,getFilterList,originalData } = theme;

  const menuItems = [...new Set(fullProductsData.map((val) => val.name))];
  return (
    <div>
      {isActive && (
        <div className={styles.depLists}>
          <ul className={styles.depLists_parts}>
            <Link to="/shopFull">
              {menuItems.map((val) => (
                <div className={styles.line}>
                  <li>
                    <button onClick={() => getFilterList(val)}>{val}</button>
                  </li>
                </div>
              ))}
              <li></li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DepartmentsList;
