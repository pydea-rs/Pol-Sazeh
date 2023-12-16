import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Image } from "react-bootstrap";
import "./gallery.css";
const Gallery = ({ children }) => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                direction="horizontal"
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {children.map((x) => (
                    <SwiperSlide className="bg-transparent">
                        <div style={{ borderRadius: "1rem" }}>
                            <Image
                                className="gallery-item"
                                fluid
                                src={x}
                                style={{
                                    maxWidth: "70rem",
                                    maxHeight: "40rem",
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Gallery;
