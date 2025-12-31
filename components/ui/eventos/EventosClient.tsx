'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Users, Ruler, CalendarHeart,
    MessageCircle, Phone, X, ZoomIn,
    Clock, Bed, ShieldCheck, Zap, Info, Check
} from 'lucide-react';
import { EspacioEvento } from '@/interfaces';

// --- INTERFACES INTERNAS PARA TARIFAS ---
interface TarifaInfo {
    nombre: string;
    // precio: string;
    duracion?: string;
    caracteristicas: string[];
    esPaquetePremium?: boolean; // Para destacar paquetes con hospedaje
    notas?: string;
}

// --- DATA TRANSFORMADA (Tu información procesada) ---
const tarifasData: TarifaInfo[] = [
    // RENTA DE ESPACIOS (Venue Only)
    {
        nombre: "Jardín de la Fuente",
        // precio: "$5,000",
        duracion: "12 Horas de Renta",
        caracteristicas: [
            "Área de jardín disponible",
            "Montaje desde 1 día antes (+$500)",
            "Luz para DJ (Grupos requieren planta)",
            "Servicio de baños básicos",
        ],
        esPaquetePremium: false
    },
    {
        nombre: "Zona de Arcos con Jardín",
        // precio: "$5,000",
        duracion: "8 Horas (7 AM - 11 PM)",
        caracteristicas: [
            "Capacidad sugerida: 10 mesas (80 pax)",
            "Jardín exclusivo para brincolín",
            "Montaje desde 1 día antes (+$500)",
            "Luz para DJ",
        ],
        esPaquetePremium: false
    },
    {
        nombre: "Terraza El Mural",
        // precio: "$7,000",
        duracion: "8 Horas (7 AM - 11 PM)",
        caracteristicas: [
            "Ideal para eventos íntimos",
            "Montaje desde 1 día antes (+$1,000)",
            "Suministros de baño por 6 horas",
            "Luz convencional incluida"
        ],
        esPaquetePremium: false
    },
    {
        nombre: "Jardín Danini (Solo Renta)",
        // precio: "$12,500",
        duracion: "7 AM a 11 PM",
        caracteristicas: [
            "Espacio disponible 2 días antes",
            "Suministros de baño por 8 horas",
            "Luz para DJ incluida",
            "Montaje 3 días antes (+$1,000)"
        ],
        esPaquetePremium: false,
        notas: "El espacio insignia del hotel"
    },
    // PAQUETES CON HOSPEDAJE (Premium)
    {
        nombre: "Jardín Danini + Hospedaje",
        // precio: "$27,000",
        duracion: "Evento + 1 Noche",
        caracteristicas: [
            "Renta Jardín Danini (1 día)",
            "7 Habitaciones junto al jardín",
            "(2 Queen, 3 King, 1 Doble, 1 Master Suite)",
            "Montaje disponible 2 días antes",
            "Privacidad y comodidad total"
        ],
        esPaquetePremium: true
    },
    {
        nombre: "Pack Danini + Fuente",
        // precio: "$35,800",
        duracion: "Evento + 1 Noche",
        caracteristicas: [
            "Todo lo incluido en Jardín Danini",
            "Renta Jardín de la Fuente (6 hrs)",
            "7 Habitaciones junto al jardín",
            "Ideal para bodas con cóctel previo",
            "Montaje disponible 2 días antes"
        ],
        esPaquetePremium: true
    },
    {
        nombre: "Paquete Danini Completo",
        // precio: "$63,530",
        duracion: "Hotel Completo en Exclusiva",
        caracteristicas: [
            "Renta Jardín Danini + Arcos",
            "Renta Jardín de la Fuente + Terraza Mural",
            "21 Habitaciones (Hospedaje 1 noche)",
            "10% Desc. en noches extra",
            "La experiencia definitiva de lujo"
        ],
        esPaquetePremium: true,
        notas: "El hotel entero solo para ti"
    }
];

