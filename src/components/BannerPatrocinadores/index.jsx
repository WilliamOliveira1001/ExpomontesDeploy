// import imgpatrocinadores from "../../assets/patrocinadores1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { StyledBannerPatrocinadores } from "./style";
import patro1 from "../../assets/1.png"
import patro2 from "../../assets/2.png"
import patro3 from "../../assets/3.png"
import patrodesck from "../../assets/bannerdescknow.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const BannerPatrocinadoresComponents = () => {
  return (
    <>
      <StyledBannerPatrocinadores>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500 }}
          loop
          translate="1s"
          className="patrocinadores-desck"
        >
          <SwiperSlide>
            <img src={patrodesck} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={patrodesck} alt="" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500 }}
          loop
          translate="1s"
          className="patrocinadores-mobile"
        >
          <SwiperSlide>
            <img src={patro1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={patro2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={patro3} alt="" />
          </SwiperSlide>
        </Swiper>


      </StyledBannerPatrocinadores>
    </>
  );
};
