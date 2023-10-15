import React, { useState } from "react";
import styles from "./slider.styles.module.scss";
import "./slider.css";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button/Button";
import Benefits from "../Benefits/Benefits";





const Slider = () => {
  const data = [
    {
      title: "Fruit Fresh",
      text: "Orange Lemon",
      price: 16,
      bgImg: "https://i.hizliresim.com/27cxejp.png",
      img: "https://i.hizliresim.com/h0ukau7.png",
    },
    {
      title: "Butter & Eggs",
      text: "Spice 100% Organic",
      price: 14,
      bgImg: "https://i.hizliresim.com/ex7yppo.png",
      img: "https://i.hizliresim.com/h0ukau7.png",
    },
  ];
  const [state, setState] = useState(data);

  return (
    <div className={styles.slide}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#88c74a",
          "--swiper-navigation-size": "28px",
          "--swiper-navigation-backgroundColor": "#88c74a",
        }}
      >
        {state.map((item) => (
          <SwiperSlide>
            <img src={item.bgImg} className={styles.img}></img>
            <div className={styles.slideColumn}>
              <div className={styles.textOrganic}>
                <h5 className={styles.tittle}>{item.title}</h5>
                <h1 className={styles.textSlider}>{item.text}</h1>
                <span className={styles.priceSlider}>$ {item.price+'.00'}</span><span className={styles.pricepart2}>/pakage</span>
                <div>
                  <Link to='/shopFull'>
                    <Button
                      text="SHOP NOW"
                      buttonStyle={styles.buttonShop}
                      clickFunction={""}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.imagePart}>
                <img src={item.img} className={styles.vegetableImage}></img>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Benefits/>
    </div>
  );
};

export default Slider;
