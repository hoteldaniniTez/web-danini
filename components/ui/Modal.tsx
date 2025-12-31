// components/Modal.tsx
import React, { ReactNode } from 'react';

/**
 * Interfaz para las propiedades del componente Modal.
 */
interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

/**
 * Componente Modal reutilizable con estilos de Tailwind CSS y tipado TSX.
 */
export const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
    if (!show) {
        return null;
    }

    // Clases de Tailwind para el color de la cabecera (verde oscuro similar a #006a51)
    const headerBgColor = 'bg-green-700';
    const buttonBgColor = 'bg-green-700 hover:bg-green-800';

    return (
        // Overlay oscuro y fijo
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="relative w-full max-w-3xl mx-auto p-4 transition-transform duration-300 transform scale-100">

                {/* Contenedor del contenido del Modal */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">

                    {/* Cabecera del Modal */}
                    <div className={`${headerBgColor} text-white p-5 flex justify-between items-center`}>
                        <h2 id="modal-title" className="text-2xl font-semibold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 transition-colors duration-300 p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Cerrar modal"
                        >
                            {/* Icono de cerrar (X) */}
                            <i className="fas fa-times text-lg"></i>
                        </button>
                    </div>

                    {/* Cuerpo del Modal con scroll */}
                    <div className="p-6 max-h-[70vh] overflow-y-auto">
                        {/* El contenido de las políticas va aquí */}
                        {children}
                    </div>

                    {/* Pie de página del Modal */}
                    <div className="p-4 border-t border-gray-200 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className={`${buttonBgColor} text-white font-medium py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300`}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};