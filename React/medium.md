# ¿Qué es el DOM virtual y cómo lo usa React?

Las operaciones de actualización del DOM son bastante costosas en términos de performance. 

Por esta razón, React no actualiza directamente el DOM cada que hay un cambio de estado.

React, por el contrario, mantiene una copia del DOM, esta copia es la que llamamos virtual DOM. React actualiza primero los elementos dentro del virtual DOM (la copia) y se basa en esta para identificar cuales cuales debe actualizar en el DOM real.

De esta forma, React actualiza quirúrgicamente los elementos que han cambiado su estado y deja intactos aquellos que no. Esto hace que el renderizado sea más rapido y performante del lado del cliente.
