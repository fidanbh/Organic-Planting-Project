import React from "react";
import styles from "./categories.styles.module.scss";

const Categories = () => {
  
  // const timer = setTimeout(())
  return (
    <div className={styles.mainCategories}>
      <div className={styles.categories}>
        <div className={styles.categoriesWrap}>
          <div className={styles.categoriesCards}>
            <span>F</span>
            <img
              src="https://i.hizliresim.com/830n2qh.png"
              className={styles.image}
            ></img>
          </div>
          <h2>Fresh fruit</h2>
          <p className={styles.items}>12 items</p>
        </div>
        <div className={styles.categoriesWrap}>
          <div className={styles.categoriesCards}>
            <span>D</span>
            <img
              src="https://i.hizliresim.com/eiwerg3.png"
              className={styles.image}
            ></img>
          </div>
          <h2>Dried</h2>
          <p className={styles.items}>8 items</p>
        </div>
        <div className={styles.categoriesWrap}>
          <div className={styles.categoriesCards}>
            <span>Y</span>
            <img
              src="https://i.hizliresim.com/q5qj6uv.png"
              className={styles.image}
            ></img>
          </div>
          <h2>Vegetables</h2>
          <p className={styles.items}>2 items</p>
        </div>
        <div className={styles.categoriesWrap}>
          <div className={styles.categoriesCards}>
            <span>J</span>
            <img
              src="https://i.hizliresim.com/t9gvpwo.png"
              className={styles.image}
            ></img>
          </div>
          <h2>Juice</h2>
          <p className={styles.items}>10 items</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
