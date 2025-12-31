import { InicioCarrusel } from "@/components";
import Image from "next/image";

export default function Home() {
  const img = [
    // La imagen comentada en el original se mantiene comentada
    // "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405860/inicio/240534740_125159046511759_3589096235612817581_n_c9arxp.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404470/exteriores/exteriorHabitaciones2_ilcjxn.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404461/exteriores/exterior_cmtrep.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694405110/inicio/inicio_oox5il.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404464/exteriores/exteriores_wpmnmx.jpg",

    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404188/eventos/boda5_h8thuo.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404476/exteriores/vista_kc5qo2.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404473/exteriores/exteriorJuego_cno2ya.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404457/exteriores/entrada_hbw2vh.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404467/exteriores/exteriorHabitaciones_evenni.jpg",
  ];
  return (
    <>
      <InicioCarrusel />
      <div className="bg-stone-50 text-stone-800 w-full min-h-screen font-sans selection:bg-stone-200">

        {/* SECCIÓN 1: BIENVENIDA Y LOBBY (Layout Asimétrico) */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Columna de Texto (Bienvenida) - Ocupa 5 columnas */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
                  Teziutlán, Puebla
                </span>
                <h1 className="text-4xl lg:text-5xl font-serif font-medium leading-tight text-stone-900">
                  Bienvenido a <br />
                  <span className="italic text-stone-600">Hotel Danini</span>
                </h1>
              </div>

              <div className="w-16 h-0.5 bg-stone-300 my-4"></div>

              <p className="text-lg font-medium text-stone-700">
                Un lugar donde la naturaleza te consiente.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm lg:text-base">
                Con una ubicación privilegiada, somos un exclusivo refugio de 21 habitaciones y suites.
                En el corazón del Pueblo Mágico de Teziutlán, caminar por nuestras calles es descubrir
                la magia de tradiciones históricas, culturales y gastronómicas.
              </p>
            </div>

            {/* Columna Visual (Lobby) - Ocupa 7 columnas */}
            <div className="lg:col-span-7 relative group">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405120/inicio/lobby_mvdquj.jpg"
                  alt="Lobby Hotel Danini"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={true}
                />
                {/* Overlay sutil para texto sobre imagen */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-2xl font-serif mb-2">Nuestro Lobby</h2>
                  <p className="text-sm text-stone-200 font-light">
                    Diseñado pensando en tu confort desde el primer momento de tu llegada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: VIDEO (Experiencia Inmersiva) */}
        <section className="w-full bg-stone-900 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-serif mb-8 tracking-wide">La Experiencia Danini</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-stone-700">
              <video
                controls
                className="w-full h-full object-cover"
                poster="https://res.cloudinary.com/dawwp31sm/image/upload/v1694405120/inicio/lobby_mvdquj.jpg" // RECOMENDACIÓN: Pon aquí una imagen miniatura
              >
                <source
                  src="https://res.cloudinary.com/dawwp31sm/video/upload/v1694406874/video/hotelDanini.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: EXTERIORES (Galería tipo Grid Limpio) */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase block mb-2">
              Entorno
            </span>
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Exteriores y Naturaleza</h2>
            <p className="text-stone-600 leading-relaxed">
              Las vibrantes experiencias de nuestros bosques y la riqueza natural transformarán
              por completo tu estancia con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {img.map((image, index) => (
              <div key={index} className="group relative h-80 overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={image}
                  alt={`Exterior Hotel Danini ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized={true}
                />
                {/* Efecto Hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
