# ¿Cómo usas media queries para diseño responsivo?

Los mediaqueries me permiten cambiar los estilos de los elementos según la resolución de la pantalla. 

Son muy útiles cuando queremos tener responsiveness en una web app.

El approach de diseño más común es mobile first; es decir, primero se diseña pensando en mobile y, una vez se tiene el diseño, se piensa la distribución de los elementos en las pantallas con mayor resolución. Ese mismo approach se replica usualmente en el código.

Se codifica para mobile y una vez pase X umbral (una resolución determinada), se aplican los estilos que distribuyen los elementos en esa nueva resolución.

```
/* Tablet */
@media (min-width:600px){
  .card{min-width: %50}         /* dos columnas */
}

/* PC */
@media (min-width:1024px){
   .card{min-width: %33}    /* tres columnas en línea */
}

```
