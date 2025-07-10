# ¿Cómo implementas autenticación en Nest.js?

En Nest la autenticación se hace comunmente a través de lo que se llaman *Guards*.

Un Guard es una pieza de código (un decorador) que sirve para extender la funcionalidad de los controladores (las funciones o métodos que reciben las peticiones). Esta funcionalidad se extiende en el sentido de que le permite a Nest realizar una serie de validaciones antes de pasar el request al controlador, incluso puede decidir no enviar el request si considera que este no cumple con los requisitos.

Esto último es precisamente útil ya que eso es lo que buscamos cuando hacemos endpoint (declaramos un método dentro de un controlador).

En el siguiente proyecto, implemento una autenticación con JWT algo rudimentaria; sin embargo, sirve para la explicación:

https://github.com/angellovc/worms-iot
https://github.com/angellovc/worms-iot/tree/master/backend

En el siguiente link se declara el guard. Podemos ver cómo este recibe la petición, extrae el token y hace su validación.

https://github.com/angellovc/worms-iot/blob/master/backend/src/auth/guards/jwt-auth.guard.ts

Luego aquí se decora el endpoint que necesitamos restringir con el guard definido anteriormente. Lo elegante del asunto es que con un simple decorador encima del endpoint y unos pocos parametros (I.E: allowedRoles = [Admin, User]). Ya hemos añadido una estrategia de autorización a un endpoint y esto se puede replicar con cualquiera.

https://github.com/angellovc/worms-iot/blob/master/backend/src/agents/controllers/agent.controller.ts
