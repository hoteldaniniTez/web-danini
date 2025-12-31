import { NosotrosClient } from '@/components';
import Image from 'next/image';

export const metadata = {
  title: 'Nosotros - Hotel Danini Teziutlán',
  description: 'Nuestra esencia.',
};


export default function NosotrosPage() {
  return (
    // CORRECCIÓN AQUI:
    // 1. 'w-full': Asegura que el contenedor tome el ancho disponible del padre.
    // 2. 'overflow-x-hidden': CORTA cualquier elemento hijo que intente salirse del ancho (evita el scroll lateral y el espacio negro).
    <main className="bg-stone-50 min-h-screen w-full overflow-x-hidden">

      {/* Sección Hero */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">

        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694404467/exteriores/exteriorHabitaciones_evenni.jpg"
            alt="Fachada Hotel Danini"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.85]"
          />
        </div>

        {/* Texto Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <span className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium drop-shadow-md">
            Nuestra Esencia
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide drop-shadow-lg">
            NOSOTROS
          </h1>
          <div className="w-24 h-0.5 bg-white/80 mt-6 shadow-sm"></div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <NosotrosClient />
      </div>

    </main>
  );
}