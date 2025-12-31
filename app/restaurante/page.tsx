
import { RestauranteClient } from '@/components';
import { CategoriaMenu, EspacioRestaurante } from '@/interfaces/restaurante';


const menuData: CategoriaMenu[] = [
  {
    id: 'desayunos',
    titulo: 'Paquete Desayunos',
    secciones: [
      {
        titulo: 'Paquetes (Incluye Jugo o Fruta y Café del día o Té)',
        items: [
          { nombre: 'Americano', descripcion: '2 rebanadas de pan tostado con mermelada.', precio: '$75.00' },
          { nombre: 'Tradicional', descripcion: 'Chilaquiles con queso y crema.', precio: '$100.00' },
          { nombre: 'Teziuteco', descripcion: 'Huevos al gusto (2 pzas).', precio: '$130.00' },
          { nombre: 'Danini', descripcion: 'Especialidad: Enchiladas Danini en salsa verde (pollo, jamón, frijoles).', precio: '$150.00' },
          { nombre: 'Llenador', descripcion: 'Chilaquiles con pechuga asada (rojos, verdes o guajillo).', precio: '$200.00' },
          { nombre: 'Llenador', descripcion: 'Chilaquiles con cecina (rojos, verdes o guajillo).', precio: '$210.00' },
          { nombre: 'Llenador', descripcion: 'Chilaquiles con arrachera (rojos, verdes o guajillo).', precio: '$250.00', etiqueta: 'Favorito' },
        ]
      },
      {
        titulo: 'Infantil',
        items: [
          { nombre: 'Waffles y chocomilk', descripcion: 'Postre esponjoso con forma de rejillas, decorado con fresa y platano.', precio: '$120.00' },
          { nombre: 'Huevos, hotcakes y chocomilk', descripcion: 'Panqueques redondos y esponjosos.', precio: '$150.00' },
          { nombre: 'Grill cheese, francesas, chocomilk', descripcion: 'Sandwich de queso a la plancha, hecho con dos rabanadas de pan y un relleno de queso.', precio: '$150.00' },
        ]
      },
    ]
  },
  {
    id: 'cereales',
    titulo: 'Cereales',
    secciones: [
      {
        titulo: 'Cereales',
        items: [
          { nombre: 'Copa De Fruta', descripcion: 'Copa de fruta de temporada (200 grs). Acompañala con yogurt, miel o amaranto.', precio: '$55.00' },
          { nombre: 'Cereal', descripcion: 'Elige uno: Zucaritas, Corn Pops, etc.', precio: '$55.00' }
        ]
      },
    ]
  },
  {
    id: 'huevos-omelettes',
    titulo: 'Huevos & Omelettes',
    secciones: [
      {
        titulo: 'Huevos & Omelettes',
        items: [
          { nombre: 'Infladas', descripcion: 'Originarias de Veracruz, con salsa, huevo, crema y queso.', precio: '$110.00' },
          { nombre: 'Omelette Fajita', descripcion: 'Pimientos, cebolla, mozzarella, salsa roja, crema, pollo, papa.', precio: '$95.00' },
          { nombre: 'Omelette Poblano', descripcion: 'Pimientos, cebolla, elote, crema, mozzarella, pollo, papa.', precio: '$95.00' },
          { nombre: 'Omelette Clásico J/Q', descripcion: 'Queso manchego, americano, papa.', precio: '$95.00' },
          { nombre: 'Omelette Champiñón y Queso', descripcion: 'Mozzarella, champiñón, epazote.', precio: '$100.00' },
          { nombre: 'Omelette Light Griego', descripcion: 'Clara, cebolla roja, jitomate, espinaca, queso feta.', precio: '$100.00' },
          { nombre: 'Omelette Light Healthy', descripcion: 'Clara, espinaca, brócoli, zanahoria, calabaza, panela, jitomate.', precio: '$100.00' },
          { nombre: 'Huevos Benedictinos', descripcion: 'Huevo poché, tocineta, chapata, holandesa.', precio: '$110.00' },
          { nombre: 'Huevos Florentinos', descripcion: 'Huevo, espinacas, jitomate, holandesa.', precio: '$95.00' },
          { nombre: 'Huevos Motuleños', descripcion: 'Jamón, chícharo, salsa roja, plátano macho, queso añejo.', precio: '$120.00' },
          { nombre: 'Huevos Rancheros', descripcion: 'Salsa verde o roja, frijoles, queso añejo.', precio: '$95.00' },
          { nombre: 'Montecristo', descripcion: 'Pan blanco, manchego, americano, jamón, leche, mantequilla.', precio: '$120.00' },
          { nombre: 'Huevos al Gusto', descripcion: 'Salchicha, jamón, chorizo, a la mexicana, tocino.', precio: '$100.00' },
          { nombre: 'Salsa con Huevo', descripcion: 'Verde, roja o guajillo.', precio: '$90.00' },
        ]
      },
    ]
  },
  {
    id: 'chilaquiles',
    titulo: 'Chilaquiles',
    secciones: [
      {
        titulo: 'Chilaquiles',
        items: [
          { nombre: 'Sencillos', descripcion: 'Rojos, verdes o guajillo (queso y crema).', precio: '$80.00' },
          { nombre: 'Con Pollo o Huevo', precio: '$120.00' },
          { nombre: 'Con Pechuga Asada (120g)', precio: '$130.00' },
          { nombre: 'Con Cecina (125g)', precio: '$150.00' },
          { nombre: 'Con Arrachera (200g)', precio: '$260.00' },
          { nombre: 'Rellenos de Queso', precio: '$120.00' },
        ]
      },
    ]
  },
  {
    id: 'enchiladas',
    titulo: 'Enchiladas',
    secciones: [
      {
        titulo: 'Enchiladas',
        items: [
          { nombre: 'Danini', descripcion: 'Especialidad de la casa.', precio: '$120.00' },
          { nombre: 'Suizas', precio: '$100.00' },
          { nombre: 'Verdes, Rojas o Mole', descripcion: 'Rellenas de pollo, huevo o queso.', precio: '$90.00' },
          { nombre: 'Enfrijoladas', descripcion: 'Rellenas de pollo, huevo o queso.', precio: '$90.00' },
          { nombre: 'Enchiladas Guerrero', precio: '$100.00' },
        ]
      },
    ]
  },
  {
    id: 'lo-dulce',
    titulo: 'Hot cakes y más',
    secciones: [
      {
        titulo: 'Hot cakes y más',
        items: [
          { nombre: 'Hot Cakes', precio: '$80.00' },
          { nombre: 'Waffles', precio: '$80.00' },
          { nombre: 'Pan Dulce', descripcion: 'Horno de leña.', precio: '$17.00' },
          { nombre: 'Pan Tostado', descripcion: '4 rebanadas.', precio: '$45.00' },
          { nombre: 'Pan Francés', descripcion: 'Rico pan de caja remojado en mezcla de huevo y leche, dorado en mantequilla.', precio: '$90.00' },
        ]
      }
    ]
  },
  {
    id: 'entradas',
    titulo: 'Entradas',
    secciones: [
      {
        titulo: 'Entradas',
        items: [
          { nombre: 'Chalupas de Papa (3 pzas)', descripcion: 'Salsa molcajeteada roja o verde.', precio: '$45.00' },
          { nombre: 'Tlayoyos (3 pzas)', descripcion: 'Rellenos de alberjón.', precio: '$45.00', etiqueta: 'Regional' },
          { nombre: 'Tlayoyos con Chicharrón', precio: '$60.00' },
          { nombre: 'Picadas (3 pzas)', descripcion: 'Bañadas en salsa y queso.', precio: '$45.00' },
          { nombre: 'Tacos Dorados Pollo (4 pzas)', precio: '$50.00' },
          { nombre: 'Tacos Dorados Papa/Chorizo', precio: '$45.00' },
          { nombre: 'Tamales (3 pzas)', descripcion: 'Rojo, Mole y Chilahuates.', precio: '$45.00' },
          { nombre: 'Empanadas de Róbalo (3 pzas)', precio: '$140.00' },
          { nombre: 'Queso Fundido con Chorizo', precio: '$140.00' },
          { nombre: 'Queso Fundido Natural', precio: '$120.00' },
          { nombre: 'Queso Fundido con Champiñón', precio: '$130.00' },
          { nombre: 'Tabla de Carnes Frías', descripcion: 'Para 2 personas.', precio: '$220.00' },
          { nombre: 'Aguacate Relleno de Atún', precio: '$120.00' },
        ]
      },
    ]
  },
  {
    id: 'sopas-cremas',
    titulo: 'Sopas & Cremas',
    secciones: [
      {
        titulo: 'Sopas & Cremas',
        items: [
          { nombre: 'Crema de Cilantro', precio: '$60.00' },
          { nombre: 'Crema de Papa y Poro', precio: '$60.00' },
          { nombre: 'Crema de Zanahoria', precio: '$60.00' },
          { nombre: 'Consomé de Pollo', precio: '$70.00' },
          { nombre: 'Sopa de Lentejas', precio: '$60.00' },
          { nombre: 'Sopa de Tortilla', precio: '$60.00' },
        ]
      },
    ]
  },
  {
    id: 'ensaladas',
    titulo: 'Ensaladas',
    secciones: [
      {
        titulo: 'Ensaladas',
        items: [
          { nombre: 'Ensalada Danini', descripcion: 'Pollo, queso, almendra, manzana.', precio: '$130.00' },
          { nombre: 'Cheff’s Salad', precio: '$130.00' },
          { nombre: 'Ula Ula Salad', descripcion: 'Pollo marinado, piña, durazno, fresa.', precio: '$130.00' },
          { nombre: 'Ensalada César con Pollo', precio: '$130.00' },
          { nombre: 'Ensalada César con Salmón', precio: '$200.00' },
        ]
      },
    ]
  },
  {
    id: 'pastas',
    titulo: 'Pastas',
    secciones: [
      {
        titulo: 'Pastas',
        items: [
          { nombre: 'Fetuccine con Pollo (120 grs)', descripcion: 'Pasta cocinada con crema, ajo y pollo en fajitas.', precio: '$180.00' },
          { nombre: 'Fetuccine Albahaca y Nuez', descripcion: 'Una combinación perfecta de pasta, mantequilla, queso y jugoso pollo.', precio: '$150.00' },
          { nombre: 'Spaguetti con Camarones (150 grs)', descripcion: 'Salteados con aceite de olivo, ajo, vino blanco, crema y queso parmesano.', precio: '$190.00' },
          { nombre: 'Pasta Alioli con Pollo', descripcion: 'Deliciosa pasta que combina sabores mediterráneos con un toque reconfortante.', precio: '$180.00' },
          { nombre: 'Pasta de Mariscos "Sea Food"', descripcion: 'Combinación adecuada de mariscos y pasta, perfecta para una comida elegante.', precio: '$210.00' },
          { nombre: 'Pan de Ajo', descripcion: 'Rico aperitivo ideal, crujiente y con mucho sabor.', precio: '$60.00' },
          { nombre: 'Lasaña a la Boloñesa (200 grs)', descripcion: 'Carne molida, salsa de tomate, bechamel, vino tinto y queso parmesano.', precio: '$180.00' },
          { nombre: 'Lasaña Vegetariana (200 grs)', descripcion: 'Berenjena asada, calabaza, salsa marinara, bechamel y queso mozzarella.', precio: '$150.00' },
        ]
      },
    ]
  },
  {
    id: 'tradicion',
    titulo: 'La Tradición',
    secciones: [
      {
        titulo: 'Cada platillo va acompañado con arroz y frijoles',
        items: [
          { nombre: 'Costilla En Salsa De Chipotle', descripcion: 'Costilla de cerdo bañada en deliciosa salsa de chipotle.', precio: '$140.00' },
          { nombre: 'Encacahuatado Con Pollo', descripcion: 'Exquisita salsa de cacahuate sazonada de pipian, cebolla, ajo, clavo, canela, jitomate, con una pieza de pollo.', precio: '$120.00' },
          { nombre: 'Mole Almendrado Con Pollo', descripcion: 'Mezcla de diferentes tipos de chile y especies de la region, con una pieza de pollo.', precio: '$120.00' },
          { nombre: 'Pipian Verde Con Pollo', descripcion: 'Mezcla de pipian verde, ajonjolin, ajo, cebolla, lechuga, cilantro, tomate, chile, con una pieza de pollo.', precio: '$120.00' },
        ]
      },
    ]
  },
  {
    id: 'carnes-cortes',
    titulo: 'Carnes & Cortes',
    secciones: [
      {
        titulo: 'Carnes & Cortes',
        items: [
          { nombre: 'Suprema de Pollo Rellena de Espinaca (120 grs)', descripcion: 'Filete de pollo relleno, con espinaca y cebolla, queso mozzarella, bañada con salsa de pimientos, acompañada con puré de papa y verduras.', precio: '$130.00' },
          { nombre: 'Arrachera (200 grs)', descripcion: 'Arrachera marinada, acompañada con papas a la francesa y guacamole.', precio: '$290.00' },
          { nombre: 'Cecina (150 grs)', descripcion: 'Pulpa de Cecina, acompañada con papas a la francesa y guacamole.', precio: '$220.00' },
          { nombre: 'Tampiqueña (200 grs)', descripcion: 'Pulpa de Res, acompañada con enchiladas rojas, frijoles y guacamole.', precio: '$270.00' },
          { nombre: 'Milanesa Danini (150 grs)', descripcion: 'Aguayón de Res con empanizado especial de la casa, acompañado con papas a la francesa y guacamole.', precio: '$250.00' },
          { nombre: 'Milanesa Napolitana', descripcion: 'Aguayón, huevo, pan molido, harina, marinara, queso mozzarella, queso parmesano, gratinada a los 3 quesos y acompañada de puré de papa y verduras.', precio: '$280.00' },
          { nombre: 'Pechuga a la Plancha (120 grs)', descripcion: 'Filete de pollo salpimentado, acompañado de puré de papa y verduras.', precio: '$110.00' },
          { nombre: 'Costillas BBQ (200 grs)', descripcion: 'Costilla corte Americano, bañadas en salsa BBQ de la casa, acompañada con papas a la francesa y Ranch.', precio: '$180.00' },
          { nombre: 'New York (350 grs)', descripcion: 'Corte acompañado de 2 guarniciones a elegir.', precio: '$360.00' },
          { nombre: 'Rib Eye (350 grs)', descripcion: 'Corte acompañado de 2 guarniciones a elegir.', precio: '$385.00' },
          { nombre: 'Top Sirloin', descripcion: 'Corte acompañado de 2 guarniciones a elegir.', precio: '$360.00' },
          { nombre: 'Cowboy', descripcion: 'Corte acompañado de 2 guarniciones a elegir.', precio: '$385.00' },
        ]
      },
    ]
  },
  {
    id: 'pescados-mariscos',
    titulo: 'Pezcados & Mariscos',
    secciones: [
      {
        titulo: 'Pescados y Mariscos',
        items: [
          { nombre: 'Lomo de Robalo a la Plancha (200 grs)', descripcion: 'Lonja de Robalo sazonado con especies de la casa.', precio: '$260.00' },
          { nombre: 'Lomo de Robalo al Ajillo (200 grs)', descripcion: 'Lonja de Robalo bañado en salsa de ajo, especialidad de la casa.', precio: '$280.00' },
          { nombre: 'Filete de Robalo en Salsa de Coco', descripcion: '¡La mejor combinación! Filete de Robalo bañado con exquisita salsa de coco.', precio: '$260.00' },
          { nombre: 'Lomo de Salmón a la Plancha (200 grs)', descripcion: 'Salmón sazonado con especies de la casa.', precio: '$290.00' },
          { nombre: 'Lomo de Salmón Mediterráneo', descripcion: 'Pescado fresco y sabroso, preparado con hierbas y especias de la región.', precio: '$310.00' },
          { nombre: 'Filete de Pescado a la Tempura', descripcion: 'Exquisito platillo de pescado con una textura ligera y crujiente, y un sabor delicado.', precio: '$200.00' },
          { nombre: 'Mar y Tierra (Solomillo y Camarón)', descripcion: 'Ingredientes marinados en salsa de la casa con verduras, puré de papa y pimientos.', precio: '$290.00' },
          { nombre: 'Camarones a la Diabla (150 grs)', descripcion: 'Camarones salteados en aceite de olivo, ajo, cebolla, bañados en salsa de chile de árbol.', precio: '$195.00' },
          { nombre: 'Camarones al Mojo (150 grs)', descripcion: 'Camarones salteados en aceite de olivo, ajo, perejil, sal y pimienta, acompañado con arroz y ensalada.', precio: '$185.00' },
          { nombre: 'Camarones Empanizados (150 grs)', descripcion: 'Camarón empanizado en el especial de la casa, acompañado con arroz y ensalada especial.', precio: '$195.00' },
          { nombre: 'Camarones Enchipotlados (150 grs)', descripcion: 'Camarón salteado con ajo y cebolla, bañado en salsa especial, acompañados con ensalada y arroz.', precio: '$195.00' },
          { nombre: 'Camarones en Crema de Coco y Morita', descripcion: 'Deliciosos camarones bañados en crema de coco, con un ligero picante.', precio: '$210.00' },
          { nombre: 'Cazuela de Mariscos (200 grs)', descripcion: 'Mezcla de mariscos, guisado en salsa de tomate y ajo con chile verde, cebolla y epazote, acompañado con limón.', precio: '$290.00' },
        ]
      },
    ]
  },
  {
    id: 'snacks',
    titulo: 'Snacks',
    secciones: [
      {
        titulo: 'Snacks',
        items: [
          { nombre: 'Alitas de Pollo (200 grs)', descripcion: 'En salsa de miel chipotle, duraznos habanero, BBQ, acompañada con Zanahoria y Apio.', precio: '$100.00' },
          { nombre: 'Dedos de Queso de la Casa (160 grs)', descripcion: 'Queso Gouda rebosado en Mezcla Especial, acompañado con Aderezo Ranch.', precio: '$165.00' },
          { nombre: 'Guacamole', descripcion: 'Aguacate machacado con Cebolla, chile serrano, cilantro y acompañado con totopos.', precio: '$70.00' },
          { nombre: 'Nachos Danini', descripcion: 'Totopos bañados con Frijoles, Queso amarillo, Queso Mozarella, Carne Molida, Pico de Gallo, Jalapeños y Guacamole.', precio: '$185.00' },
          { nombre: 'Papas a la Francesa', descripcion: 'Clásicas papas fritas.', precio: '$70.00' },
        ]
      },
    ]
  },
  {
    id: 'sandwiches-hamburguesas',
    titulo: 'Sandwiches & Hamburguesas',
    secciones: [
      {
        titulo: 'Sandwiches & Hamburguesas',
        items: [
          { nombre: 'Club Sandwich', descripcion: 'Sandwich triple de pollo, Jamón, queso de hebra, Americano, tomate, aguacate, Lechuga.', precio: '$100.00' },
          { nombre: 'California Sandwich (120 grs)', descripcion: 'Filete de pollo con queso manchego, pico de gallo, guacamole y lechuga.', precio: '$100.00' },
          { nombre: 'Baguette de Arrachera con Aderezo Blue Cheese (100 grs)', descripcion: 'Arrachera salteada con pimientos, cebolla, queso manchego y Lechuga.', precio: '$160.00' },
          { nombre: 'Baguette de Jamón con Huevo', descripcion: 'Baguette, huevo, jamón, queso de hebra, mayonesa.', precio: '$90.00' },
          { nombre: 'Cheeseburger (100 grs)', descripcion: 'Carne molida de res a la plancha con Queso Americano, Manchego, Hebra y Jamón.', precio: '$120.00' },
          { nombre: 'BBQ Burger (100 grs)', descripcion: 'Carne de Res a la plancha, marinada con BBQ, Queso Americano, Cebollas Empanizadas, Lechuga y Jitomate.', precio: '$120.00' },
          { nombre: 'Sandwich Sencillo con Papas', descripcion: 'Papas a la francesa, pan blanco, jitomate, aguacate, cebolla, mayonesa, lechuga, jamón.', precio: '$75.00' },
          { nombre: 'Torta de Pierna', descripcion: 'Pierna marinada al horno con queso de hebra, aguacate, frijoles y mayonesa.', precio: '$105.00' },
        ]
      }
    ]
  },
  {
    id: 'ninos',
    titulo: 'Niños',
    secciones: [
      {
        titulo: 'Para Los Peques',
        items: [
          { nombre: 'Sincronizadas (2 pzs)', descripcion: 'Tortillas de Harina a la Plancha con queso de Hebra, Americano y Jamón.', precio: '$60.00' },
          { nombre: 'Milanesa de Pollo con Papas (80 grs)', descripcion: 'Filete de pollo con mezcla de Empanizado de la casa, acompañado con papas a la Francesa.', precio: '$90.00' },
          { nombre: 'Nuggets de Pollo con Papas (100 grs)', descripcion: 'Carne de pollo empanizada, moldeado en figuras, acompañado con papas a la Francesa.', precio: '$90.00' },
          { nombre: 'Maccaroni con Queso y Pollo', descripcion: 'Deliciosa pasta bañada en salsa de queso y acompañada con pollo.', precio: '$90.00' },
        ]
      }
    ]
  },
  {
    id: 'bebidas',
    titulo: 'Bebidas & Cafetería',
    secciones: [
      {
        titulo: 'Bebidas (Refrescos y Jugos)',
        items: [
          { nombre: 'Agua de Sabor (vaso)', descripcion: 'Jamaica, Piña, Melón, Horchata.', precio: '$30.00' },
          { nombre: 'Agua de Sabor (Jarra Ch)', descripcion: 'Jamaica, Piña, Melón, Horchata.', precio: '$55.00' },
          { nombre: 'Agua de Sabor (Jarra Gr)', descripcion: 'Jamaica, Piña, Melón, Horchata.', precio: '$105.00' },
          { nombre: 'Jugos Naturales', descripcion: 'Naranja, Zanahoria, Verde (Totalmente naturales).', precio: '$45.00' },
          { nombre: 'Limonada / Naranjada', descripcion: '350 ml.', precio: '$49.00' },
          { nombre: 'Agua Mineral Peñafiel', descripcion: '600 ml.', precio: '$39.00' },
          { nombre: 'Topo Chico', descripcion: '600 ml.', precio: '$39.00' },
          { nombre: 'Agua Natural', descripcion: '600 ml.', precio: '$39.00' },
          { nombre: 'Refrescos', descripcion: 'Coca Cola, Fanta, Sidral, Fresca (355ml).', precio: '$39.00' },
        ]
      },
      {
        titulo: 'Licuados',
        items: [
          { nombre: 'Plátano, Melón, Papaya, Granola', descripcion: '350ml', precio: '$65.00' },
        ]
      },
      {
        titulo: 'Malteadas',
        items: [
          { nombre: 'Fresa, Vainilla y Chocolate', descripcion: '350ml', precio: '$65.00' },
          { nombre: 'Chocomilk', descripcion: '350ml.', precio: '$65.00' },
        ]
      },
      {
        titulo: 'Cafetería & Calientes',
        items: [
          { nombre: 'Café Americano', descripcion: '200ml.', precio: '$35.00' },
          { nombre: 'Café Descafeinado', descripcion: '200ml.', precio: '$35.00' },
          { nombre: 'Café del Día', descripcion: '200ml.', precio: '$30.00' },
          { nombre: 'Cappuccino Tradicional', descripcion: '200ml.', precio: '$45.00' },
          { nombre: 'Cappuccino Sabores', descripcion: 'Baileys, Licor 43, Frangelico, Amaretto (200ml).', precio: '$80.00' },
          { nombre: 'Cappuccino Cajeta', descripcion: '200ml.', precio: '$70.00' },
          { nombre: 'Expreso', descripcion: '50ml.', precio: '$35.00' },
          { nombre: 'Expreso Cortado', descripcion: '50ml.', precio: '$40.00' },
          { nombre: 'Flat White', descripcion: '200ml.', precio: '$60.00' },
          { nombre: 'Late Macchiato', descripcion: '200ml.', precio: '$60.00' },
          { nombre: 'Lechero', descripcion: '200ml.', precio: '$45.00' },
          { nombre: 'Mokaccino', precio: '$65.00' },
          { nombre: 'Atole de Nuez', descripcion: '200ml.', precio: '$65.00' },
          { nombre: 'Champurrado', descripcion: '350ml.', precio: '$55.00' },
          { nombre: 'Chocolate', descripcion: '350ml.', precio: '$55.00' },
          { nombre: 'Malteadas', descripcion: 'Fresa, Vainilla y Chocolate (350ml).', precio: '$65.00' },
          { nombre: 'Chocomilk', descripcion: '350ml.', precio: '$65.00' },
          { nombre: 'Té Danini', descripcion: '200ml.', precio: '$35.00' },
          { nombre: 'Té Clásico', descripcion: 'Manzanilla, Manzana Canela, Menta, Frutos Rojos.', precio: '$30.00' },
        ]
      }
    ]
  },
  {
    id: 'postres',
    titulo: 'Postres',
    secciones: [
      {
        titulo: 'Postres',
        items: [
          { nombre: 'Arroz con Leche', descripcion: '', precio: '$55.00' },
          { nombre: 'Flan Napolitano', descripcion: '', precio: '$55.00' },
          { nombre: 'Helado', descripcion: 'De Vainilla, Fresa, Chocolate o Limón.', precio: '$30.00' },
          { nombre: 'Pastel de Piñón', descripcion: '', precio: '$90.00' },
          { nombre: 'Pay de Nuez', descripcion: '', precio: '$70.00' },
          { nombre: 'Pay de Limón', descripcion: '', precio: '$70.00' },
          { nombre: 'Plátanos Fritos', descripcion: 'Con crema o lechera.', precio: '$55.00' },
          { nombre: 'Chocoflan', descripcion: '', precio: '$70.00' },
          { nombre: 'Duraznos con Crema', descripcion: '', precio: '$55.00' },
          { nombre: 'Pastel de Queso Frambuesa', descripcion: '', precio: '$70.00' },
          { nombre: 'Gelatina de Agua', descripcion: '', precio: '$30.00' },
          { nombre: 'Postre de Temporada', descripcion: '(Preguntar)', precio: '' },
        ]
      },
    ]
  },
  {
    id: 'bar',
    titulo: 'Bar & Cava',
    secciones: [
      {
        titulo: 'Vino Blanco (Copa / Botella)',
        items: [
          { nombre: 'De La Casa Porto Novo', precio: '$90 / $375' },
          { nombre: 'Monte Xanic Chenin Colombard', precio: 'Botella $870' },
          { nombre: 'Monte Xanic Cosecha Tardia', precio: 'Botella $1590' },
          { nombre: 'Seleccion Sauvignon Concha y Toro', precio: 'Botella $445' },
          { nombre: 'Marquez De Caceres Verdejo (355ml)', precio: 'Botella $947' },
        ]
      },
      {
        titulo: 'Vino Rosado (Copa / Botella)',
        items: [
          { nombre: 'Rosado L.A. Cetto', precio: 'Botella $445' },
          { nombre: 'Prosecco Rose', precio: 'Botella $1,050' },
        ]
      },
      {
        titulo: 'Vino Tinto (Copa / Botella)',
        items: [
          { nombre: 'De La Casa Porto Novo', precio: '$90 / $375' },
          { nombre: 'Calixa Blend', precio: 'Botella $1,535' },
          { nombre: 'Casa Madero 3V', precio: 'Botella $1,880' },
          { nombre: 'Rioja Vega Crianza', precio: 'Botella $900' },
          { nombre: 'Gran Sangre De Toro Reserva', precio: 'Botella $965' },
          { nombre: 'Casillero Cabernet Sauvignon Reserva', precio: 'Botella $650' },
        ]
      },
      {
        titulo: 'Vino Espumoso (Copa / Botella)',
        items: [
          { nombre: 'Chandon Rose (Espumoso)', precio: 'Botella $1,615' },
          { nombre: 'Martini Asti', precio: 'Botella $1,285' },
          { nombre: 'Asti Dolce Capetta', precio: 'Botella $495' },
        ]
      },
      {
        titulo: 'Tequila (Copa / Botella)',
        items: [
          { nombre: '100 Años Azul', descripcion: '700ml', precio: '$80 / $605' },
          { nombre: 'Cazadores Reposado', descripcion: '700ml', precio: '$90 / $885' },
          { nombre: 'Jose Cuervo Tradicional', descripcion: '700ml', precio: '$95 / $980' },
          { nombre: 'Herradura Reposado', descripcion: '700ml', precio: '$140 / $1,725' },
          { nombre: 'Tequila 1800 Añejo', descripcion: '700ml', precio: '$145 / $1,940' },
          { nombre: 'Don Julio Reposado', descripcion: '700ml', precio: '$165 / $2,025' },
          { nombre: 'Don Julio 70', descripcion: '700ml', precio: '$210 / $2,825' },
        ]
      },
      {
        titulo: 'Mezcal (Copa / Botella)',
        items: [
          { nombre: '400 Conejos', descripcion: '750ml', precio: '$120 / $1,340' },
          { nombre: 'Candinga Espadin', descripcion: '750ml', precio: '$125 / $1,385' },
          { nombre: 'Candinga Papalometl', descripcion: '750ml', precio: '$140 / $1,670' },
        ]
      },
      {
        titulo: 'Ron (Copa / Botella)',
        items: [
          { nombre: 'Capitán Morgan', descripcion: '750ml', precio: '$70 / $500' },
          { nombre: 'Bacardi Blanco', descripcion: '750ml', precio: '$75 / $665' },
          { nombre: 'Bacardi Sabores', descripcion: '750ml', precio: '$80 / $700' },
          { nombre: 'Matusalen Clásico', descripcion: '750ml', precio: '$85 / $910' },
          { nombre: 'Zacapa Ambar 12', descripcion: '750ml', precio: '$160 / $1,935' },
          { nombre: 'Zacapa 23', descripcion: '750ml', precio: '$230 / $3,190' },
        ]
      },
      {
        titulo: 'Ginebra (Copa / Botella)',
        items: [
          { nombre: 'Bombay Sapphire', descripcion: '750ml', precio: '$125 / $1,405' },
          { nombre: 'Tanqueray', descripcion: '750ml', precio: '$125 / $1,405' },
        ]
      },
      {
        titulo: 'Whisky (Copa / Botella)',
        items: [
          { nombre: 'Passport', descripcion: '700ml', precio: '$80 / $670' },
          { nombre: 'JW Etiqueta Roja', descripcion: '750ml', precio: '$90 / $945' },
          { nombre: 'Jack Daniels', descripcion: '700ml', precio: '$115 / $1,240' },
          { nombre: 'Chivas Regal 12', descripcion: '750ml', precio: '$160 / $2,035' },
          { nombre: 'Buchanas 12', descripcion: '750ml', precio: '$175 / $2,210' },
          { nombre: 'JW Etiqueta Negra', descripcion: '750ml', precio: '$190 / $2,485' },
        ]
      },
      {
        titulo: 'Vodka (Copa / Botella)',
        items: [
          { nombre: 'Wyborowa', descripcion: '1 litro', precio: '$70 / $525' },
          { nombre: 'Smirnoff', descripcion: '750ml', precio: '$75 / $560' },
          { nombre: 'Smirnoff Tamarindo', descripcion: '750ml', precio: '$75 / $640' },
          { nombre: 'Absolut Azul', descripcion: '750ml', precio: '$80 / $725' },
          { nombre: 'Stolichnaya', descripcion: '750ml', precio: '$90 / $850' },
        ]
      },
      {
        titulo: 'Brandy (Copa / Botella)',
        items: [
          { nombre: 'Don Pedro', descripcion: '700ml', precio: '$50.00 / $465.00' },
          { nombre: 'Fundador', descripcion: '700ml', precio: '$90.00 / $780.00' },
          { nombre: 'Magno', descripcion: '700ml', precio: '$95.00 / $847.00' },
          { nombre: 'Terry', descripcion: '700ml', precio: '$95.00 / $870.00' },
          { nombre: 'Torres 10', descripcion: '700ml', precio: '$100.00 / $945.00' },
          { nombre: 'Torres 15', descripcion: '700ml', precio: '$140.00 / $1,550.00' },
        ]
      },
      {
        titulo: 'Cognac (Copa / Botella)',
        items: [
          { nombre: 'Martel V.S.O.P.', precio: '$205.00 / $2,580.00' },
          { nombre: 'Hennessy V.S.O.P.', precio: '$210.00 / $2,740.00' },
        ]
      },
      {
        titulo: 'Digestivos (Copa)',
        items: [
          { nombre: 'Yolixpa', precio: '$55.00' },
          { nombre: 'Khalua', precio: '$60.00' },
          { nombre: 'Anís Chinchón Campechano', precio: '$65.00' },
          { nombre: 'Anís Chinchón Seco', precio: '$65.00' },
          { nombre: 'Anís Mico Dulce', precio: '$65.00' },
          { nombre: 'Controy', precio: '$65.00' },
          { nombre: 'Jagermaster', precio: '$65.00' },
          { nombre: 'Anís Cadenas', precio: '$75.00' },
          { nombre: 'Baileys', precio: '$75.00' },
          { nombre: 'Sambuca Negro', precio: '$75.00' },
          { nombre: 'Frangelico', precio: '$75.00' },
          { nombre: 'Amaretto Disaronno', precio: '$80.00' },
          { nombre: 'Licor 43', precio: '$100.00' },
        ]
      },
      {
        titulo: 'Cerveza (Sola / Chelada o Michelada / Clamato)',
        items: [
          { nombre: 'Corona, Victoria, XX Lager', descripcion: '355ml', precio: '$45.00 / $55.00 / $75.00' },
          { nombre: 'Heineken, Modelo Especial, Negra Modelo', descripcion: '355ml', precio: '$55.00 / $70.00 / $95.00' },
          { nombre: 'Stella Artois, Ultra, Heineken 00', descripcion: '355ml', precio: '$55.00 / $70.00 / $95.00' },
        ]
      },
      {
        titulo: 'Coctelería (Copa)',
        items: [
          { nombre: 'Conga Tropical', precio: '$65.00' },
          { nombre: 'Cantarito', precio: '$75.00' },
          { nombre: 'Daikiri Tequila', precio: '$75.00' },
          { nombre: 'Margarita', precio: '$75.00' },
          { nombre: 'Medias de Seda', precio: '$75.00' },
          { nombre: 'Paloma', precio: '$75.00' },
          { nombre: 'Ruso Blanco', precio: '$75.00' },
          { nombre: 'Ruso Negro', precio: '$75.00' },
          { nombre: 'Sangría Preparada', precio: '$75.00' },
          { nombre: 'Vampiro', precio: '$75.00' },
          { nombre: 'Mojito', precio: '$85.00' },
          { nombre: 'Nube de Oro', precio: '$85.00' },
          { nombre: 'Perla Negra', precio: '$85.00' },
          { nombre: 'Piña Colada', precio: '$85.00' },
          { nombre: 'Alma de Danini', precio: '$90.00' },
          { nombre: 'Bombón', precio: '$90.00' },
          { nombre: 'Carajillo', precio: '$90.00' },
          { nombre: 'Clericot (Copa / Jarra)', precio: '$95.00 / $305.00' },
        ]
      },
    ]
  },
];

