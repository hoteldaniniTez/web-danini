'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

interface Props {
    imgs: string[];
    thumbs?: boolean;
}

export const CarruselHabsClient: React.FC<Props> = ({ imgs }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="w-full flex flex-col gap-4">

            {/* SLIDER PRINCIPAL */}
            <Swiper
                loop={true}
                spaceBetween={10}
                effect={'fade'}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                className="w-full max-h-[550px] bg-black rounded-2xl shadow-lg overflow-hidden aspect-video"
            >
                {imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full flex items-center justify-center bg-black">
                            <img
                                src={img}
                                alt={`Vista ${index + 1}`}
                                className="max-h-[550px] w-auto h-auto object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* MINIATURAS */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-24"
            >
                {imgs.map((img, index) => (
                    <SwiperSlide
                        key={index}
                        className="cursor-pointer rounded-lg overflow-hidden opacity-40 hover:opacity-100 transition-opacity"
                    >
                        <div className="w-full h-full bg-black flex items-center justify-center">
                            <img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-slide-thumb-active {
                    opacity: 1 !important;
                    border: 2px solid #d97706;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
};
