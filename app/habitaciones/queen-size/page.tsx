import { HabitacionClient, TablaClient } from '@/components';
import { HabitacionProps, TablaProps } from '@/interfaces';
import {
  Bed, ThermometerSnowflake, Tv, Wifi, Sparkles, Utensils,
  Wind, Shirt, Phone, Mountain, Briefcase, Package, Layers,
  ShowerHead, DoorOpen, ShieldAlert, Bath
} from 'lucide-react';

// --- Datos Estáticos (Mismos datos, solo presentación) ---
const habitacionData: HabitacionProps = {
  nombre: "Queen Size",
  slogan: "Confort, estilo y la mejor vista a la montaña.",
  informacion: "Descubre el equilibrio perfecto entre intimidad y sofisticación. Diseñada meticulosamente para ser mucho más que un lugar de descanso, este espacio te envuelve en una atmósfera de serenidad absoluta. Despierta cada mañana con una vista privilegiada y disfruta de una selección de amenidades premium.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402655/habitaciones/queenSize/queen2_xe497t.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402652/habitaciones/queenSize/queen_ay0ymz.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402650/habitaciones/queenSize/ba%C3%B1o_etyjbf.jpg",
  ],
  cupo: 2,
};

const tablaData: TablaProps = {
  elementos: [
    { descripcion: "1 Cama Queen Size", icono: <Bed size={20} /> },
    { descripcion: "Climatización", icono: <ThermometerSnowflake size={20} /> },
    { descripcion: "Baño Completo", icono: <Bath size={20} /> },
    { descripcion: "Smart TV 40''", icono: <Tv size={20} /> },
    { descripcion: "Wi-Fi Alta Velocidad", icono: <Wifi size={20} /> },
    { descripcion: "Amenidades L'Occitane", icono: <Sparkles size={20} /> }, // UX Writing: Sé específico con marcas si es lujo
    { descripcion: "Room Service", icono: <Utensils size={20} /> },
    { descripcion: "Secadora de pelo", icono: <Wind size={20} /> },
    { descripcion: "Kit de planchado", icono: <Shirt size={20} /> },
    { descripcion: "Teléfono", icono: <Phone size={20} /> },
    { descripcion: "Vista a la Montaña", icono: <Mountain size={20} /> },
    { descripcion: "Área de trabajo", icono: <Briefcase size={20} /> },
    { descripcion: "Kit de baño", icono: <Package size={20} /> },
    { descripcion: "Toallas Premium", icono: <Layers size={20} /> },
    { descripcion: "Regadera de Lluvia", icono: <ShowerHead size={20} /> }, // "Regadera" suena simple, "De lluvia" vende experiencia
    { descripcion: "Clóset amplio", icono: <DoorOpen size={20} /> },
    { descripcion: "Caja fuerte", icono: <ShieldAlert size={20} /> },
  ]
};

export default function QueenSizePage() {
  return (
    <main className="bg-stone-50 min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        <HabitacionClient habitacion={habitacionData} />
        <div className="max-w-6xl mx-auto">
          <TablaClient tabla={tablaData} />
        </div>
      </div>
    </main>
  );
};