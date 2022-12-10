#API REST

#API:
“interfaz de programación de aplicaciones”. 
En el contexto de las API, la palabra aplicación se refiere
a cualquier software con una función distinta.

#REST

transferencia de estado representacional
REST define un conjunto de funciones como GET, PUT, DELETE, etc.
que los clientes pueden utilizar para acceder a los datos del servidor. 
Los clientes y los servidores intercambian datos mediante HTTP.

Las integraciones de las API son componentes de software que 
actualizan automáticamente los datos entre los clientes y los servidores
 
La interfaz puede considerarse como un contrato de servicio entre dos 
aplicaciones. Este contrato define cómo se comunican entre 
sí mediante solicitudes y respuestas.

Es una interfaz que dos sistemas de computación
utilizan para intercambiar información de manera segura 
a través de Internet,una API es el mensajero que permite 
la comunicación o interacción entre aplicaciones 

#Axios

Axios nos permite hacer solicitudes a un servidor con los
 métodos GET, DELETE, POST, PUT, PATCH, HEAD Y OPTIONS.
Los datos que recibimos del servidor vienen en forma de 
objetos JavaScript,  Axios los serializa en formato JSON.

#Fetch


Fetch ofrece una definición genérica de los objetos Request y Response
El método fetch() toma un argumento obligatorio, la ruta de acceso al
recurso que desea recuperar. Devuelve una Promise (en-US) que resuelve 
en Response a esa petición, sea o no correcta.

#Endpoint

Un endpoint es una pasarela que conecta los procesos del servidor de la 
aplicación con una interfaz externa. En otras palabras, es la dirección 
a la que se envían las peticiones.

GET https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151
GET https://pokeapi.co/api/v2/pokemon
GET https://pokeapi.co/api/v2/pokemon-species

GET - obtiene información del servidor; no requiere un cuerpo de petición;
POST - crea un nuevo objeto en la base de datos, requiere un cuerpo de petición con los campos de este objeto;
PUT - restablece completamente un objeto específico en la base de datos;
PATCH - similar a PUT, restablece un objeto específico en la base de datos, pero sólo actualizará los campos que se mencionan en el cuerpo de la petición;
DELETE - elimina el objeto de la base de datos.


# BriefPokedex

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Local

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



