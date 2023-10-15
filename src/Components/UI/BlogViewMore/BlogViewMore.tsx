import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

import styles from "./blogView.style.module.scss";
import Button from "../Button/Button";

const BlogViewMore = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cartlar>", cart);
  return (
    <div>
      {cart.viewMoreItems?.map((items) => (
        <div>
          <h1 className={styles.tittle}>{items.tittle}</h1>
          <img src={items.img} className={styles.image}></img>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in.
          </p>
          <h3 className={styles.theme}>
            You Can Buy For Less Than A College Degree
          </h3>
          <p className={styles.text}>
            Degree Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <img
            src={"https://i.hizliresim.com/fpse5lf.jpg"}
            className={styles.image}
          ></img>
          <p className={styles.text}>
            Aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <p className={styles.text}>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo conslaboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in datat non proident, sunt in.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit volupt atem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis dicta sunt explicabo.
          </p>

          <div className={styles.footerSocDiv}>
            <ul className={styles.footerSocial}>
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
      ))}
      <div className={styles.comments}>
        <h3 className={styles.leaveComment}>Leave a comment</h3>
        <form className={styles.commentsForm}>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Website"></input>
          <textarea placeholder="Message"></textarea>

          <Button
            text="SEND MESSAGE"
            buttonStyle={styles.buttonShop}
            clickFunction={""}
          />
        </form>
      </div>
    </div>
  );
};

export default BlogViewMore;
