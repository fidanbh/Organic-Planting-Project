import React, { useState } from "react";
import styles from "./introduction.styles.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Introduction = () => {
  const img = [
    {
      img: "https://i.hizliresim.com/4tv16z3.png",
      bgImg: "https://i.hizliresim.com/rpbl2wh.png",
    },
    {
      img: "https://i.hizliresim.com/7dipaz5.png",
      bgImg: "https://i.hizliresim.com/h0vwhn7.png",
    },
    {
      img: "https://i.hizliresim.com/hp53mu7.png",
      bgImg: "https://i.hizliresim.com/kxyfs3w.png",
    },
  ];
  const [state, setState] = useState(img);

  // const styles = {

  //     'text-align': 'center',
  //     'padding': '30px',
  // }
  // function myName() {
  //     styles.color = "green"

  // }
  // function noName() {

  // }
  const [size, setSize] = useState("");

  const style = {
    width: size,
  };
  return (
    <div className={styles.introduction}>
      {state.map((item) => (
        <div style={{ backgroundImage: `url(${item.bgImg})` }} className={styles.bgImage}>
          <div
            onMouseEnter={() => setSize("27em")}
            onMouseLeave={() => setSize("24.125em")}
            style={style}
          >
            <img src={item.img}></img>
            <Link to="/shopFull">
              <Button
                text="SHOP NOW"
                buttonStyle={styles.buttonShop}
                clickFunction={""}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Introduction;