// Espacios simplificados (Interior y Terraza)
const espacios: EspacioRestaurante[] = [
  {
    nombre: "Salón Colonial",
    descripcion: "Un espacio interior cálido rodeado de historia. Sus muros cuentan la tradición de la familia Danini, ideal para disfrutar de nuestra gastronomía en un ambiente acogedor y elegante, protegido del clima de la sierra.",
    capacidad: "60 Personas",
    tipo: "Interior",
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1737708476/restaurante/restauranteInicio_nyimgd.jpg"
  },
  {
    nombre: "Terraza Panorámica",
    descripcion: "Nuestra joya al aire libre. Disfruta de tus alimentos rodeado de naturaleza y con una vista privilegiada. El lugar perfecto para un desayuno soleado o una cena romántica bajo las estrellas.",
    capacidad: "30 Personas",
    tipo: "Exterior",
    imagen: "https://res.cloudinary.com/dawwp31sm/image/upload/v1694404206/eventos/pedidaDeMano_vjvrvx.jpg"
  }
];

// Galería visual
const galeriaPlatillos = [
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444969/platillosRestaurante/waffle_dky4lv.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444959/platillosRestaurante/vino_w9yu45.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444949/platillosRestaurante/spaghetti_yrkpll.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444909/platillosRestaurante/omelette_stacpj.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444834/platillosRestaurante/chilposo_k0vj7q.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444824/platillosRestaurante/chilaquiles2_tjnrl0.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444785/platillosRestaurante/buffet_gxz5zd.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444795/platillosRestaurante/buffet2_ckmdso.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444814/platillosRestaurante/chilaquiles_qo53o9.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444939/platillosRestaurante/pozole3_avxfld.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444929/platillosRestaurante/pozole2_bm3rrp.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444918/platillosRestaurante/pozole_p0h6bw.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444899/platillosRestaurante/huevo_hmn1is.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444845/platillosRestaurante/cocktail_s5agbt.jpg",
  "https://res.cloudinary.com/dawwp31sm/image/upload/v1694444804/platillosRestaurante/cecina_tffd5p.jpg",
];

