'use client';

import React from 'react';
import { Users, CheckCircle2, Star } from 'lucide-react';
import { HabitacionProps } from '@/interfaces';
import { CarruselHabsClient } from './CarruselHabsClient';

interface Props {
    habitacion: HabitacionProps;
}

export const HabitacionClient: React.FC<Props> = ({ habitacion }) => {

    return (
        <section className="bg-white rounded-4xl p-6 md:p-12 shadow-xl shadow-stone-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* COLUMNA IZQUIERDA: Galería Visual */}
                <div className="order-1 lg:order-1 w-full">
                    <CarruselHabsClient imgs={habitacion.imgs} thumbs={true} />
                </div>

                {/* COLUMNA DERECHA: Narrativa y Venta */}
                <div className="order-2 lg:order-2 space-y-8">

                    {/* Header */}
                    <div className="space-y-4 border-b border-stone-100 pb-6">
                        <div className="flex items-center gap-2">
                            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                Premium
                            </span>
                            <div className="flex text-amber-500">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-emerald-950 leading-tight">
                            {habitacion.nombre}
                        </h1>
                        <p className="text-xl text-stone-500 font-serif italic">
                            "{habitacion.slogan}"
                        </p>
                    </div>

                    {/* Descripción */}
                    <p className="text-stone-600 leading-relaxed font-light text-lg">
                        {habitacion.informacion}
                    </p>

                    {/* Capacidad y Check */}
                    <div className="flex items-center gap-6 py-2">
                        <div className="flex items-center gap-3 text-emerald-900 font-bold bg-emerald-50 px-4 py-2 rounded-lg">
                            <Users size={20} className="text-amber-600" />
                            <span>{habitacion.cupo} Huéspedes</span>
                        </div>
                        {/* <div className="flex items-center gap-2 text-sm text-stone-500">
                            <CheckCircle2 size={16} className="text-emerald-600" />
                            <span>Desayuno Incluido</span>
                        </div> */}
                    </div>

                    {/* CTA Action */}
                    <div className="pt-4">
                        <a
                            href="https://booking.easy-rez.com/hotel-danini/es/availability"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-emerald-900 text-white font-bold uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300"
                        >
                            Reservar Esta Habitación
                        </a>
                        <p className="text-center text-xs text-stone-400 mt-3">
                            Confirmación inmediata • Mejor precio garantizado
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};