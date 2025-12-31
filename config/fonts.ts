// config/fonts.ts

import { Roboto, Open_Sans } from 'next/font/google';

// ** Tipografía Principal (para el cuerpo de texto, párrafos) **
// Asumiendo que quieres una fuente limpia y moderna, similar a la que se ve.
export const primaryFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Incluimos los pesos más comunes
  variable: '--font-open-sans', // Nombra la variable CSS para usarla después
});

// ** Tipografía Secundaria (para títulos y elementos destacados, si es necesario) **
// En la imagen de Fiesta Inn, el texto destacado usa una fuente Sans-serif limpia.
export const secondaryFont = Roboto({
  subsets: ['latin'],
  weight: ['700'], // Usamos un peso fuerte para el encabezado
  variable: '--font-roboto', // Nombra la variable CSS para usarla después
});