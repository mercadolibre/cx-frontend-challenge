# Challenge técnico Mercadolibre

Este challenge consiste en **dos partes**, una de frontend y otra de backend. Dado que solemos trabajar en ambos mundos, te pedimos que lo tengas en cuenta a la hora de diseñar y desarrollar las distintas capas del proyecto.

## Entregable
Este repositorio es un [Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), esperamos que lo uses como template para crear tu proyecto, que será el que nos enviarás cuando finalices el challenge con las siguientes condiciones:
- Tu usuario debe ser el **owner**
- Si no te especificaron una rama, deberás usar los archivos que están en `master`
- El repositorio debe tener visibilidad `privada`
- Una vez que finalices y nos compartas el challenge, te enviaremos los usuarios que van a revisar tu entregable para que los agregues

## Tecnologías

Solemos usar React para nuestros frontends y NodeJS para nuestros backends (con Express), pero siéntete libre de hacerlo en otra tecnología de **Javascript** si así lo prefieres.

## Frontend

El frontend debe tener una ruta **/profile** en la cuál se podrá visualizar información general del usuario, un listado de sus compras, y se podrá acceder al detalle de cada una de estas.

- **Información general**
  - Nombre completo del usuario
  - Imagen del perfil
  - Nivel de Mercado Puntos
  - Restricciones
- **Mis compras**
  - Listado de compras, con id de compra, título del ítem, precio, cantidad y fecha de compra, y una forma para ver el detalle de esa compra
  - Paginado
- **Detalle de compra**
  - Forma para volver al listado de compras
  - Vendedor
  - Id de la compra
  - Título del ítem
  - Imagen del ítem
  - Fecha de compra
  - Precio
  - Cantidad
  - Estado del pago
  - Estado del envío

## Backend

El backend debe tener los endpoints necesarios para servir la información que necesita el frontend. Los endpoints quedan a libre definición, pero debes usar el servicio llamado **`MercadolibreService`** que se encuentra en este repositorio, el cual expone los distintos mocks de información que vas a necesitar. No modifiques los archivos que te entregamos, solamente úsalos en tu solución.

- **MercadolibreService**
  - getUser
  - getUserRestrictions
  - getUserPurchases
  - getLevel
  - getShipment
  - getPayment

## Puntos de evaluación

Para este challenge nos interesa ver cómo aplicas todos tus conocimientos en torno a:

- **Funcionalidad**
- **Buenas prácticas de código**
- **Formato de código**
  - Handling de errores.
  - Uso de estructuras de datos.
  - Tests.
  - Dependencias.
  - Uso de las herramientas (como React, Express, CSS / Sass, etc).
- **Estructura del proyecto**
- **Escalabilidad**

Nos interesan soluciones simples, técnicamente correctas, mantenibles y escalables. Es importante entender el alcance del proyecto y usar las herramientas adecuadas para resolver la consigna dada.

Ten en cuenta que necesitamos instrucciones para levantar el proyecto, las mismas son ***indispensables*** para poder revisar y corregir tu aplicación. Esto incluye tanto los comandos a ejecutar como también el entorno de desarrollo que debemos tener (toda la información que consideres relevante sobre el stack requerido).

> **Cuidado!**
>
> Sin esta información, podríamos decidir ***no continuar*** con la revisión del challenge.

### Tips para Frontend

- El diseño queda a libre interpretación, puedes diseñar lo que creas conveniente.
- La información listada para cada sección es la requerida, no es necesario mostrar otras adicionales.

### Tips para Backend

- Toda la información que necesitas para las pantallas del frontend la puedes encontrar usando el servicio que proveemos. Si no es así, envíanos un mensaje cuanto antes!

