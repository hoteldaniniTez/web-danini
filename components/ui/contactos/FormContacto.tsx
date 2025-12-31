'use client';

import { Mail, Phone, MapPin, MessageCircle, CalendarDays } from 'lucide-react';

export const FormContacto: React.FC = () => {
    // Paleta de lujo
    const textPrimary = 'text-emerald-950'; // Casi negro, pero verde muy oscuro
    const accentGold = 'text-amber-600';

    return (
        <div className="flex flex-col space-y-10">

            {/* HEADER */}
            <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">
                    Estamos para servirte
                </span>
                <h1 className={`text-4xl md:text-5xl font-serif font-medium ${textPrimary}`}>
                    Contáctanos
                </h1>
                <p className="text-stone-600 leading-relaxed text-lg font-light">
                    Permítenos planificar tu próxima visita. Ya sea unas vacaciones,
                    una reunión de trabajo o una escapada romántica, cuidaremos cada detalle.
                </p>
            </div>

            {/* ENLACES RÁPIDOS (Botones fantasmas) */}
            <div className="flex flex-wrap gap-4">
                <a
                    href="https://maps.app.goo.gl/CTDkbxFnvfFPgZRF6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-amber-600 hover:text-amber-600 transition-colors bg-white"
                >
                    <MapPin size={16} /> Ver Ubicación
                </a>
                <a
                    href="tel:+522311023773"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-amber-600 hover:text-amber-600 transition-colors bg-white"
                >
                    <Phone size={16} /> Llamar al Hotel
                </a>
            </div>

            <div className="w-full h-px bg-stone-200"></div>

            {/* LISTA DE CONTACTOS ESTILIZADA */}
            <div className="space-y-8">
                <h3 className={`text-xl font-serif ${textPrimary}`}>Información Directa</h3>

                <div className="space-y-6">
                    {/* Item 1: Dirección */}
                    <div className="flex group">
                        <div className="mt-1 mr-4 p-3 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Visítanos</p>
                            <p className="text-stone-700">Cto. Juan Pablo II No. 10,<br />Centro, 73800 Teziutlán, Pue.</p>
                        </div>
                    </div>

                    {/* Item 2: Eventos */}
                    <div className="flex group">
                        <div className="mt-1 mr-4 p-3 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                            <CalendarDays size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Eventos y Bodas</p>
                            <a href="tel:+522312326505" className="block text-stone-700 hover:text-amber-600 transition-colors">
                                +52 (231) 232 6505
                            </a>
                            <a href="https://wa.me/5212312326505" className="text-sm text-green-600 hover:underline mt-1 inline-flex items-center gap-1">
                                <MessageCircle size={14} /> Enviar WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Item 3: Email */}
                    <div className="flex group">
                        <div className="mt-1 mr-4 p-3 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Escríbenos</p>
                            <a href="mailto:info@hoteldanini.com" className="text-stone-700 hover:text-amber-600 transition-colors">
                                info@hoteldanini.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA PRINCIPAL */}
            <div className="pt-4">
                <a
                    href="https://booking.easy-rez.com/hotel-danini/es/availability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-emerald-900 text-white text-center font-bold tracking-[0.15em] uppercase text-sm hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl rounded-lg"
                >
                    Reservar Estancia
                </a>
                <p className="text-center text-xs text-stone-400 mt-3">
                    Mejor tarifa garantizada al reservar directo.
                </p>
            </div>

        </div>
    );
};