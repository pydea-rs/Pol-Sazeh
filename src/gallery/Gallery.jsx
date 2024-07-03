import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.min.css";
import "./pagination.min.css";
import { Image } from "react-bootstrap";
import "./gallery.css";

const Gallery = ({ children }) => {
    // const children = Array(5).fill(TestImage);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                centeredSlides={true}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },

                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1.15,
                        spaceBetween: 15,
                    },
                    800: {
                        slidesPerView: 1.25,
                        spaceBetween: 15,
                    },
                    960: {
                        slidesPerView: 1.75,
                        spaceBetween: 15,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {children.map((x) => (
                    <SwiperSlide style={{ height: "100%", width: "100%" }}>
                        <Image className="gallery-item" fluid src={x} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Gallery;