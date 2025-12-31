'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import {
    Utensils, Coffee, Wine, Star, Sun, Camera, ChevronRight, ChevronLeft, Download,
    MessageCircle, Phone
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import { CategoriaMenu, EspacioRestaurante } from '@/interfaces/restaurante';

interface Props {
    menu: CategoriaMenu[];
    espacios: EspacioRestaurante[];
    galeria: string[];
}

export const RestauranteClient: React.FC<Props> = ({ menu, espacios, galeria }) => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index: number) => {
        swiperInstance?.slideTo(index);
    };

    return (
        <div className="pb-20">

            {/* ════════════════════════════════════ */}
            {/* ⭐ HORARIOS DEL HOTEL */}
            {/* ════════════════════════════════════ */}
            <div className="bg-[#003629] py-3 md:py-4 text-center text-white">
                <p className="text-sm md:text-base font-light tracking-wide leading-snug">
                    <span className="font-semibold">Horario:</span>
                    <span className="ml-1">Lunes a Sábado 7:00 am – 10:30 pm · Domingo 7:00 am – 9:30 pm</span>
                </p>
            </div>


            {/* ════════════════════════════════════ */}
            {/* ⭐ SECCIÓN MENÚ ESTILO REVISTA */}
            {/* ════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24 pt-12" id="menu">

                {/* Encabezado refinado */}
                <div className="text-center mb-8">
                    <span className="text-[#d79623] font-bold tracking-[0.35em] uppercase text-xs">Restaurante</span>
                    <h2 className="text-4xl font-serif text-[#003629] mt-3">Menú Digital</h2>
                    <p className="text-stone-400 text-xs mt-2 italic">Explora nuestras categorías</p>
                </div>

                {/* ════════════════════════════════════ */}
                {/* ⭐ NUEVA BARRA DE TABS – PREMIUM */}
                {/* ════════════════════════════════════ */}
                <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-[#e8dac0] shadow-sm py-4">

                    <style jsx global>{`
                        /* Scrollbar premium */
                        .scroll-gold::-webkit-scrollbar {
                            height: 6px;
                        }
                        .scroll-gold::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        .scroll-gold::-webkit-scrollbar-thumb {
                            background: #d7c5a3;
                            border-radius: 10px;
                        }
                        .scroll-gold {
                            scrollbar-width: thin;
                            scrollbar-color: #d7c5a3 transparent;
                        }
                    `}</style>

                    <div className="flex overflow-x-auto scroll-gold gap-3 px-3 py-3">

                        {menu.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => handleTabClick(index)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full min-w-max
                                    text-sm font-semibold uppercase tracking-wider whitespace-nowrap
                                    transition-all duration-300 border shadow-sm
                                    ${activeIndex === index
                                        ? 'bg-[#003629] text-white border-[#003629] shadow-xl scale-105'
                                        : 'bg-[#fcfaf7] text-[#003629]/70 border-[#d7c5a3] hover:bg-white hover:text-[#003629]'
                                    }
                                `}
                            >
                                {cat.id.includes('desayuno') && <Coffee size={16} />}
                                {cat.id.includes('entradas') && <Star size={16} />}
                                {cat.id.includes('fuertes') && <Utensils size={16} />}
                                {cat.id.includes('bar') && <Wine size={16} />}
                                {cat.id.includes('postres') && <Sun size={16} />}
                                {cat.titulo}
                            </button>
                        ))}

                    </div>
                </div>

                {/* ════════════════════════════════════ */}
                {/* ⭐ PÁGINA TIPO REVISTA */}
                {/* ════════════════════════════════════ */}
                <div className="relative mt-8">

                    {/* Flechas elegantes */}
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        disabled={activeIndex === 0}
                        className={`
                            absolute top-[200px] -left-6 z-30 bg-white text-[#003629] p-3 rounded-full 
                            shadow-xl border border-stone-200 hover:scale-110 transition-all hidden lg:block
                            ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
                        `}
                    >
                        <ChevronLeft size={30} />
                    </button>

                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        disabled={activeIndex === menu.length - 1}
                        className={`
                            absolute top-[200px] -right-6 z-30 bg-white text-[#003629] p-3 rounded-full 
                            shadow-xl border border-stone-200 hover:scale-110 transition-all hidden lg:block
                            ${activeIndex === menu.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
                        `}
                    >
                        <ChevronRight size={30} />
                    </button>

                    <Swiper
                        modules={[Navigation, Controller]}
                        slidesPerView={1}
                        spaceBetween={40}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        speed={600}
                        autoHeight
                    >
                        {menu.map((categoria, index) => (
                            <SwiperSlide key={index} className="pb-10">

                                {/* Fondo tipográfico elegante */}
                                <div className="text-center mb-10 relative">
                                    <h3 className="text-7xl md:text-8xl font-serif text-[#003629]/5 absolute inset-0 -z-10 uppercase tracking-widest select-none">
                                        {categoria.id}
                                    </h3>

                                    <h3 className="text-3xl font-serif text-[#003629] inline-block border-b-4 border-[#d79623] pb-2">
                                        {categoria.titulo}
                                    </h3>
                                </div>

                                {/* ═════════ MENU PREMIUM 4★ ═════════ */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-stone-200">

                                    {categoria.secciones.map((seccion, idx) => (
                                        <div key={idx} className="space-y-6">

                                            {seccion.titulo && (
                                                <h4 className="font-serif text-xl text-[#d79623] pl-4 border-l-4 border-[#d79623] tracking-wide">
                                                    {seccion.titulo}
                                                </h4>
                                            )}

                                            <ul className="space-y-7">
                                                {seccion.items.map((item, i) => (
                                                    <li key={i} className="group">
                                                        <div className="flex justify-between items-baseline border-b border-stone-300 pb-2 group-hover:border-[#003629]/60 transition-colors">
                                                            <span className="font-semibold text-[#003629] group-hover:text-[#d79623] text-base">
                                                                {item.nombre}
                                                            </span>
                                                            <span className="font-bold text-stone-700 text-sm">
                                                                {item.precio}
                                                            </span>
                                                        </div>

                                                        {item.descripcion && (
                                                            <p className="text-xs text-stone-500 mt-1 pl-1 italic leading-relaxed">
                                                                {item.descripcion}
                                                            </p>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    ))}

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* DESCARGAR MENÚ */}
                {/* <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 text-stone-500 hover:text-[#003629] transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-[#003629] pb-1">
                        <Download size={16} /> Descargar Menú Completo (PDF)
                    </button>
                </div> */}

            </section>

            {/* ═════════ GALERÍA ═════════ */}
            <section className="bg-[#00281f] py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-[#d79623] p-3 rounded-full text-white">
                            <Camera size={24} />
                        </div>
                        <div>
                            <span className="text-[#d79623] uppercase text-xs tracking-widest">Galería</span>
                            <h2 className="text-3xl font-serif text-white">Nuestra Cocina</h2>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop
                        navigation
                        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    >
                        {galeria.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative h-72 rounded-xl overflow-hidden group shadow-2xl">
                                    <Image
                                        src={img}
                                        alt="Platillo"
                                        fill
                                        className="object-cover group-hover:scale-110 duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ═════════ CTA ═════════ */}
            <div className="bg-[#003629] text-white py-16 text-center relative overflow-hidden mt-20">
                <div className="relative z-10 max-w-xl mx-auto px-6">
                    <h3 className="text-3xl font-serif mb-4">¿Listo para reservar?</h3>
                    <p className="text-white/80 mb-8 font-light">Asegura tu mesa y vive la experiencia culinaria de la sierra.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+522311023773" className="bg-white text-[#003629] px-8 py-3 rounded-lg font-bold hover:bg-[#d79623] hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2">
                            <Phone size={18} /> Llamar
                        </a>
                        <a href="https://wa.me/5212312326505" className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#003629] transition-colors flex items-center justify-center gap-2">
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
