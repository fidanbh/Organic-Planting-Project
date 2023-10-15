import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import styles from "./about.styles.module.scss";
import ChooseUs from "../../UI/ChooseUs/ChooseUs";
import Farmers from "../../UI/Farmers/Farmers";


const AboutUs = () => {
  return (
    <div>
      <div className={styles.aboutPage}>
        <div>
          <div className={styles.aboutHome}>
            <h4 className={styles.contactUsh4}>
              <FaHome className={styles.homeIcon}/> Home
            </h4>{" "}
            <h4>
              <AiOutlineRight className={styles.rightIcon}/> About us
            </h4>
          </div>
          <h2 className={styles.text}>The Story About Us</h2>
          <div className={styles.aboutDecoration}></div>
          <p>
            Tyna Giang's integrated agro-forestry farming model is the first
            project in Vietnam to achieve the highest ranking in the "100
            projects to combat climate change" by the Ministry of Environment,
            Energy and Sea. France organized in 2016 ...
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit. Neque porro quisquam est, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem
          </p>
        </div>
        <div>
          <img src='https://i.hizliresim.com/sizb9gs.png' className={styles.about_image}></img>
        </div>
      </div>
      <ChooseUs/>
      <Farmers/>
    </div>
  );
};

export default AboutUs;
