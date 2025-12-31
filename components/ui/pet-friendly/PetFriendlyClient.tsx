'use client';
import { PawPrint, DollarSign, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export const PetFriendlyClient: React.FC = () => {
    const accentColor = '#d79623';
    const darkGreen = '#003629';

    return (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 relative">

            {/* Título de sección */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-50 rounded-full">
                    <PawPrint size={24} className="text-amber-600" />
                </div>
                <h2 className="text-3xl font-serif text-[#003629]">
                    Política de Estancia
                </h2>
            </div>

            {/* SECCIÓN 1: REQUISITOS (Checkmarks verdes = positivo) */}
            <div className="mb-8">
                <h3 className="text-sm font-bold tracking-wider text-stone-400 uppercase mb-4">
                    Requisitos
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-700 mt-1 shrink-0" />
                        <span className="text-stone-600 text-lg">
                            Solo perros de <strong>raza pequeña</strong> (máx. 10 kg).
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-700 mt-1 shrink-0" />
                        <span className="text-stone-600 text-lg">
                            Máximo <strong>un ejemplar</strong> por habitación.
                        </span>
                    </li>
                </ul>
            </div>

            {/* SECCIÓN 2: RESTRICCIONES (Diseño de alerta suave, no agresivo) */}
            <div className="mb-8 bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-orange-800 uppercase mb-4">
                    <AlertCircle size={16} />
                    Restricciones Importantes
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-stone-700 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0"></span>
                        <span>No está permitido el acceso a <strong>Restaurantes o Salones</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3 text-stone-700 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0"></span>
                        <span>La mascota <strong>no debe quedarse sola</strong> en la habitación.</span>
                    </li>
                    <li className="flex items-start gap-3 text-stone-700 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0"></span>
                        <span>Uso obligatorio de <strong>correa</strong> en áreas comunes.</span>
                    </li>
                </ul>
            </div>

            {/* SECCIÓN 3: COSTO (Destacado elegante) */}
            <div className="flex items-center justify-between bg-[#003629] p-6 rounded-xl text-white">
                <div>
                    <div className="flex items-center gap-2 mb-1 text-white/80 text-sm font-medium uppercase tracking-wide">
                        <DollarSign size={16} />
                        Costo Adicional
                    </div>
                    <p className="text-3xl font-serif">
                        $300 <span className="text-lg font-sans font-light">MXN</span>
                    </p>
                    <p className="text-xs text-white/60 mt-1">Por mascota / estancia</p>
                </div>

                {/* Nota pequeña a la derecha */}
                <div className="hidden sm:block text-right max-w-[150px]">
                    <p className="text-xs text-white/50 leading-tight">
                        *Tarifa sujeta a cambios. Firma de reglamento requerida al check-in.
                    </p>
                </div>
            </div>

            {/* Botón de descarga de reglamento (Opcional pero recomendado para UX) */}
            {/* <div className="mt-6 text-center">
                <button className="text-sm text-stone-500 hover:text-amber-600 underline underline-offset-4 transition-colors">
                    Descargar Reglamento Completo (PDF)
                </button>
            </div> */}

        </div>
    );
}