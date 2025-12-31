'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Fingerprint } from 'lucide-react';

export const MapaInteractivo = () => {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <div className="lg:col-span-7 order-2">
            <div className="sticky top-24">
                <div
                    className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-stone-100 group"
                    // Si el mouse sale del mapa, desactivamos la interacción para recuperar el scroll normal
                    onMouseLeave={() => setIsInteractive(false)}
                >

                    {/* 1. ETIQUETA DE UBICACIÓN (Estética) */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                        <MapPin size={14} className="text-emerald-900" />
                        <span className="text-xs font-bold tracking-widest text-emerald-900 uppercase">
                            Centro Histórico
                        </span>
                    </div>

                    {/* 2. CAPA DE PROTECCIÓN (SCROLL GUARD) */}
                    {/* Esta capa previene que el scroll se quede atrapado en el mapa hasta que se active */}
                    {!isInteractive && (
                        <div
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 cursor-pointer transition-colors hover:bg-black/10"
                            onClick={() => setIsInteractive(true)}
                            onTouchStart={() => setIsInteractive(true)} // Mejor respuesta en móvil
                        >
                            <button className="bg-white/90 backdrop-blur text-emerald-950 px-6 py-3 rounded-full font-bold text-sm shadow-lg transform transition-transform group-hover:scale-105 flex items-center gap-2">
                                <Fingerprint size={18} />
                                <span>Tocar para explorar mapa</span>
                            </button>
                        </div>
                    )}

                    {/* 3. BOTÓN FLOTANTE "CÓMO LLEGAR" (Crucial para UX Móvil) */}
                    {/* Este botón siempre está disponible y abre la app nativa de mapas */}
                    <a
                        href="https://maps.app.goo.gl/CTDkbxFnvfFPgZRF6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 z-20 bg-emerald-900 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-emerald-800 transition-colors flex items-center gap-2"
                    >
                        <Navigation size={14} />
                        Cómo llegar
                    </a>

                    {/* 4. EL IFRAME */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3524720062005!2d-97.36358728531444!3d19.82503368666256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daebd1304e244b%3A0x8adc043a4679d9dd!2sHotel%20Danini!5e0!3m2!1ses!2smx!4v1627563765522!5m2!1ses!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación del Hotel Danini"
                        className={`
                            w-full h-full transition-all duration-700
                            ${isInteractive ? 'pointer-events-auto grayscale-0' : 'pointer-events-none grayscale'}
                        `}
                    ></iframe>
                </div>

                {/* Micro-texto de ayuda UX */}
                <p className="text-center text-xs text-stone-400 mt-2 lg:hidden">
                    {isInteractive ? 'Usa dos dedos para mover el mapa' : 'Toca el mapa para interactuar'}
                </p>
            </div>
        </div>
    );
};