export interface EspacioEvento {
  nombre: string;
  descripcion: string;
  capacidad: string;
  medidas: string;
  idealPara: string[];
  imagen: string;
}

export interface TipoEvento {
  titulo: string;
  icon: React.ReactNode;
}