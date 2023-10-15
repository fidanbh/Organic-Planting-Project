import React, { useContext, useRef, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { Link } from "react-router-dom";

import styles from "./search.style.module.scss";
import { ThemeContext } from "../../../App";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import Button from "../Button/Button";

const Search = ({ getCategories }) => {
  const theme = useContext(ThemeContext);

  const {
    isActive,
    setIsActive,
    getInputFiltering,
    searchTerm,
    setSearchTerm,
    value,
    setValue,
    onChange,
    onSearch,
    state,
  } = theme;

  return (
    <div className={styles.mainSearch}>
      <div className={styles.search}>
        <div
          className={styles.search_bars}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.search_bars_part1}>
            <span>All departments</span>
          </div>
          <div className={styles.search_bars_part2}>
            <span>
              <FaBars />
            </span>
            <span>{isActive ? <BiChevronUp /> : <BiChevronDown />}</span>
          </div>
        </div>
        <DepartmentsList />
        <div className={styles.search_categories}>
          <div className={styles.search_categories_part1}>
            <span className={styles.categories_span1}>All Categories</span>
            {/* <span className={styles.categories_part1_icon}>
              <BiChevronDown />
            </span> */}
          </div>
          <div className={styles.language}>
            <span className={styles.verticalLine}>|</span>
          </div>
          <div className={styles.categories_part2}>
            <form className={styles.formStyle}>
              <input
                placeholder="What do you need"
                className={styles.searchInput}
                value={value}
                onChange={onChange}
              ></input>
            </form>
          </div>
          <div>
            <Link to="/shopFull">
              <Button
                text={"Search"}
                buttonStyle={styles.buttonSearch}
                clickFunction={() => onSearch(value)}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {state
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.tittle.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .map((item) => (
            <div onClick={() => onSearch(item.tittle)}>{item.tittle}</div>
          ))}
      </div>
    </div>
  );
};

export default Search;
