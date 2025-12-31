
import { RoomCardClient } from '@/components';
import { ROOMS_DATA } from '@/interfaces';
import { CalendarCheck, ShieldCheck } from 'lucide-react';

export default function HabitacionesPage() {
  // Paleta de colores definida por variables Tailwind (mentalmente)
  // bg-stone-50 para el fondo general (evita el blanco clínico)

  return (
    <main className="bg-stone-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* 1. SECCIÓN INTRODUCCIÓN (Diseño Editorial) */}
        <section className="text-center max-w-4xl mx-auto space-y-8">

          <header className="space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
              Tu Refugio Personal
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-emerald-950 tracking-tight">
              Nuestras Habitaciones
            </h1>
            <div className="w-24 h-1 bg-emerald-900 mx-auto rounded-full opacity-20 mt-6"></div>
          </header>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed font-serif italic">
              "Descansa, recupera tu energía y encuentra el balance perfecto entre comodidad boutique y funcionalidad moderna."
            </p>

            <p className="text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Disfruta de una experiencia diseñada para tu bienestar. Pide algo de nuestro
              room service, toma un baño restaurador y déjate consentir por la magia de Teziutlán.
            </p>

            {/* CTA PRINCIPAL: Elegante, no agresivo */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <a
                href="https://booking.easy-rez.com/hotel-danini/es/availability"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-emerald-900 rounded-full hover:bg-emerald-800 shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-1"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-3 tracking-widest uppercase text-sm">
                  <CalendarCheck size={18} />
                  Ver Disponibilidad y Tarifas
                </span>
              </a>

              {/* Mensaje de confianza (Trust Signal) */}
              <div className="flex items-center gap-2 text-stone-400 text-xs md:text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Mejor tarifa garantizada reservando directo. Cancelación flexible.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECCIÓN LISTADO (Grid con separación elegante) */}
        <section className="grid grid-cols-1 gap-12 lg:gap-16">
          {ROOMS_DATA.map((room) => (
            <RoomCardClient key={room.id} room={room} />
          ))}
        </section>

      </div>
    </main>
  );
}