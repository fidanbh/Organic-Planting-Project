import React from "react";
import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import styles from './faq.style.module.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordionMenu">
        <div className={styles.textStyle}>
          <div className={styles.divide} onClick={() => setIsActive(!isActive)}>
            <div className={styles.icons}>
              {isActive ? <BiChevronDown /> : <BiChevronRight />}
            </div>
            <div className={styles.text}>{title}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
