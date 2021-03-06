/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = ({ imagesArray, imgClass }) => {
  return (
    <React.Fragment>
      {!imagesArray ? (
        <h2>Loading</h2>
      ) : imagesArray.length >= 2 ? (
        <Swiper
          effect={"cards"}
          navigation={true}
          modules={[Navigation, EffectCards]}
          className="mySwiper">
          {imagesArray?.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt="error" className={imgClass} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        imagesArray?.map((item) => (
          <img src={item} key={item} alt="error" className={imgClass} />
        ))
      )}
    </React.Fragment>
  );
};

export default ImageSlider;
