import React, { createContext,useState } from "react";
import Slider from "../../UI/Slider/Slider";
import Benefits from "../../UI/Benefits/Benefits";
import Categories from "../../UI/Categories/Categories";
import Introduction from "../../UI/Introduction/Introduction";
import Deal from "../../UI/Deal/Deal";

import HomeCount from "./HomeCount";
import styles from "./home.style.module.scss";
import Products from "../../UI/Products/Products";
import ScrollToTop from "../../UI/ScrollToTop/ScrollToTop";

export const ThemeContext = createContext(undefined);

const Home = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <div>
        <Slider />
        {/* <Benefits /> */}
        <Categories />
        <Products />
        <Introduction />
        <Deal />
        <div className={styles.count}>
          <HomeCount targetDate={dateTimeAfterThreeDays} />
        </div>
        <ScrollToTop/>
    </div>
  );
};

export default Home;
