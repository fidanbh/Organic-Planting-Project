import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

import styles from "./faq.style.module.scss";
import Accordion from "./Accordion";

const Faq = () => {
  const faqData = [
    {
      tittle: "IS THERE ANYTHING I SHOULD BRING?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tittle: "WHERE CAN I FIND MARKET RESEARCH REPORTS?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tittle: "WHERE CAN I FIND THE WALL STREET JOURNAL ?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const [data, setData] = useState(faqData)
  return (
    <div>
      <div>
        <div>
          <div className={styles.faq}>
            <span className={styles.faq_icon}>
              <FaHome className={styles.homeIcon}/> Home
            </span>{" "}
            <h4>
              <AiOutlineRight className={styles.rightIcon}/> FAQ
            </h4>
          </div>
        </div>
        <div>
            {
                data.map((item)=>(
                    <Accordion title={item.tittle} content={item.text}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Faq;
