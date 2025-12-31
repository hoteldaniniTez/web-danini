
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
  Armchair,
  Refrigerator,
  Microwave,
  Coffee,
  Bath
} from 'lucide-react';

// --- Datos Estáticos de la Habitación (Definidos en el Server) ---
const habitacionData: HabitacionProps = {
  nombre: "Master Suite",
  slogan: "Confort, estilo y la mejor vista a la montaña.",
  informacion:
    "Eleva tu estancia a un nivel superior en la habitación más exclusiva de nuestro hotel. La Master Suite redefine la amplitud ofreciendo un oasis de confort dividido en ambientes sofisticados. Relájense en la sala de estar, disfruten de una cena privada en el comedor o preparen sus bebidas favoritas en la barra equipada. Al momento de descansar, la suite se divide en dos santuarios independientes: una habitación principal con cama King Size y una segunda habitación con cama Queen Size. Espacio, privacidad y amenidades de lujo se unen para crear una experiencia inigualable.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402609/habitaciones/masterDeluxe/master2_rzrba3.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054800/habitaciones/masterDeluxe/masterSuite3_oavck3.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402607/habitaciones/masterDeluxe/master_kcy6q8.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402611/habitaciones/masterDeluxe/mComedor_hhviok.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054797/habitaciones/masterDeluxe/masterSuite2_pt5ag5.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1715054797/habitaciones/masterDeluxe/masterSuite_qd4s6w.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402604/habitaciones/masterDeluxe/ba%C3%B1oM_ev9bta.jpg",
  ],
  cupo: 4,
};


const tablaData: TablaProps = {
  elementos: [
    {
      descripcion: "1 recamara king size",
      icono: <Bed size={16} className="text-gray-500" />,
    },
    {
      descripcion: "1 recamara queen size",
      icono: <Bed size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Sala de estar independiente",
      icono: <Armchair size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Comedor privado",
      icono: <Utensils size={16} className="text-gray-500" />, // Reutilizamos Utensils o podrías usar LayoutGrid
    },
    {
      descripcion: "Barra con Frigobar",
      icono: <Refrigerator size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Horno de microondas",
      icono: <Microwave size={16} className="text-gray-500" />,
    },
    {
      descripcion: "Cafetera y kit de café",
      icono: <Coffee size={16} className="text-gray-500" />,
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
export default function MasterSuitePage() {
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