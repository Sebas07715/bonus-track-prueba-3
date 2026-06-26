Análisis de Elementos del Framework

1.Componente 

¿Dónde lo usas en este problema? 
R1: En "MascotaCard, ListaMascotas y FiltroEspecie". 
¿Por qué es el adecuado?
R2: Permite la reutilización de código, facilita el mantenimiento y evita tener un archivo masivo e ilegible en la recepción del refugio. 

2.JSX 
Para escribir la estructura HTML de las tarjetas de las mascotas y los filtros directamente dentro de la lógica de JavaScript,
Facilita la creación de la estructura visual mezclando HTML y lógica de JavaScript de forma segura.

3.Props
Para pasar la información de cada animal (nombre, edad, especie, etc.) desde el listado general hacia cada tarjeta individual. 
Permite pasar el arreglo de datos y las funciones de estado hacia componentes de presentación. 

4. Estado (useState)
En "App.jsx" para almacenar el string del motor de búsqueda y la especie seleccionada ("Perro", "Gato", etc.)
Permite re renderizar la interfaz en tiempo real cuando el usuario interactúa con la aplicación.

5. Renderizado de listas (.map + key)
 Para recorrer el arreglo de 12 mascotas en "ListaMascotas" y transformarlo en un arreglo de componentes visuales
 El método ".map()" es el estándar en React. Usar el "id" único de la mascota como key le permite al Virtual DOM identificar eficientemente qué elemento cambió.

6. Renderizado condicional 
Para mostrar el mensaje "No hay mascotas que coincidan" y para pintar la etiqueta "URGENTE" en los casos que correspondan. 
Evita cargar elementos innecesarios en la interfaz y mejora la experiencia de usuario de acuerdo con la disponibilidad de datos. 

------------------------------------------------------------------------------------------

Preguntas de Desarrollo

1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
   Dividir la aplicación en componentes independientes (como "MascotaCard" y "FiltroEspecie"), mejora la legibilidad del código, facilita el mantenimiento posterior, permite aislar errores en componentes específicos y promueve la reutilización de bloques visuales en otras vistas de la aplicación.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.**
   La principal diferencia radica en la mutabilidad y el origen. Las "Props" son inmutables y se reciben desde un componente padre (por ejemplo, "MascotaCard" recibe las propiedades estáticas "nombre" o "raza" de la mascota). El "Estado", en cambio, es local, mutable y controlado por el propio componente para manejar la interactividad (por ejemplo, el estado "searchQuery" en "App.jsx" muta cada vez que el usuario escribe un carácter en la barra de búsqueda).
