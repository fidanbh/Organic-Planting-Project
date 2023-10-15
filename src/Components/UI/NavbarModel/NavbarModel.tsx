import React, { useState } from "react";

import ShopHover from "../ShopHover/ShopHover";

import { Link } from "react-router-dom";

import { AiFillCloseCircle, AiOutlineTwitter, AiFillLinkedin  } from "react-icons/ai";
import { BiChevronDown, BiLogoPinterestAlt, BiSolidUser} from "react-icons/bi";
import {GrFacebookOption} from 'react-icons/gr'

import './navbarModel.css'

import styles from "./navbarModel.style.module.scss";

interface IModalPage {
  open?: boolean;
  clickClose?: () => void;
}

const NavbarModel: React.FC<IModalPage> = ({ open, clickClose }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isShop, setIsShop] = useState(false);

  return (
    <>
      {!!open && (
        <div className={styles.navbarModel}>
          <div className={styles.mainModel}>
            <div className={styles.header}>
              <AiFillCloseCircle
                className={styles.modal_close}
                onClick={clickClose}
              />
              <hr className={styles.line} />
            </div>
            <div className={styles.pages}>
              <nav>
                <ul className={styles.pages_ul}>
                  <li>
                    <Link to="/" className={styles.linkColor}>
                      HOME
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setIsShop(true)}
                    onMouseLeave={() => setIsShop(false)}
                  >
                    <Link to="/shop" className={styles.linkColor}>
                      SHOP <BiChevronDown />
                    </Link>
                    <div className={isShop ? "" : "blogPagesLi"}>
                      <ShopHover shopHover={styles.shopHover} parts={styles.parts} textSpan={styles.textSpan} list={styles.list}/>
                      {/* <div>Hello</div> */}
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => setIsBlog(true)}
                    onMouseLeave={() => setIsBlog(false)}
                  >
                    <Link to="/blogList" className={styles.linkColor}>
                      BLOG <BiChevronDown />
                    </Link>
                    <div className={isBlog ? "" : "blogPagesLi"}>
                      <div className={styles.blogStyle}>
                        <ul className={styles.blogUl}>
                          <li>
                            <Link to="/blogList">Blog List Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blogList2">Blog Grid 2 Column</Link>
                          </li>
                          <li>
                            <Link to="/blogList">Blog Grid Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blogMasonry">Blog Masonry</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Link to="/page" className={styles.linkGreen}>
                      Pages
                    </Link>
                    <div className={isHovering ? "" : "navbarPagesLi"}>
                      <div className={styles.pagesStyle}>
                        <ul className={styles.pagesUl}>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/coming">Coming Soon</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="/about" className={styles.linkGreen}>
                      About us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.contactTwo}>
                <div className={styles.spans}>
                    <span>Login</span> / <span>Register</span>
                </div>
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
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default NavbarModel;
