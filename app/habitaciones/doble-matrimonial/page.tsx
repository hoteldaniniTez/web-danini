
import { HabitacionClient, TablaClient } from '@/components';
import { HabitacionProps, TablaProps } from '@/interfaces'; // Tipos importados
import {
  Bed,
  ThermometerSnowflake,
  Tv,
  Wifi,
  Sparkles,
  Utensils,
  Wind,
  Shirt,
  Phone,
  Mountain,
  Briefcase,
  Package,
  Layers,
  ShowerHead,
  DoorOpen,
  ShieldAlert,
  Bath
} from 'lucide-react';

// --- Datos Estáticos de la Habitación (Definidos en el Server) ---
const habitacionData: HabitacionProps = {
  nombre: "Doble Matrimonial",
  slogan: "Confort, estilo y la mejor vista a la montaña.",
  informacion:
    "Diseñada para quienes viajan acompañados pero valoran su espacio personal. Nuestra habitación Doble ofrece la combinación perfecta de funcionalidad y estilo boutique. Descansen plácidamente en dos confortables camas matrimoniales, vestidas con lencería de alta calidad para garantizar un sueño reparador. Equipada meticulosamente con todas las amenidades necesarias para una estancia sin preocupaciones, esta habitación es tu refugio privado donde el confort y la atención al detalle son los protagonistas.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402545/habitaciones/dobleMatrimonial/doble2_jcfxbb.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402543/habitaciones/dobleMatrimonial/doble_x6qnoa.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402541/habitaciones/dobleMatrimonial/ba%C3%B1o2_tdvdam.jpg",
  ],
  cupo: 4,
};

const tablaData: TablaProps = {
  elementos: [
    {
      descripcion: "2 camas matrimoniales",
      icono: <Bed size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Climatización",
      icono: <ThermometerSnowflake size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Cuarto de baño completo",
      icono: <Bath size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Pantalla Smart TV de 40''",
      icono: <Tv size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Conexión Wi-Fi",
      icono: <Wifi size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Amenidades de baño de lujo",
      icono: <Sparkles size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Servicio a la habitación disponible",
      icono: <Utensils size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Secadora de pelo",
      icono: <Wind size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Plancha y burro de planchar (a solicitud)",
      icono: <Shirt size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Teléfono con línea directa",
      icono: <Phone size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Vista privilegiada a la montaña",
      icono: <Mountain size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Escritorio",
      icono: <Briefcase size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Kit de baño",
      icono: <Package size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Toallas",
      icono: <Layers size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Regadera",
      icono: <ShowerHead size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Aire acondicionado",
      icono: <ThermometerSnowflake size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Plancha",
      icono: <Shirt size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Tabla de planchar",
      icono: <Shirt size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Clóset",
      icono: <DoorOpen size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Detector de humo",
      icono: <ShieldAlert size={16} className="text-gray-500" />,
    }
  ]
};

// --- Componente Principal de Página ---
export default function DobleMatrimonialPage() {
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