export default function RestaurantePage() {
  return (
    <main className="bg-[#fcfaf7]">

      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://res.cloudinary.com/dawwp31sm/image/upload/v1737708476/restaurante/restauranteInicio_nyimgd.jpg"
          alt="Restaurante Danini"
          className="w-full h-full object-cover animate-pan-slow"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <div className="mb-6 animate-fadeInUp">
            <span className="text-[#d79623] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Hotel & Restaurant
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl animate-fadeInUp delay-100">
            Sabor con Historia
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light font-serif italic animate-fadeInUp delay-200">
            "Donde la tradición de la Sierra Poblana se encuentra con la herencia italiana."
          </p>
        </div>
      </div>

      {/* HISTORIA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-[#003629] mb-6">El Legado Danini</h2>
        <div className="w-16 h-1 bg-[#d79623] mx-auto mb-8 rounded-full"></div>
        <p className="text-stone-600 leading-loose text-lg font-light">
          Hotel Danini nace como reconocimiento al legado de una familia italiana de la región de Piamonte (1876).
          El abuelo Alberto Peredo Danini se establece en Teziutlán, y en su memoria nace este espacio que preserva
          nuestras tradiciones tanto en arquitectura como en gastronomía.
          <br /><br />
          <span className="font-serif italic text-[#003629]">
            "Lugar donde la naturaleza te consiente"
          </span>
        </p>
      </section>

      {/* COMPONENTE CLIENTE */}
      <RestauranteClient
        menu={menuData}
        espacios={espacios}
        galeria={galeriaPlatillos}
      />

    </main>
  );
}