export interface Paquete {
  titulo: string;
  subtitulo?: string; // Nuevo: Para dar contexto emocional
  descripcion: string;
  lista: string[];
  precio: string;
  advertencia: string;
  imagen?: string; // Nuevo: Idealmente cada paquete debería tener su foto
}