'use client';

import { TablaProps } from '@/interfaces';

interface Props {
    tabla: TablaProps;
}

export const TablaClient: React.FC<Props> = ({ tabla }) => {

    return (
        <section className="space-y-12">

            {/* Título de Sección con Diseño */}
            <div className="text-center space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">
                    Detalles que enamoran
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-emerald-950">
                    Servicios y Amenidades
                </h2>
                <div className="w-16 h-1 bg-stone-200 mx-auto rounded-full"></div>
            </div>

            {/* Grid de Amenidades: Sin bordes duros, iconos grandes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {tabla.elementos.map((servicio, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-50 group"
                    >
                        <div className="mb-4 p-4 bg-stone-50 rounded-full group-hover:bg-emerald-50 transition-colors text-stone-400 group-hover:text-amber-600">
                            {/* Clona el elemento icono para inyectarle clases si fuera necesario, 
                                aunque en este caso controlamos el color con el div padre */}
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {servicio.icono}
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-emerald-950">
                            {servicio.descripcion}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};