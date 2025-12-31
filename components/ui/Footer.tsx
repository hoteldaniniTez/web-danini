'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    MessageCircle, // Icono más moderno para WhatsApp
    ArrowRight,
    ChefHat, // Icono para restaurante
    CalendarDays
} from 'lucide-react';

import { Modal } from './Modal';
import { PoliticaPrivacidad } from './PoliticaPrivacidad';
import { PoliticaReservacion } from './PoliticaReservacion';

export const Footer: React.FC = () => {
    const [showPrivacidad, setShowPrivacidad] = useState(false);
    const [showReservacion, setShowReservacion] = useState(false);

    // Paleta de Colores Boutique Dark
    const bgFooter = 'bg-stone-900';
    const textMuted = 'text-stone-400';
    const textLight = 'text-stone-200';
    const accentColor = 'text-[#F0B917]';
    const hoverColor = 'hover:text-[#F0B917]';

    return (
        <footer className={`${bgFooter} border-t border-stone-800 pt-20 pb-10`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* COLUMNA 1: Identidad y Ubicación */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-serif font-medium text-white tracking-wider mb-2">
                                HOTEL DANINI
                            </h3>
                            <div className="w-12 h-0.5 bg-[#F0B917]/80 rounded-full"></div>
                        </div>

                        <p className={`${textMuted} leading-relaxed text-sm`}>
                            Un refugio de confort y tradición en el corazón de la Perla de la Sierra.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className={accentColor} />
                                <span className={`text-sm ${textLight}`}>
                                    Cto. Juan Pablo II No. 10,<br /> Centro, 73800 Teziutlán, Pue.
                                </span>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/CTDkbxFnvfFPgZRF6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F0B917] hover:text-white transition-colors"
                            >
                                Ver en Google Maps <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 2: Contacto Directo (Hotel & Eventos) */}
                    <div className="space-y-6">
                        <h4 className={`text-sm font-bold uppercase tracking-widest ${textLight}`}>
                            Contacto
                        </h4>

                        <div className="space-y-4">
                            {/* Bloque Hotel */}
                            <div>
                                <p className="text-xs font-bold text-stone-500 uppercase mb-1">Recepción</p>
                                <a href="tel:+522311023773" className={`block ${textLight} ${hoverColor} transition-colors`}>
                                    +52 (231) 102-3773
                                </a>
                                <a href="mailto:info@hoteldanini.com" className={`block text-sm ${textMuted} ${hoverColor} transition-colors`}>
                                    info@hoteldanini.com
                                </a>
                            </div>

                            <div className="w-full h-px bg-stone-800"></div>

                            {/* Bloque Eventos */}
                            <div>
                                <p className="text-xs font-bold text-stone-500 uppercase mb-1">Eventos, Bodas & Restaurante</p>
                                <a href="tel:+522312326505" className={`block ${textLight} ${hoverColor} transition-colors`}>
                                    +52 (231) 232-6505
                                </a>
                                <a
                                    href="https://wa.me/5212312326505"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 mt-1"
                                >
                                    <MessageCircle size={14} /> WhatsApp Eventos
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 3: Experiencias (Restaurante) & Social */}
                    <div className="space-y-6">
                        <h4 className={`text-sm font-bold uppercase tracking-widest ${textLight}`}>
                            Experiencias
                        </h4>

                        <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-800">
                            <div className="flex items-center gap-2 mb-2">
                                <ChefHat size={18} className="text-[#F0B917]" />
                                <span className="text-white font-serif font-medium">Restaurante Danini</span>
                            </div>
                            <p className="text-xs text-stone-400 mb-3">Sabores locales con toque gourmet.</p>

                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/share/14QjbiMRRZd/" target="_blank" className="p-2 bg-stone-700 rounded-full hover:bg-[#F0B917] hover:text-white text-stone-300 transition-all">
                                    <Facebook size={16} />
                                </a>
                                <a href="https://www.instagram.com/restaurantedanini_teziutlan/" target="_blank" className="p-2 bg-stone-700 rounded-full hover:bg-[#F0B917] hover:text-white text-stone-300 transition-all">
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Redes Sociales Hotel */}
                        <div>
                            <p className="text-xs font-bold text-stone-500 uppercase mb-2">Síguenos (Hotel)</p>
                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/HotelDaniniTeziutlan" target="_blank" className="text-stone-400 hover:text-blue-500 transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/hoteldanini_teziutlan" target="_blank" className="text-stone-400 hover:text-pink-500 transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 4: Legal & CTA Final */}
                    <div className="space-y-6 flex flex-col justify-between h-full">
                        <div>
                            <h4 className={`text-sm font-bold uppercase tracking-widest ${textLight} mb-4`}>
                                Información Legal
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button onClick={() => setShowReservacion(true)} className={`${textMuted} hover:text-white transition-colors text-left`}>
                                        Políticas de Reservación
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setShowPrivacidad(true)} className={`${textMuted} hover:text-white transition-colors text-left`}>
                                        Aviso de Privacidad
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* CTA BOTÓN GRANDE */}
                        <a
                            href="https://booking.easy-rez.com/hotel-danini/es/availability"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full block text-center bg-[#F0B917] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-lg shadow-lg hover:bg-[#F0B917] transition-all hover:-translate-y-1"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <CalendarDays size={16} />
                                Reservar Ahora
                            </span>
                        </a>
                    </div>
                </div>

                {/* COPYRIGHT BAR */}
                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-stone-600 text-center md:text-left">
                        © {new Date().getFullYear()} Hotel Danini. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-1 text-xs text-stone-600">
                        <span>Teziutlán, Puebla, México.</span>
                    </div>
                </div>
            </div>

            {/* MODALS */}
            <Modal show={showPrivacidad} onClose={() => setShowPrivacidad(false)} title="Aviso de Privacidad">
                <PoliticaPrivacidad />
            </Modal>
            <Modal show={showReservacion} onClose={() => setShowReservacion(false)} title="Políticas de Reservación">
                <PoliticaReservacion />
            </Modal>
        </footer>
    );
};