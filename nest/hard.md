# ¿Cómo gestionas la configuración y variables de entorno en Nest.js?

Esta es otra de las grandes bondades de NestJS. Estoy seguro que todos hemos participado de proyectos que al tratar de correrlos fallan, porque algo hace falta, pero es imposible saber qué está haciendo falta.

Muchas veces esto sucede, porque no se están validando las variables de entorno. NestJS ofrece una manera bastante sencilla de hacerlo. 

Creando un módulo de configuración, podemos decirle a NestJS que debe validar que las variables de entorno requeridas para correr el proyecto están presentes. Aquí abajo un ejemplo.

https://github.com/angellovc/worms-iot/blob/master/backend/src/config/config.module.ts

Pasando el atributo configTypes, le decimos a Nest cuales variables de entorno debe tomar 


https://github.com/angellovc/worms-iot/blob/master/backend/src/config/config-types.ts


Pero no solo podemos cargarlas, sino también validar que se encuentren en el formato correcto. El configSchema nos permitirá validar el tipo de dato.

https://github.com/angellovc/worms-iot/blob/master/backend/src/config/config-schema.ts
