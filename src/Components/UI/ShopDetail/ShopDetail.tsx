import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { fullProductsData } from "../Products/productsData";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./shopDetail.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ShopDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {fullProductsData.map((item) => (
          <SwiperSlide>
            <img src={item.img}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {fullProductsData.map((item) => (
          <SwiperSlide>
            <img src={item.img}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ShopDetail;
