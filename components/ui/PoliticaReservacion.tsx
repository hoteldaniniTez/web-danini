import React from 'react';
import { Clock, CalendarX, AlertTriangle, Dog, Ban, DollarSign, Info } from 'lucide-react';

export const PoliticaReservacion: React.FC = () => (
    <div className="text-stone-600 text-sm space-y-8 leading-relaxed font-light">

        {/* 1. Tarjeta de Horarios (Lo más importante) */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl text-center border border-emerald-100">
                <div className="flex justify-center mb-2 text-emerald-700"><Clock size={24} /></div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-900">Check In</p>
                <p className="text-2xl font-serif font-bold text-emerald-950">15:00 hrs</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl text-center border border-emerald-100">
                <div className="flex justify-center mb-2 text-emerald-700"><Clock size={24} /></div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-900">Check Out</p>
                <p className="text-2xl font-serif font-bold text-emerald-950">12:00 hrs</p>
            </div>
        </div>

        {/* 2. Impuestos y Pagos */}
        <div className="space-y-3">
            <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                <DollarSign size={18} className="text-amber-600" />
                Garantías e Impuestos
            </h4>
            <div className="bg-stone-50 p-4 rounded-lg space-y-2 text-xs md:text-sm">
                <p>• Las tarifas son más impuestos: <strong>16% IVA + 3% ISH</strong>.</p>
                <p>• Toda reserva requiere el pago de <strong>1 noche</strong> como garantía.</p>
                {/* <p>• Voucher de garantía al llegar: <strong>$2,000.00 MXN</strong> (para imprevistos).</p> */}
            </div>
        </div>

        {/* 3. Cancelaciones (Diseño de Alerta) */}
        <div className="space-y-4">
            <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                <CalendarX size={18} className="text-amber-600" />
                Políticas de Cancelación
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Estándar */}
                <div className="border border-stone-200 rounded-lg p-4">
                    <p className="font-bold text-emerald-900 mb-2">Temporada Regular</p>
                    <p className="text-xs">
                        Cancelaciones <strong>1 día antes</strong> sin costo. <br />
                        Fuera de tiempo o No Show: Cobro de 1 noche + impuestos.
                    </p>
                </div>
                {/* Alta */}
                <div className="border border-stone-200 rounded-lg p-4">
                    <p className="font-bold text-amber-700 mb-2">Temporada Alta</p>
                    <p className="text-xs text-stone-500 mb-1">(22 Dic - 02 Ene)</p>
                    <p className="text-xs">
                        Cancelaciones <strong>10 días antes</strong> sin costo. <br />
                        Fuera de tiempo: Cobro del 100% del depósito.
                    </p>
                </div>
            </div>

            <div className="bg-red-50 p-3 rounded-lg border border-red-100 flex gap-3 items-start">
                <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-800">
                    <strong>Tarifas No Reembolsables:</strong> Penalidad del 100% de la estancia bajo cualquier circunstancia. No hay devoluciones por salidas anticipadas.
                </p>
            </div>
        </div>

        {/* 4. Reglas de Convivencia (Acordeón visual o lista limpia) */}
        <div className="space-y-3 pt-4 border-t border-stone-100">
            <h4 className="text-base font-bold text-emerald-950">Normas de Estancia</h4>
            <ul className="space-y-3">
                <li className="flex gap-3 bg-white p-3 rounded shadow-sm border border-stone-50">
                    <Dog size={20} className="text-amber-600 shrink-0" />
                    <div>
                        <p className="font-bold text-stone-800 text-xs uppercase">Mascotas</p>
                        <p className="text-xs">Máx 1 por habitación. Costo extra: <strong>$300 MXN</strong>. No pueden quedarse solas.</p>
                    </div>
                </li>
                <li className="flex gap-3 bg-white p-3 rounded shadow-sm border border-stone-50">
                    <Ban size={20} className="text-red-500 shrink-0" />
                    <div>
                        <p className="font-bold text-stone-800 text-xs uppercase">Espacio 100% Libre de Humo</p>
                        <p className="text-xs">Multa de hasta <strong>1,000 UMA</strong> por fumar en áreas no designadas.</p>
                    </div>
                </li>
                <li className="flex gap-3 bg-white p-3 rounded shadow-sm border border-stone-50">
                    <Info size={20} className="text-blue-500 shrink-0" />
                    <div>
                        <p className="font-bold text-stone-800 text-xs uppercase">Seguridad y Visitas</p>
                        <p className="text-xs">No revelamos la presencia de huéspedes. Es responsabilidad del huésped informar a sus visitas su número de habitación.</p>
                    </div>
                </li>
            </ul>
        </div>

        {/* Footer Legal */}
        <div className="text-xs text-stone-400 italic text-center pt-4">
            <p>Al realizar el Check-in, el huésped acepta cumplir el reglamento interno y las disposiciones legales vigentes, incluyendo el rechazo a la explotación de personas.</p>
        </div>
    </div>
);