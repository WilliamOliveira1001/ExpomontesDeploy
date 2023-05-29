import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { StyledHeadlline } from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img2 from "../../assets/banner2Mobile.png"

export const HeadllineCarroucel = () => { 
  return (
    <>
      <StyledHeadlline className="">
        <Swiper
          // modules={[Autoplay]}
          // autoplay={{ delay: 3000 }}
          // loop
          // translate="1s"
          id="Swiper1"
        >

          <SwiperSlide id="img1">
          </SwiperSlide>

        </Swiper>

        <Swiper
          // modules={[Autoplay]}
          // autoplay={{ delay: 3000 }}
          // loop
          // translate="1s"
          id="Swiper2"
        >
          <SwiperSlide id="Img3">
            <img src={img2} alt="" />
          </SwiperSlide>

        </Swiper>

      </StyledHeadlline>
    </>
  );
};
