import { FormContacto, MapaInteractivo } from "@/components";

export const metadata = {
    title: 'Contacto - Hotel Danini Teziutlán',
    description: 'Encuentra la información de contacto de Hotel Danini Teziutlán para resolver tus dudas y consultas.',
};

export default function ContactosPage() {
    return (
        <main className="bg-stone-50 min-h-screen py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. SECCIÓN SUPERIOR: Info + Mapa */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-start">

                    {/* COLUMNA IZQUIERDA: Información */}
                    <div className="lg:col-span-5 order-1">
                        <FormContacto />
                    </div>

                    {/* COLUMNA DERECHA: Mapa "Editorial" */}
                    <MapaInteractivo />
                </div>
            </div>
        </main>
    );
}