export interface PlatilloDestacado {
    nombre: string;
    descripcion: string;
    precio?: string;
    imagen: string;
    categoria: 'Desayuno' | 'Comida' | 'Cena' | 'Bebida';
}

export interface AreaRestaurante {
    nombre: string;
    descripcion: string;
    capacidad: string;
    ambiente: string; // "Interior", "Terraza", "Privado"
    imagen: string;
}

export interface MenuSection {
    categoria: string; // "Desayunos", "Comidas", "Vinos"
    items: {
        nombre: string;
        descripcion: string;
        precio: string;
        etiqueta?: string; // "Nuevo", "Vegetariano", "Picante"
    }[];
}

export interface EspacioPrivado {
    nombre: string;
    descripcion: string;
    capacidad: number;
    montajes: string[]; // "Herradura", "Banquete", "Cocktail"
    imagen: string;
    features: string[]; // "Audio propio", "Privacidad total", "Vista"
}

export interface Platillo {
  nombre: string;
  descripcion?: string; // Opcional porque algunos en el menú no tienen
  precio: string;
  etiqueta?: string; // "Nuevo", "Favorito", "Vegetariano"
}

export interface CategoriaMenu {
  id: string; // Para los tabs (ej: 'desayunos', 'comidas')
  titulo: string;
  secciones: { // Subsecciones dentro de una categoría (ej: "Paquetes", "Lo Dulce")
    titulo?: string;
    items: Platillo[];
  }[];
}

export interface EspacioRestaurante {
  nombre: string;
  descripcion: string;
  capacidad: string;
  tipo: 'Interior' | 'Exterior';
  imagen: string;
}