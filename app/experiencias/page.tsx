
import { ExperienciasClient } from '@/components';
import { Paquete } from '@/interfaces';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Experiencias - Hotel Danini Teziutlán',
  description: 'Porque los pequeños detalles son los que construyen los grandes recuerdos.',
};


// Datos definidos en el servidor (SEO Friendly)
const packagesData: Paquete[] = [
  {
    titulo: 'Noche de Bodas Mágica', // Antes: Paquete Nupcial
    subtitulo: 'El inicio perfecto para su historia',
    descripcion: 'Nuestra Suite Nupcial es decorada con toques de romanticismo y magia. Cada aroma, detalle y accesorio está pensado en el confort absoluto que merecen en su primera noche.',
    lista: [
      'Hospedaje en Suite King Size con balcón y vista a la montaña (Hab. 17).',
      'Botella de vino espumoso Asti Capetta.',
      'Deliciosa canasta de frutas de temporada.',
      'Decoración romántica con pétalos de rosas y globos.',
      'Dos desayunos Buffet en Restaurante Danini.',
      'Late Check-out hasta las 3:00 PM.',
      'Acceso exclusivo a jardines para sesión fotográfica.',
    ],
    precio: '$3,190.00 MXN',
    advertencia: 'Impuestos incluidos. Tarifa sujeta a cambios sin previo aviso.',
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404188/eventos/boda5_h8thuo.jpg" // Usamos la misma o una específica
  },
  {
    titulo: 'Decoración Cena Romántica', // Antes: Arreglo de mesa
    subtitulo: 'Celebra el amor en cada detalle',
    descripcion: 'Celebra tu gran día con un montaje exquisito. Nuestro equipo cuida cada detalle para crear una atmósfera íntima y sofisticada, reflejando la esencia de su amor.',
    lista: [
      'Montaje de mesa con mantelería de lujo.',
      'Cristalería y cubertería premium.',
      'Ambientación con velas.',
      'Decoración con pétalos de rosas naturales.',
      'Servicio personalizado.',
    ],
    precio: '$350.00 MXN',
    advertencia: 'Costo adicional al consumo. Sujeto a disponibilidad.',
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1737708476/restaurante/restauranteInicio_nyimgd.jpg" // Sugerencia de imagen
  },
  {
    titulo: 'Sesión Fotográfica',
    subtitulo: 'Captura momentos eternos',
    descripcion: 'El escenario perfecto para tus recuerdos. Aprovecha la arquitectura colonial y las vistas más espectaculares de la Sierra Poblana.',
    lista: [
      'Acceso total a jardines y áreas comunes.',
      'Locaciones en restaurante y terrazas.',
      'Coffee break (Café, té, agua y galletas).',
      'Acceso permitido de 1 a 40 personas.',
    ],
    precio: '$2,500.00 MXN',
    advertencia: 'Por sesión. Requiere reservación previa.',
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404467/exteriores/exteriorHabitaciones_evenni.jpg"
  },
];

export default function ExperienciasPage() {
  return (
    <main className="bg-stone-50 min-h-screen pb-20">

      {/* HERO SECTION: Diseño Editorial */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <Image
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694404188/eventos/boda5_h8thuo.jpg"
          alt="Experiencias Hotel Danini"
          fill
          priority
          className="
            object-cover
            /*lg:object-contain*/
          "
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 100vw,
            100vw
          "
        />

        {/* Contenido del Hero */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#d79623] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">
            Complementa tu estancia
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
            Experiencias Inolvidables
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl font-serif italic">
            "Porque los pequeños detalles son los que construyen los grandes recuerdos."
          </p>
        </div>
      </div>

      {/* INTRODUCCIÓN */}
      <div className="max-w-4xl mx-auto text-center px-6 py-16 md:py-20">
        <Sparkles size={32} className="text-[#d79623] mx-auto mb-6" />
        <p className="text-stone-600 text-lg leading-relaxed">
          En Hotel Danini, queremos que tu visita sea extraordinaria. Hemos curado una selección de
          experiencias exclusivas para celebrar el amor, la vida y los momentos especiales.
        </p>
      </div>

      {/* COMPONENTE CLIENTE (CARRUSEL/GRID) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienciasClient paquetes={packagesData} />
      </div>

    </main>
  );
}