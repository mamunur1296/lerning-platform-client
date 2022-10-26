import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const Slayder = ({ datas }) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/courcesdetails/${data.id}`}>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src={data.img}
                  alt="Image 2"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slayder;
