import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export const PoliticaPrivacidad: React.FC = () => (
    <div className="text-stone-600 text-sm space-y-8 leading-relaxed font-light">

        {/* Encabezado Responsable */}
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-emerald-950 mb-4">
                <ShieldCheck size={20} className="text-amber-600" />
                Responsable de sus Datos
            </h3>
            <p className="mb-4">
                <strong className="font-bold text-emerald-900">HOTEL DANINI</strong>, comprometido con su confianza, es el responsable del uso y protección de sus datos personales.
            </p>
            <div className="text-xs text-stone-500 space-y-1">
                <p>📍 Circuito Juan Pablo II #10, Centro, Teziutlán, Puebla, C.P. 73800</p>
                <p>🌐 info@hoteldanini.com</p>
            </div>
        </div>

        {/* Finalidades */}
        <div className="space-y-4">
            <h4 className="text-base font-bold text-emerald-950 border-b border-stone-200 pb-2">
                ¿Para qué utilizamos sus datos?
            </h4>
            <p>Utilizamos su información para brindar el servicio solicitado y, de manera secundaria, para mejorar su atención:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {['Reservaciones y Check-in', 'Seguridad del Huésped', 'Base de datos de clientes', 'Verificación de identidad', 'Promociones exclusivas', 'Contactos de emergencia'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-stone-600 bg-white p-2 rounded shadow-sm border border-stone-50">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Datos Sensibles */}
        <div className="bg-red-50/50 p-4 rounded-lg border border-red-100">
            <h4 className="flex items-center gap-2 text-sm font-bold text-red-900 mb-2">
                <Lock size={16} /> Datos Sensibles
            </h4>
            <p className="mb-2">Podríamos requerir datos de especial protección:</p>
            <ul className="list-disc list-inside text-xs text-stone-600 ml-2 marker:text-red-400">
                <li>Datos de salud (ej. alergias, movilidad).</li>
                <li>Origen étnico o racial.</li>
                <li>Creencias religiosas o morales.</li>
            </ul>
        </div>

        {/* Derechos ARCO */}
        <div className="space-y-4">
            <h4 className="text-base font-bold text-emerald-950 border-b border-stone-200 pb-2">
                Sus Derechos ARCO
            </h4>
            <p>
                Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al uso de sus datos personales.
            </p>

            {/* Tarjeta de Contacto ARCO */}
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <p className="text-emerald-900 font-bold mb-3 text-center">Departamento de Datos Personales</p>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full text-emerald-700"><Eye size={16} /></div>
                        <span><strong>Titular:</strong> Angelica Hernández García</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full text-emerald-700"><Mail size={16} /></div>
                        <a href="mailto:info@hoteldanini.com" className="hover:text-amber-600 transition-colors">info@hoteldanini.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full text-emerald-700"><Phone size={16} /></div>
                        <span>231 102 3773</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Cambios y Revocación */}
        <div className="text-xs text-stone-400 border-t border-stone-100 pt-4 space-y-2">
            <p>
                <strong>Revocación y Cambios:</strong> Puede revocar su consentimiento o conocer cambios en este aviso escribiendo a nuestro correo oficial. Nos comprometemos a notificar cambios mediante anuncios visibles.
            </p>
            <p className="flex items-start gap-2 bg-stone-100 p-3 rounded text-stone-500">
                <FileText size={16} className="shrink-0 mt-0.5" />
                <span>
                    <strong>Decreto Antitabaco:</strong> Prohibido fumar en todo el hotel. Multa de hasta 1,000 UMA por incumplimiento.
                </span>
            </p>
            <p className="italic text-right pt-2">Última actualización: 26/12/2022</p>
        </div>
    </div>
);