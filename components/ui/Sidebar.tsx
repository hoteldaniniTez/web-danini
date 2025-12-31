'use client';
import clsx from 'clsx';
import { useUIStore } from '@/store';
import {
    X, Home, Users, Bed, Gift, Utensils, Calendar, Dog, MessageSquare,
    Facebook, Instagram, MapPin, Phone, ShieldCheck
} from 'lucide-react';
import { NavlinkSidebar } from './NavlinkSidebar';
import { habitaciones } from '@/interfaces';

export const Sidebar = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>
            {/* Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-55 bg-black/70 backdrop-blur-[2px] transition-all duration-700",
                    {
                        "opacity-100 visible": isSideMenuOpen,
                        "opacity-0 invisible pointer-events-none": !isSideMenuOpen
                    }
                )}
                onClick={closeMenu}
            />

            <nav
                className={clsx(
                    "fixed top-0 right-0 z-60 w-[85%] sm:w-[450px] h-screen bg-linear-to-b from-[#003629] to-[#00281f] backdrop-blur-xl border-l border-r border-[#d79623]/30 text-[#f0e1ce] shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) flex flex-col overflow-hidden",
                    {
                        "translate-x-0": isSideMenuOpen,
                        "translate-x-full": !isSideMenuOpen
                    }
                )}
            >
                {/* Marca de agua */}
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-[0.07] pointer-events-none text-[#d79623] mix-blend-overlay">
                    <ShieldCheck size={500} strokeWidth={0.5} />
                </div>

                {/* Header */}
                <div className="flex justify-between items-end p-8 pt-10 relative z-10">
                    <div>
                        {/* Mantenemos el título "Menú" en Serif para contraste elegante, 
                            pero si prefieres todo igual, cambia font-serif a font-sans */}
                        <span className="block text-3xl font-serif italic tracking-wider text-white drop-shadow-md">Menú</span>
                        <div className="h-1 w-12 bg-[#d79623] mt-2 rounded-full"></div>
                    </div>
                    <button
                        onClick={closeMenu}
                        className="group p-2 -mr-2 hover:bg-[#d79623]/10 rounded-full transition-colors duration-300"
                    >
                        <X size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500 text-[#d79623]" />
                    </button>
                </div>

                {/* Lista Navegación */}
                <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2 relative z-10 scrollbar-hide">
                    {/* Iconos un poco más grandes (size={26}) para acompañar el texto más grande */}
                    <NavlinkSidebar link="" name="INICIO" icon={<Home size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="nosotros" name="NOSOTROS" icon={<Users size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="habitaciones" name="HABITACIONES" icon={<Bed size={26} strokeWidth={1} />} dropdownItems={habitaciones} />
                    <NavlinkSidebar link="experiencias" name="EXPERIENCIAS" icon={<Gift size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="restaurante" name="RESTAURANTE" icon={<Utensils size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="eventos" name="EVENTOS" icon={<Calendar size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="pet-friendly" name="PET FRIENDLY" icon={<Dog size={26} strokeWidth={1} />} />
                    <NavlinkSidebar link="contactos" name="CONTACTOS" icon={<MessageSquare size={26} strokeWidth={1} />} />
                </div>

                {/* Footer */}
                <div className="p-8 bg-[#00221a]/90 border-t border-[#d79623]/20 relative z-10">
                    <div className="flex flex-col gap-8"> {/* Gap aumentado para más aire */}
                        <div className="flex justify-between px-4">
                            <a href="https://www.facebook.com/HotelDaniniTeziutlan" className="text-[#f0e1ce]/60 hover:text-[#d79623] hover:scale-125 transition-all duration-300"><Facebook size={26} strokeWidth={1.5} /></a>
                            <a href="https://www.instagram.com/hoteldanini_teziutlan" className="text-[#f0e1ce]/60 hover:text-[#d79623] hover:scale-125 transition-all duration-300"><Instagram size={26} strokeWidth={1.5} /></a>
                            <a href="https://goo.gl/maps/mixF55zxoMPCGuhE8" className="text-[#f0e1ce]/60 hover:text-[#d79623] hover:scale-125 transition-all duration-300"><MapPin size={26} strokeWidth={1.5} /></a>
                            <a href="tel:+522311023773" className="text-[#f0e1ce]/60 hover:text-[#d79623] hover:scale-125 transition-all duration-300"><Phone size={26} strokeWidth={1.5} /></a>
                        </div>

                        <a
                            href="https://booking.easy-rez.com/hotel-danini/es/availability"
                            target="_blank"
                            // CAMBIO UX: Botón actualizado para igualar estilo Navbar
                            // font-sans, text-base, bold, tracking-widest
                            className="relative w-full py-4 bg-linear-to-r from-[#d79623] to-[#b57b12] text-white text-center font-sans font-bold uppercase tracking-[0.2em] text-base rounded-sm shadow-lg hover:shadow-[#d79623]/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
                        >
                            <span className="absolute inset-0 w-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                            <span className="relative z-10">Reservar mi Estancia</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};