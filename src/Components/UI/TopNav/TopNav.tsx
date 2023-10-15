import React from "react";

import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BiLogoPinterestAlt, BiSolidUser } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

import { Link } from "react-router-dom";

import styles from "./topnav.styles.module.scss";

const TopNav = () => {
  return (
    <div className={styles.mainTop}>
      <div className={styles.topNav}>
        <div className={styles.contact}>
          <ul className={styles.contact_ul}>
            <li>
              <IoMdMail className={styles.icon} />{" "}
              <span>info.deercreative@gmail.com</span>
            </li>
            <li>
              <span className={styles.verticalLine}>|</span>
            </li>
            <li>
              <MdCall className={styles.icon} /> <span>+65 11.188.888</span>
            </li>
          </ul>
        </div>
        <div className={styles.contactTwo}>
          <div>
            <ul className={styles.contactTwo_social}>
              <li>
                <GrFacebookOption />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <BiLogoPinterestAlt />
              </li>
            </ul>
          </div>
          <div className={styles.language}>
            <span className={styles.verticalLine}>|</span>
          </div>
          <div className={styles.language}>
            <span>ENGLISH</span> <BiChevronDown className={styles.iconItem} />
          </div>
          <div className={styles.language}>
            <span className={styles.verticalLine}>|</span>
          </div>
          <div className={styles.login}>
            <Link to="/login">
              <span className={styles.loginIcon}>
                <BiSolidUser  />
              </span>{" "}
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
