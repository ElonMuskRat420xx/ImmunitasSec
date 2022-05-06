import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { Box, Boxes, BoxNum, BoxText, BoxIcon } from '../Acomplishments/AcomplishmentsStyles';



export default function SwiperSlider() {
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={3}
                spaceBetween={35}
                grabCursor={true}
                mousewheel={true}
                resistance={true}

                // pagination={{
                //     clickable: true,
                //     bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,

                // }}

                modules={[Mousewheel, Pagination]}


            >
                <SwiperSlide>
                    <Box >
                        <BoxNum>.01 Scoping</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box >
                        <BoxNum>.02 Reconnaissance & Intelligence</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box >
                        <BoxNum>.01 Scoping</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box >
                        <BoxNum>.01 Scoping</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box >
                        <BoxNum>.01 Scoping</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box >
                        <BoxNum>.01 Scoping</BoxNum>
                        <BoxText>Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.</BoxText>
                    </Box>
                </SwiperSlide>



            </Swiper>
        </>
    );
}

