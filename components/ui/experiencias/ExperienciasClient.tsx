'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Check, Star, CalendarHeart } from 'lucide-react';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Paquete } from '@/interfaces';

interface Props {
    paquetes: Paquete[];
}

export const ExperienciasClient = ({ paquetes }: Props) => {

    // Configuración de colores
    const primaryText = 'text-[#003629]';
    const goldText = 'text-[#d79623]';
    const goldBg = 'bg-[#d79623]';

    return (
        <div className="pb-12">

            {/* INYECCIÓN DE ESTILOS PERSONALIZADOS PARA SWIPER */}
            <style jsx global>{`
                .swiper-pagination-bullet-active {
                    background-color: #d79623 !important;
                }
                .swiper-button-next, .swiper-button-prev {
                    color: #003629 !important;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 18px !important;
                    font-weight: bold;
                }
            `}</style>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: true }} // Autoplay suave
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 }, // Tablet: 2 tarjetas
                    1024: { slidesPerView: 3 }, // Desktop: 3 tarjetas (Se ve como un Grid)
                }}
                className="pb-14! px-4" // Padding bottom para los bullets
            >
                {paquetes.map((paquete, index) => (
                    <SwiperSlide key={index} className="h-auto"> {/* h-auto para igualar alturas */}

                        {/* TARJETA DE EXPERIENCIA */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col border border-stone-100 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

                            {/* Header de la Tarjeta (Decorativo) */}
                            <div className="h-3 w-full bg-linear-to-r from-[#003629] to-[#004d3a]"></div>

                            <div className="p-8 flex-1 flex flex-col">

                                {/* Títulos */}
                                <div className="mb-6 text-center">
                                    <h2 className={`text-2xl font-serif font-bold ${primaryText} mb-2 group-hover:text-[#d79623] transition-colors`}>
                                        {paquete.titulo}
                                    </h2>
                                    {paquete.subtitulo && (
                                        <p className="text-xs font-bold tracking-widest text-stone-400 uppercase">
                                            {paquete.subtitulo}
                                        </p>
                                    )}
                                </div>

                                {/* Descripción */}
                                <p className="text-stone-600 text-sm leading-relaxed mb-6 text-center italic font-serif">
                                    "{paquete.descripcion}"
                                </p>

                                <div className="w-full h-px bg-stone-100 mb-6"></div>

                                {/* Lista de Inclusiones */}
                                <div className="mb-8 flex-1">
                                    <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-2 ${primaryText}`}>
                                        <Star size={14} className={goldText} fill="#d79623" />
                                        ¿Qué incluye?
                                    </h3>
                                    <ul className="space-y-3">
                                        {paquete.lista.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-stone-600">
                                                <Check size={16} className={`mr-3 mt-0.5 shrink-0 ${goldText}`} strokeWidth={3} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Precio y Advertencia */}
                                <div className="bg-stone-50 -mx-8 -mb-8 p-6 text-center border-t border-stone-100">
                                    <p className="text-xs text-stone-500 font-bold uppercase mb-1">Inversión</p>
                                    <div className={`text-3xl font-serif font-bold ${primaryText} mb-2`}>
                                        {paquete.precio}
                                    </div>
                                    <p className="text-[10px] text-stone-400 mb-4 px-4 leading-tight">
                                        {paquete.advertencia}
                                    </p>

                                    {/* Botón CTA */}
                                    <a
                                        href="https://wa.me/5212312326505?text=Hola,%20me%20interesa%20reservar%20el%20paquete:%20" // Link a WhatsApp con mensaje predefinido
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg text-white font-bold uppercase tracking-widest text-xs ${goldBg} hover:bg-[#b57b12] transition-colors shadow-md`}
                                    >
                                        <CalendarHeart size={16} className="mr-2" />
                                        Solicitar Reserva
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}