interface Props {
    espacios: EspacioEvento[];
    galeria: string[];
}

export const EventosClient: React.FC<Props> = ({ espacios, galeria }) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Colores de marca
    const primaryText = 'text-[#003629]';
    const accentText = 'text-[#d79623]';
    const bgPremium = 'bg-[#003629]';

    return (
        <div className="pb-20">

            {/* 1. INTRODUCCIÓN & COTIZACIÓN RÁPIDA */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <span className="text-[#d79623] font-bold tracking-widest uppercase text-xs">
                            Hotel Danini Events
                        </span>
                        <h2 className={`text-4xl font-serif font-bold ${primaryText}`}>
                            Donde la magia sucede
                        </h2>
                        <p className="text-stone-600 leading-loose text-lg">
                            Disponemos de espacios versátiles que combinan la arquitectura colonial con la naturaleza de la sierra.
                            Ya sea una boda íntima, un bautizo familiar o un evento corporativo, nuestro equipo se encarga de cada detalle.
                        </p>

                        {/* Botones de Contacto */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://wa.me/5212312326505"
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-[#003629] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-[#004d3a] transition-colors shadow-lg hover:-translate-y-1 transform duration-300"
                            >
                                <MessageCircle size={20} />
                                Cotizar Fecha
                            </a>
                            <a
                                href="tel:+522312326505"
                                target="_blank"
                                className="inline-flex items-center gap-3 border-2 border-[#003629] text-[#003629] px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-[#003629] hover:text-white transition-colors"
                            >
                                <Phone size={20} />
                                Llamar
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#d79623]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className={`text-2xl font-serif font-bold ${primaryText} mb-6`}>Especialistas en:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Bodas Destino', 'XV Años', 'Bautizos', 'Pedidas de Mano', 'Cenas Románticas', 'Eventos Corporativos'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                                    <CalendarHeart size={20} className={accentText} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. NUESTROS ESPACIOS (Visual) */}
            <section className="bg-stone-50 py-20 border-y border-stone-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-serif font-bold ${primaryText}`}>Nuestros Espacios</h2>
                        <p className="text-stone-500 mt-2">Arquitectura y naturaleza en armonía</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {espacios.map((espacio, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={espacio.imagen}
                                        alt={espacio.nombre}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className={`text-2xl font-serif font-bold ${primaryText} mb-3`}>{espacio.nombre}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                                        {espacio.descripcion}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6 bg-stone-50 p-4 rounded-xl">
                                        <div className="flex flex-col items-center text-center">
                                            <Users size={20} className={accentText} />
                                            <span className="text-[10px] text-stone-400 uppercase font-bold mt-1">Capacidad</span>
                                            <span className="text-sm font-bold text-stone-700">{espacio.capacidad}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center border-l border-stone-200">
                                            <Ruler size={20} className={accentText} />
                                            <span className="text-[10px] text-stone-400 uppercase font-bold mt-1">Medidas</span>
                                            <span className="text-sm font-bold text-stone-700">{espacio.medidas}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {espacio.idealPara.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-[#d79623]/10 text-[#d79623] text-xs font-bold rounded-full uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TARIFAS Y PAQUETES (Nueva Sección) */}
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-[#d79623] font-bold tracking-widest uppercase text-xs">Vigencia 2025</span>
                    <h2 className={`text-4xl font-serif font-bold ${primaryText} mt-2`}>Paquetes & Tarifas</h2>
                    <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
                        Diseñamos opciones flexibles. Desde la renta exclusiva del espacio hasta experiencias completas con hospedaje para tus invitados.
                    </p>
                </div>

                {/* Grid de Tarifas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tarifasData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`
                                relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl flex flex-col
                                ${item.esPaquetePremium
                                    ? 'bg-[#003629] text-white border-[#003629] lg:col-span-1 md:col-span-2'
                                    : 'bg-white border-stone-200 hover:border-[#d79623]/50 text-stone-700'}
                                ${item.nombre.includes('Completo') ? 'lg:col-span-2 xl:col-span-1' : ''}
                            `}
                        >
                            {/* Badge Premium */}
                            {item.esPaquetePremium && (
                                <div className="absolute top-4 right-4">
                                    <Bed className="text-[#d79623]" size={24} />
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className={`text-xl font-bold mb-2 ${item.esPaquetePremium ? 'text-white' : 'text-[#003629]'}`}>
                                    {item.nombre}
                                </h3>
                                {/* <div className="flex items-baseline gap-1">
                                    <span className={`text-2xl font-bold ${item.esPaquetePremium ? 'text-[#d79623]' : 'text-[#003629]'}`}>
                                        {item.precio}
                                    </span>
                                    <span className={`text-xs uppercase tracking-wide ${item.esPaquetePremium ? 'text-white/60' : 'text-stone-400'}`}>MXN</span>
                                </div> */}
                                {item.duracion && (
                                    <div className={`flex items-center gap-2 mt-2 text-sm ${item.esPaquetePremium ? 'text-white/80' : 'text-stone-500'}`}>
                                        <Clock size={14} />
                                        {item.duracion}
                                    </div>
                                )}
                            </div>

                            <div className={`h-px w-full my-4 ${item.esPaquetePremium ? 'bg-white/10' : 'bg-stone-100'}`}></div>

                            <ul className="space-y-3 flex-1 mb-6">
                                {item.caracteristicas.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-sm">
                                        <Check size={16} className={`mt-0.5 shrink-0 ${item.esPaquetePremium ? 'text-[#d79623]' : 'text-green-600'}`} />
                                        <span className={item.esPaquetePremium ? 'text-stone-200' : 'text-stone-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* <button className={`
                                w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors
                                ${item.esPaquetePremium
                                    ? 'bg-[#d79623] text-white hover:bg-[#c0851f]'
                                    : 'bg-stone-100 text-[#003629] hover:bg-stone-200'}
                            `}>
                                Consultar
                            </button> */}
                        </div>
                    ))}
                </div>

                {/* Términos y Condiciones (Colapsados visualmente para limpieza) */}
                <div className="mt-16 bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-200">
                    <h4 className="flex items-center gap-2 text-[#003629] font-bold text-lg mb-4">
                        <Info size={20} />
                        Políticas y Consideraciones Generales
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-600">
                        <div className="flex gap-3">
                            <ShieldCheck className="shrink-0 text-[#d79623]" size={18} />
                            <p><strong>Depósito de Garantía:</strong> Se requiere un 10% en efectivo para excedentes e imprevistos. Reembolsable al finalizar si no hay incidencias.</p>
                        </div>
                        <div className="flex gap-3">
                            <Zap className="shrink-0 text-[#d79623]" size={18} />
                            <p><strong>Electricidad:</strong> Luz básica para DJ incluida. Grupos musicales deben traer su propia fuente de luz/planta.</p>
                        </div>
                        <div className="flex gap-3">
                            <Check className="shrink-0 text-[#d79623]" size={18} />
                            <p><strong>Limpieza:</strong> El cliente es responsable de retirar la basura generada al finalizar el evento. El desmontaje debe realizarse el mismo día.</p>
                        </div>
                        <div className="flex gap-3">
                            <Users className="shrink-0 text-[#d79623]" size={18} />
                            <p><strong>Servicios:</strong> Los baños cuentan con suministros, pero no incluyen personal de atención permanente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GALERÍA (Masonry) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-stone-200">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl font-serif font-bold ${primaryText}`}>Galería de Eventos</h2>
                    <p className="text-stone-500 mt-4">Momentos reales, historias inolvidables.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galeria.map((img, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden cursor-pointer group ${index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Evento Danini ${index}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white hover:text-[#d79623] transition-colors">
                        <X size={40} />
                    </button>
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Vista ampliada"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};