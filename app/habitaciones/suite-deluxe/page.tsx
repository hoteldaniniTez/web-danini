
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
  Sun,
  GalleryVertical,
  Bath
} from 'lucide-react';

// --- Datos Estáticos de la Habitación (Definidos en el Server) ---
const habitacionData: HabitacionProps = {
  nombre: "Suite Deluxe",
  slogan: "Confort, estilo y la mejor vista a la montaña.",
  informacion:
    "Descubre el encanto de nuestra Suite Deluxe, un espacio perfectamente optimizado para brindar confort y calidez. Ideal para familias unidas o grupos cercanos, esta acogedora habitación cuenta con dos camas Queen Size que garantizan un descanso de lujo. Lo mejor de esta experiencia es su terraza privada: una extensión al aire libre que complementa el interior, ofreciéndoles un rincón fresco y relajado para disfrutar de un café o una charla tranquila. Un ambiente compacto, funcional y lleno de estilo boutique.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402690/habitaciones/suiteDeluxe/suite_hd8yhc.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402693/habitaciones/suiteDeluxe/terraza_gt0sja.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402686/habitaciones/suiteDeluxe/ba%C3%B1oS_nforsj.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694412270/habitaciones/suiteDeluxe/ba%C3%B1oS2_sdb28w.jpg",
  ],
  cupo: 4,
};

const tablaData: TablaProps = {
  elementos: [
    {
      descripcion: "2 camas queen size",
      icono: <Bed size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Vestidor",
      icono: <GalleryVertical size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Terraza",
      icono: <Sun size={16} className="text-gray-500" />,
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
export default function SuiteDeluxePage() {
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