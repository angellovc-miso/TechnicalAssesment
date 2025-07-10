# ¿Qué es GraphQL y en qué se diferencia de REST?

Esta es una de mis preguntas favoritas, porque tiene que ver con el criterio para elegir una tecnología sobre otra.

Cuando trabajaba en Finaipro (una empresa de finanzas cuyo valor agregado era el proveer a los usuarios con una detallada cantidad de datos para tomar decisiones financieras), el diseño de la UI cada vez requería mayor flexibilidad. En algunas vistas se requería informaicón y en otras la misma información requería ser cruzada con otra información. 

Por ejemplo:

Vista 1
- El endpoint de assets debía ser cruzado con el de performance
Vista 2
- Los mismos assets debían ser cruzados con indicadores macroeconómicos
> En realidad el cruce de información era más complejo, pero este es un ejemplo ilustrativo

Usar REST para este tipo de situaciones puede resolver el proble, pero puede traer costos importantes:

- HTTP responses sobrecargados: los responses pueden tener más información de la necesaria, sobre cargando la red con HTTP responses innecesariamente robustas
- Multiples llamados: por la forma en que el estandar REST concibe la definición de los endpoints, la información requerida para una vista puede estar dispersa en muchos endpoints. Para poder mostrar al usuario la info relevante tienes dos opciones: hacer multiples llamados o romper el estandar.
> "REST sirve para todos los casos, pero está optimizado para ninguno"

Es aquí donde GraphQL brilla, pues te permite en confeccionar un request para el caso de uso especifico que requieres en una sola llamada. Esto resuelve el costo que supone REST, pues solo solicitas al back la información necesaria y lo haces en un solo llamado.



