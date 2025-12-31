export interface HabitacionProps {
    /** Nombre de la habitación, ej: "Doble Matrimonial" */
    nombre: string;
    /** Eslogan o frase corta de marketing, ej: "Confort, estilo y la mejor vista." */
    slogan: string;
    /** Descripción detallada y mejorada para marketing. */
    informacion: string;
    /** Array de URLs de imágenes optimizadas de la habitación. */
    imgs: string[];
    /** Cupo máximo de adultos. */
    cupo: number;
}

interface TablaItem {
    descripcion: string;
    icono: React.ReactNode; 
}
export interface TablaProps {
    /** Array de servicios o elementos clave de la habitación. */
    elementos: TablaItem[];
}

export interface RoomData {
    id: string;
    nombre: string;
    huespedes: number;
    camas: string;
    metros: number;
    descripcionCorta: string;
    precioDesde: string; // Simulado para SC
    imagenUrl: string;
    enlaceDetalle: string;
    enlaceReserva: string;
}

export const ROOMS_DATA: RoomData[] = [
    {
        id: "queen-size",
        nombre: "Queen Size",
        huespedes: 2,
        camas: "1 Cama Queen Size",
        metros: 22,
        descripcionCorta: "Elegancia y descanso en una cama Queen Size, equipada con amenidades de lujo y una vista panorámica que te robará el aliento.",
        precioDesde: "1,330.00",
        imagenUrl: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402652/habitaciones/queenSize/queen_ay0ymz.jpg",
        enlaceDetalle: "/habitaciones/queen-size",
        enlaceReserva: "https://booking.easy-rez.com/hotel-danini/es/availability",
    },
    {
        id: "king-size",
        nombre: "King Size",
        huespedes: 2,
        camas: "1 Cama King Size",
        metros: 22,
        descripcionCorta: "Espaciosa cama King Size en un entorno de diseño artesanal. Disfruta de amenidades premium y una vista panorámica inigualable.",
        precioDesde: "1,725.00",
        imagenUrl: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402575/habitaciones/kingSize/king_yynfvt.jpg",
        enlaceDetalle: "/habitaciones/king-size",
        enlaceReserva: "https://booking.easy-rez.com/hotel-danini/es/availability",
    },
    {
        id: "doble-matrimonial",
        nombre: "Doble Matrimonial",
        huespedes: 4,
        camas: "2 camas doble matrimoniales",
        metros: 22,
        descripcionCorta: "Dos camas matrimoniales en un ambiente de diseño. Equipada con todas las amenidades para garantizar el confort de hasta 4 personas.",
        precioDesde: "1,975.00",
        imagenUrl: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402545/habitaciones/dobleMatrimonial/doble2_jcfxbb.jpg",
        enlaceDetalle: "/habitaciones/doble-matrimonial",
        enlaceReserva: "https://booking.easy-rez.com/hotel-danini/es/availability",
    },
    {
        id: "suite-deluxe",
        nombre: "Suite Deluxe",
        huespedes: 4,
        camas: "2 camas queen size",
        metros: 32,
        descripcionCorta: "Acogedora suite con dos camas Queen Size y terraza privada. El espacio ideal para descansar y disfrutar del aire libre en compañía.",
        precioDesde: "3,165.00",
        imagenUrl: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402690/habitaciones/suiteDeluxe/suite_hd8yhc.jpg",
        enlaceDetalle: "/habitaciones/suite-deluxe",
        enlaceReserva: "https://booking.easy-rez.com/hotel-danini/es/availability",
    },
    {
        id: "master-suite",
        nombre: "Master Suite",
        huespedes: 4,
        camas: "2 camas, 1 queen size y 1 king size",
        metros: 66,
        descripcionCorta: "La opción más exclusiva. Dos recámaras independientes (1 King + 1 Queen), sala, comedor y barra equipada. Privacidad y lujo total.",
        precioDesde: "3,986.00",
        imagenUrl: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
        enlaceDetalle: "/habitaciones/master-suite",
        enlaceReserva: "https://booking.easy-rez.com/hotel-danini/es/availability",
    },
];