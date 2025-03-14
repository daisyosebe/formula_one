import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AboutSection.css";

export default function AboutSection({ images, aboutText }) {  // Accept aboutText prop
  return (
    <section className="about-section">
      <div className="about-text-box">
        <h2>About Us</h2>
        <p>{aboutText}</p>  {/* Display the dynamic about text */}
      </div>

      <div className="about-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
