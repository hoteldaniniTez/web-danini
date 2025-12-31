import { EventosClient } from "@/components";
import { EspacioEvento } from "@/interfaces";
import Image from "next/image";

const espaciosData: EspacioEvento[] = [
  {
    nombre: "Jardín de la Fuente",
    descripcion: "Un escenario al aire libre donde la naturaleza abraza tu celebración. Con vistas panorámicas a la sierra y el sonido relajante de nuestra fuente central, es el lienzo perfecto para ceremonias emotivas al atardecer o recepciones elegantes bajo el cielo de Teziutlán.",
    capacidad: "Hasta 80 personas",
    medidas: "141 m²",
    idealPara: ["Bodas Civiles", "Banquetes", "Cocteles"],
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404185/eventos/boda4_murucb.jpg"
  },
  {
    nombre: "Zona de Arcos con Jardín",
    descripcion: "La fusión ideal entre la arquitectura colonial y la frescura del jardín. Disfruta de la seguridad de un espacio techado con ventanales de piso a techo, permitiendo que la luz natural y las vistas sean protagonistas sin preocuparse por el clima.",
    capacidad: "Hasta 80 personas",
    medidas: "125 m²",
    idealPara: ["Cenas Formales", "Conferencias", "XV Años"],
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1765993138/eventos/arcos_jardin_evento_ayu26b.jpg"
  },
  {
    nombre: "Terraza El Mural",
    descripcion: "Un rincón artístico y vibrante. Nuestra terraza ofrece un ambiente íntimo rodeado de arte y vistas privilegiadas, diseñado exclusivamente para celebraciones 'petit', brindis de honor o experiencias gastronómicas privadas.",
    capacidad: "Hasta 80 personas",
    medidas: "55 m²",
    idealPara: ["Pedidas de Mano", "Bautizos", "Baby Showers"],
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1767203529/eventos/terraza_mural_vjh0nw.png"
  },
  {
    nombre: "Jardín Danini",
    descripcion: "Nuestro espacio estelar. Un majestuoso jardín diseñado para eventos de gran magnitud. Su amplitud permite configuraciones versátiles, desde grandes pistas de baile hasta escenarios espectaculares, garantizando una experiencia de lujo y confort para todos tus invitados.",
    capacidad: "Hasta 350 personas",
    medidas: "658 m²",
    idealPara: ["Bodas", "Bautizos", "XV Años"],
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404180/eventos/boda2_jnrajr.jpg"
  }
];

const galeriaImagenes = [
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404182/eventos/boda3_gq0fxf.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404180/eventos/boda2_jnrajr.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404173/eventos/bautizo4_rxqclw.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404206/eventos/pedidaDeMano_vjvrvx.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404209/eventos/xv_bklwhx.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404196/eventos/comida_sahgvl.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404193/eventos/cena2_zcc6jh.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404201/eventos/evento_sxwb6h.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404165/eventos/bautizo_rneeab.jpg",
];

export default function EventosPage() {
  return (
    <main className="bg-stone-50 min-h-screen">

      {/* HERO SECTION: Impacto Visual */}
      <div className="relative h-[60vh] w-full overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <Image
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694404180/eventos/boda2_jnrajr.jpg"
          alt="Eventos Hotel Danini"
          fill
          priority
          className="
            object-cover 
            /*md:object-contain*/
          "
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 100vw,
            100vw
          "
        />

        {/* Texto encima */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <span className="text-[#d79623] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Celebraciones Únicas
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
            Eventos & Bodas
          </h1>
          <p className="text-white/90 text-lg max-w-2xl font-light leading-relaxed">
            Creamos el escenario perfecto para que tus momentos más importantes se conviertan en recuerdos eternos.
          </p>
        </div>

      </div>

      {/* COMPONENTE CLIENTE */}
      <EventosClient espacios={espaciosData} galeria={galeriaImagenes} />

    </main>
  );
}