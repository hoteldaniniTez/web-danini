'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Bed, Scan, ChevronRight, ArrowRight } from 'lucide-react'; // Cambié Square por Scan (se ve más arquitectónico)
import { RoomData } from '@/interfaces';

interface Props {
    room: RoomData;
}

export const RoomCardClient: React.FC<Props> = ({ room }) => {

    // No necesitamos definir constantes de color hexadecimales, usaremos Tailwind classes
    // para mantener la consistencia del sistema de diseño (emerald-950, amber-600, etc).

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-stone-100 transition-all duration-500 flex flex-col lg:flex-row h-full lg:h-[450px]">

            {/* 1. IMAGEN (Ocupa 45% en desktop) - Efecto Zoom Suave */}
            <div className="relative w-full lg:w-[45%] h-64 lg:h-full overflow-hidden">
                {/* Overlay oscuro al hacer hover para resaltar el texto si lo hubiera, o dar profundidad */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>

                {/* Etiqueta "Desde $..." flotando sobre la imagen (Tendencia moderna) */}
                <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-wider mb-0.5">Desde</p>
                    <p className="text-xl font-serif font-bold text-emerald-950">
                        ${room.precioDesde} <span className="text-xs font-sans font-normal text-stone-400">MXN</span>
                    </p>
                </div>

                <img
                    src={room.imagenUrl}
                    alt={`Interior de habitación ${room.nombre}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* 2. CONTENIDO (Ocupa 55% en desktop) */}
            <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-between relative">

                {/* Fondo decorativo sutil */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-900"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" /></svg>
                </div>

                <div>
                    {/* Encabezado de Tarjeta */}
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-3xl font-serif font-medium text-emerald-950 group-hover:text-amber-600 transition-colors duration-300">
                            {room.nombre}
                        </h3>
                    </div>

                    <p className="text-stone-500 leading-relaxed mb-8 font-light text-lg">
                        {room.descripcionCorta}
                    </p>

                    {/* Características (Grid limpio) */}
                    <div className="grid grid-cols-3 gap-4 border-y border-stone-100 py-6 mb-6">
                        <div className="flex flex-col items-center justify-center text-center gap-2">
                            <Users size={20} className="text-amber-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Capacidad</span>
                            <span className="text-sm font-semibold text-emerald-900">{room.huespedes} Personas</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-2 border-l border-stone-100">
                            <Bed size={20} className="text-amber-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Camas</span>
                            <span className="text-sm font-semibold text-emerald-900">{room.camas}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-2 border-l border-stone-100">
                            <Scan size={20} className="text-amber-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Tamaño</span>
                            <span className="text-sm font-semibold text-emerald-900">{room.metros} m²</span>
                        </div>
                    </div>
                </div>

                {/* Acciones */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">

                    {/* Botón secundario: Link de texto elegante */}
                    <Link href={room.enlaceDetalle} className="group/link flex items-center gap-2 text-stone-500 hover:text-emerald-900 font-medium transition-colors text-sm uppercase tracking-wider">
                        Ver Detalles
                        <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {/* Botón primario: Sólido y Oscuro */}
                    <a
                        href={room.enlaceReserva}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-emerald-900 text-white px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-[0.15em] hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                    >
                        Reservar
                        <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </div>
    );
};