
import { PetFriendlyClient } from '@/components';
import { PawPrint } from 'lucide-react';
import Image from "next/image";

export default function PetPage() {
  const accentColor = '#d79623'; // Dorado
  const darkGreen = '#003629';   // Verde corporativo

  return (
    <section className="relative w-full overflow-hidden bg-stone-50 py-16 md:py-24" id="pet-friendly-policy">

      {/* Elemento decorativo de fondo (Huella gigante sutil) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] pointer-events-none">
        <PawPrint size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER: Más editorial, menos estándar */}
        <header className="text-center mb-16 relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-3 block">
            Servicios Especiales
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-[#003629] mb-4">
            Pet Friendly
          </h1>
          <div className="w-16 h-1 bg-[#d79623] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            Sabemos que la familia no está completa sin ellos. Disfruta de una estancia inolvidable junto a tu fiel compañero.
          </p>
        </header>

        {/* LAYOUT PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* COLUMNA 1: IMAGEN (Con efecto flotante y borde elegante) */}
          <div className="order-first lg:order-first relative group">
            {/* Marco decorativo desplazado */}
            <div className="absolute inset-0 bg-[#003629] rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>

            <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dawwp31sm/image/upload/v1764887149/inicio/pet-friendly_lvx2ph.jpg"
                alt="Experiencia Pet Friendly Hotel Danini"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Gradiente suave en la parte inferior de la imagen */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl italic">"Más que una mascota"</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: INFORMACIÓN (Client Component) */}
          <PetFriendlyClient />

        </div>
      </div>
    </section>
  );
}