"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from 'next/image';
import Link from 'next/link';

// Importaciones de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Estilos personalizados para sobrescribir los defaults de Swiper (flechas azules)
const swiperStyles = `
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.5;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: white !important;
    width: 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    opacity: 1;
  }
  /* Animación para el texto cuando el slide está activo */
  .swiper-slide-active .animate-fade-up {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s;
  }
  /* Estado inicial del texto (oculto) */
  .animate-fade-up {
    opacity: 0;
    transform: translateY(20px);
  }
  
  /* Animación Ken Burns (Zoom lento) en imagen activa */
  .swiper-slide-active .ken-burns {
    transform: scale(1.1);
    transition: transform 8s ease-out;
  }
  .ken-burns {
    transform: scale(1);
    transition: transform 1s ease-out; /* Reset rápido al cambiar */
  }
`;

export const InicioCarrusel = () => {
    const slides = [
        {
            url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405110/inicio/inicio_oox5il.jpg",
            title: "HOTEL DANINI",
            title2: "TEZIUTLÁN",
            details: "Descubre Nuestra Visión",
            navLink: "/nosotros"
        },
        {
            url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
            title: "DESCANSO",
            title2: "ABSOLUTO",
            details: "Explora Nuestras Habitaciones",
            navLink: "/habitaciones"
        },
        {
            url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1737708476/restaurante/restauranteInicio_nyimgd.jpg",
            title: "GASTRONOMÍA",
            title2: "DE AUTOR",
            details: "Ver Menú del Restaurante",
            navLink: "/restaurante"
        },
        {
            url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404177/eventos/boda_llklb5.jpg",
            title: "MOMENTOS",
            title2: "INOLVIDABLES",
            details: "Eventos y Bodas",
            navLink: "/eventos"
        },
        {
            url: "https://res.cloudinary.com/dawwp31sm/image/upload/v1765997936/eventos/camaNupcial_omfzmg.jpg",
            title: "EXPERIENCIAS",
            title2: "EXCLUSIVAS",
            details: "Vive las mejores experiencias en Danini",
            navLink: "/experiencias"
        }
    ];

    return (
        <div className="relative">
            <style>{swiperStyles}</style>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 6000, // Un poco más lento para apreciar la foto
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1500} // Transición entre slides más suave (lujo = lentitud)
                loop
                className="w-full h-[60vh] md:h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full bg-black">

                        {/* 1. Contenedor de Imagen con efecto Ken Burns */}
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={slide.url}
                                alt={slide.title}
                                priority={index === 0}
                                fill
                                sizes="100vw"
                                className="object-cover ken-burns" // Clase personalizada aplicada aquí
                                unoptimized={true} // Opcional, dependiendo de tu config de Cloudinary
                            />
                        </div>

                        {/* 2. Gradiente inteligente (Mejor que bg-black plano) */}
                        {/* Oscurece más el lado derecho donde va el texto, deja el centro más claro */}
                        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-black/90 via-black/40 to-transparent z-10"></div>

                        {/* 3. Contenedor de Texto */}
                        <div className="absolute inset-0 flex items-center justify-center md:justify-end z-20 px-8 md:px-16 lg:px-24">
                            <div className="text-center md:text-right max-w-3xl animate-fade-up">

                                {/* Decoración pequeña antes del título */}
                                <div className="hidden md:block h-0.5 w-12 bg-white/60 ml-auto mb-4"></div>

                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-wide drop-shadow-lg leading-tight">
                                    {slide.title}
                                    <br />
                                    <span className="font-light italic text-white/90">
                                        {slide.title2}
                                    </span>
                                </h2>

                                <Link
                                    href={slide.navLink}
                                    className="group inline-flex items-center gap-3 mt-8 px-6 py-3 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300"
                                >
                                    <span className="text-sm md:text-base text-white uppercase tracking-widest font-medium">
                                        {slide.details}
                                    </span>
                                    <svg
                                        className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};