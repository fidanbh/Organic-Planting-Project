import React, { useState } from "react";

import styles from "./chooseUs.styles.module.scss";

const ChooseUs = () => {
  const data = [
    {
      img: "https://i.hizliresim.com/c7ctkh2.png",
      title: "Eat Healthier",
      text: "Modi tempora incidunt ut labore dolore magnam aliquam",
    },
    {
      img: "https://i.hizliresim.com/mhqkztv.png",
      title: "We Have Brands",
      text: "Modi tempora incidunt ut labore dolore magnam aliquam",
    },
    {
      img: "https://i.hizliresim.com/c1bz9ox.png",
      title: "Fresh And Clean Products",
      text: "Modi tempora incidunt ut labore dolore magnam aliquam",
    },
    {
      img: "https://i.hizliresim.com/iwxx9lf.png",
      title: "Modern Process",
      text: "Modi tempora incidunt ut labore dolore magnam aliquam",
    },
  ];
  const [state, setState] = useState(data);

  return (
    <div className={styles.choose} >
      <div className={styles.main}>
        <div>
          <img src="https://i.hizliresim.com/dn1n7ka.png"></img>
        </div>
        <div>
          <h2 className={styles.text}>The Story About Us</h2>
          <div className={styles.chooseDecoration}></div>
          <div className={styles.mainItem}>
            {state.map((item,index) => (
              <div className={styles.items} key={index}>
                <div className={styles.items_flex}>
                  <div className={styles.items_flex_icons}>
                    <img src={item.img}></img>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
