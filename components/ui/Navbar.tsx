'use client';
import { useState, useEffect } from 'react'; // 1. Importamos hooks necesarios
import Image from "next/image";
import Link from "next/link";
import { Phone, Facebook, Instagram, MapPin, Menu } from 'lucide-react';
import { useUIStore } from "@/store";
import { Navlink } from "./Navlink";
import { habitaciones } from "@/interfaces";
import { Widget } from './Widget';

export const Navbar = () => {
    const openMenu = useUIStore(state => state.openSideMenu);

    // Estado para controlar la visibilidad
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Tamaño de iconos en Desktop
    const iconSizeDesktop = 28;

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                const currentWidth = window.innerWidth; // Obtenemos el ancho actual

                // AJUSTE DINÁMICO DEL UMBRAL
                // Definimos el threshold base
                let threshold = 209; // Default (Móvil)

                // Verificamos los breakpoints de Tailwind
                if (currentWidth >= 1280) {
                    // Breakpoint XL (Escritorio grande)
                    threshold = 386;
                } else if (currentWidth >= 768) {
                    // Breakpoint MD (Tablet / Laptop pequeña)
                    threshold = 286;
                }

                if (currentScrollY === 0) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > threshold) {
                    // Ocultamos si bajamos Y pasamos el umbral correspondiente a la pantalla
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    // Si subimos, mostramos siempre
                    setIsVisible(true);
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`
                bg-[#003629] 
                fixed top-0 w-full z-50 
                shadow-[0_4px_20px_-5px_rgba(0,0,0,0.4)] 
                border-b border-[#d79623]/20
                transition-transform duration-700 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="container mx-auto relative">

                {/* ==================== HEADER MÓVIL (< xl) ==================== */}
                {/* ==================== HEADER MÓVIL (< xl) ==================== */}
                {/* 1. Altura del contenedor: Usamos h-40 (160px) que es bastante alto pero manejable. */}
                <div className="xl:hidden relative flex justify-end items-center h-40 px-4 pointer-events-auto overflow-visible">

                    {/* 2. LOGO GIGANTE (Centrado Absoluto) */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex justify-center items-center">
                        <Link href="/" className="block relative group pointer-events-auto">

                            {/* Efecto de brillo detrás */}
                            <div className="absolute inset-0 bg-[#d79623] blur-3xl opacity-20 rounded-full scale-150"></div>

                            {/* CAMBIOS CLAVE AQUÍ:
                 1. w-60: Forzamos un ancho de 240px (muy ancho para móvil).
                 2. h-auto: Dejamos que la altura crezca proporcional al ancho.
                 3. scale-110: Le damos un 10% extra de zoom visual sin afectar el layout.
                 Esto hará que el logo se vea MASIVO.
             */}
                            <Image
                                alt="Logo Hotel Danini"
                                src="https://res.cloudinary.com/dawwp31sm/image/upload/v1737787518/inicio/logoHotel_ck88dm.png"
                                priority={true}
                                width={300}
                                height={180}
                                className="w-72 h-auto object-contain drop-shadow-2xl scale-110 transform"
                            />
                        </Link>
                    </div>

                    {/* 3. BOTÓN DE MENÚ (Derecha) */}
                    <div className="relative z-20">
                        <button
                            onClick={openMenu}
                            className="text-[#f0e1ce] hover:text-[#d79623] transition-all duration-300 active:scale-95 p-2 rounded-xl hover:bg-[#f0e1ce]/10"
                            aria-label="Abrir menú"
                        >
                            {/* Mantenemos el icono de buen tamaño para equilibrar */}
                            <Menu size={42} strokeWidth={1.5} />
                        </button>
                    </div>

                </div>


                {/* ==================== HEADER DESKTOP (>= xl) ==================== */}
                <div className="hidden xl:flex justify-between items-start pt-6 relative min-h-[140px]">

                    {/* IZQUIERDA: Redes Sociales */}
                    <div className="flex items-center gap-6 pt-2 text-[#f0e1ce]/80 hover:text-[#f0e1ce] transition-colors">
                        <a href="https://www.facebook.com/HotelDaniniTeziutlan" target="_blank" className="hover:text-[#d79623] hover:scale-110 transition-all duration-300 p-1">
                            <Facebook size={iconSizeDesktop} strokeWidth={1.5} />
                        </a>
                        <a href="https://www.instagram.com/hoteldanini_teziutlan" target="_blank" className="hover:text-[#d79623] hover:scale-110 transition-all duration-300 p-1">
                            <Instagram size={iconSizeDesktop} strokeWidth={1.5} />
                        </a>
                    </div>

                    {/* CENTRO: EL ESCUDO */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10 pt-4">
                        <Link href="/" className="block group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#d79623] blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full"></div>
                                <Image
                                    alt="Logo Hotel Danini"
                                    src="https://res.cloudinary.com/dawwp31sm/image/upload/v1737787518/inicio/logoHotel_ck88dm.png"
                                    priority={true}
                                    width={280}
                                    height={160}
                                    className="h-40 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 transform -translate-y-2"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* DERECHA: Datos de Contacto */}
                    <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-6 text-[#f0e1ce]/80">
                            <a href="tel:+522311023773" className="hover:text-[#d79623] hover:scale-110 transition-all duration-300 p-1" aria-label="Llamar">
                                <Phone size={iconSizeDesktop} strokeWidth={1.5} />
                            </a>
                            <a href="https://goo.gl/maps/mixF55zxoMPCGuhE8" target="_blank" className="hover:text-[#d79623] hover:scale-110 transition-all duration-300 p-1" aria-label="Ubicación">
                                <MapPin size={iconSizeDesktop} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* NAVEGACIÓN INFERIOR (Solo Desktop) */}
                <nav className="hidden xl:flex justify-center items-center w-full pb-8 pt-12 space-x-14 mt-2">
                    <Navlink link="" name="Inicio" />
                    <Navlink link="nosotros" name="Nosotros" />
                    <Navlink link="habitaciones" name="Habitaciones" dropdownItems={habitaciones} />
                    <Navlink link="experiencias" name="Experiencias" />
                    <Navlink link="restaurante" name="Restaurante" />
                    <Navlink link="eventos" name="Eventos" />
                    <Navlink link="pet-friendly" name="Pet Friendly" />
                    <Navlink link="contactos" name="Contacto" />
                </nav>
            </div>
            <div className="hidden md:flex w-full justify-center items-center bg-[#f9f9f9] py-2">
                <h5 className="text-xl md:text-2xl font-normal tracking-[0.15em] text-[#003629] font-['BebasNeu'] antialiased">
                    RESERVA TU ESTANCIA
                </h5>
            </div>
            <Widget />
        </div>
    );
};