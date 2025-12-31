'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Target, Eye, Heart, Leaf, Users, Lightbulb, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Estilos de Swiper obligatorios
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const NosotrosClient: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string>('');
    const handleImageClick = (src: string) => setSelectedImage(src);
    const handleCloseModal = () => setSelectedImage('');

    const valoresData = [
        { name: "PASIÓN", icon: Heart, description: "Entrega y entusiasmo en cada detalle." },
        { name: "RESPETO", icon: Users, description: "Valoramos la dignidad de cada persona." },
        { name: "INTEGRIDAD", icon: Target, description: "Actuamos con rectitud y transparencia." },
        { name: "INNOVACIÓN", icon: Lightbulb, description: "Ideas frescas para experiencias únicas." },
        { name: "COLABORACIÓN", icon: Leaf, description: "Sumamos fuerzas para el bien común." },
    ];

    const certificacionesData = [
        { title: "MODERNIZA", src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/moderniza_xovexq.jpg" },
        { title: "SAFE TRAVEL", src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/safeTravels_xbtci9.jpg" },
        { title: "CÓDIGO DE CONDUCTA", src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372268/certificaciones/codigoC_swhn3g.jpg" },
        { title: "SELLO ELSSA", src: "https://res.cloudinary.com/dawwp31sm/image/upload/v1729372267/certificaciones/elssa_gdk8bv.jpg" },
    ];

    return (
        <React.Fragment>
            {/* Estilos globales para personalizar los puntitos de paginación */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: #d1d5db; /* gris claro */
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #d97706 !important; /* amber-600 */
                    width: 20px;
                    border-radius: 4px;
                    transition: all 0.3s;
                }
            `}</style>

            {/* 1. INTRODUCCIÓN */}
            <section className="mb-24 text-center max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-stone-600 font-serif leading-relaxed italic">
                    "Saber la razón por la que trabajamos cada día es esencial para poder alcanzar juntos nuestros objetivos."
                </p>
                <div className="w-12 h-1 bg-amber-500 mx-auto mt-8 rounded-full"></div>
            </section>

            {/* 2. MISIÓN Y VISIÓN */}
            <section className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Misión */}
                    <div className="relative group">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-emerald-900/20 group-hover:bg-emerald-900 transition-colors duration-500"></div>
                        <div className="pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="text-amber-600 w-6 h-6" />
                                <h3 className="text-2xl font-serif text-emerald-950 tracking-wide">NUESTRA MISIÓN</h3>
                            </div>
                            <p className="text-stone-600 leading-loose text-lg">
                                Brindar una experiencia hotelera única, donde la comodidad, el servicio y la magia de la naturaleza armonizan para crear recuerdos inolvidables.
                            </p>
                        </div>
                    </div>
                    {/* Visión */}
                    <div className="relative group">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-emerald-900/20 group-hover:bg-emerald-900 transition-colors duration-500"></div>
                        <div className="pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="text-amber-600 w-6 h-6" />
                                <h3 className="text-2xl font-serif text-emerald-950 tracking-wide">NUESTRA VISIÓN</h3>
                            </div>
                            <p className="text-stone-600 leading-loose text-lg">
                                Ser reconocidos como el hotel líder en la región, manteniendo estándares de excelencia y apoyando el desarrollo sostenible de Teziutlán.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTORIA */}
            <section className="mb-24 bg-stone-100/50 -mx-6 md:-mx-10 px-6 md:px-10 py-16 rounded-3xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif text-emerald-950 mb-8">Nuestra Historia</h2>
                    <p className="text-stone-600 leading-relaxed text-lg">
                        Nuestro hotel nace como homenaje a una familia pionera de la región de
                        <span className="font-serif italic text-emerald-800"> Piamonte, Italia</span>.
                        Su legado vive a través de cada estancia, combinando la hospitalidad europea clásica
                        con la vibrante belleza de la naturaleza poblana.
                    </p>
                </div>
            </section>

            {/* 4. VALORES */}
            <section className="mb-24">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Filosofía</span>
                    <h2 className="text-3xl font-serif text-emerald-950 mt-2">Nuestros Valores</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {valoresData.map((valor, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300 shadow-sm">
                                <valor.icon size={28} className="text-amber-600 group-hover:text-white transition-colors" />
                            </div>
                            <h5 className="text-sm font-bold tracking-wider text-emerald-950 mb-3 uppercase">
                                {valor.name}
                            </h5>
                            <p className="text-sm text-stone-500 leading-relaxed max-w-[200px]">
                                {valor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CERTIFICACIONES (CORREGIDO) */}
            <section className="mb-12 relative">
                <h2 className="text-2xl font-serif text-center text-stone-400 mb-6">Reconocimientos</h2>

                {/* Contenedor relativo que define la altura visible del slider */}
                <div className="max-w-6xl mx-auto px-4 relative cert-container">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="cert-swiper relative overflow-visible!" // relative para posicionar paginado/flechas con respecto a este contenedor
                    >
                        {certificacionesData.map((cert, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div
                                    className="cert-slide-card w-full max-w-[170px] p-3 rounded-lg bg-white/60 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                                    onClick={() => handleImageClick(cert.src)}
                                >
                                    {/* contenedor de imagen con altura fija para controlar layout */}
                                    <div className="relative w-full h-[90px] flex items-center justify-center">
                                        <Image
                                            src={cert.src}
                                            alt={cert.title}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 20vw"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* FLECHAS: posicionadas respecto a cert-swiper (padre relativo) */}
                    <button className="prev-btn absolute left-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md">
                        <ChevronLeft size={20} className="text-emerald-900" />
                    </button>
                    <button className="next-btn absolute right-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md">
                        <ChevronRight size={20} className="text-emerald-900" />
                    </button>

                </div>
            </section>


            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-stone-900/90 backdrop-blur-md z-100 flex items-center justify-center p-4"
                    onClick={handleCloseModal}
                >
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition z-101"
                    >
                        <X size={40} strokeWidth={1} />
                    </button>

                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Certificación Ampliada"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}