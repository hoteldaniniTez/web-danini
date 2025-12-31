// --- INTERFACE: Definición de Tipos para el Formulario ---
export interface ContactFormInputs {
    name: string;
    email: string;
    phone: string;
    subject: 'reservation' | 'events' | 'general' | '';
    message: string;
}