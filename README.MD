Proyecto Fullstack: Aplicación de Tareas (Express + Prisma + HTML/JS)

Este proyecto implementa una aplicación completa de gestión de tareas, desarrollada con un backend en Express y Prisma conectado a una base de datos SQLite, y un frontend en HTML, CSS y JavaScript que consume la API mediante peticiones HTTP. Todo el código está organizado siguiendo buenas prácticas de arquitectura y se encuentra estructurado para ser desplegado en GitHub en un repositorio principal con dos carpetas: backend y frontend.

1. Descripción general del proyecto

El objetivo del sistema es permitir al usuario crear, listar, actualizar y eliminar tareas. La aplicación está dividida en dos partes:

Backend (API REST con Express + Prisma).

Frontend (HTML, CSS y JavaScript consumiendo la API).

Repositorio unificado que contiene ambas partes.

El backend expone endpoints para realizar operaciones CRUD sobre una tabla llamada "tasks", mientras que el frontend se encarga de mostrar la información proveniente del servidor y permitir al usuario interactuar con las tareas.

2. Características principales
Backend

Construido con Node.js + Express.

Conexión a la base de datos mediante Prisma ORM.

Base de datos SQLite.

Endpoints completos para CRUD (crear, leer, actualizar y eliminar tareas).

Middleware para CORS y JSON integrado.

Frontend

Interfaz sencilla con HTML y CSS.

Uso de JavaScript para consumir la API REST.

Renderizado dinámico de la lista de tareas.

Acciones soportadas: crear tarea, completarla, desmarcarla y eliminarla.

3. Backend: Funcionamiento interno

El backend expone los siguientes endpoints:

GET /api/tasks
Devuelve todas las tareas.

POST /api/tasks
Crea una nueva tarea. Recibe título y descripción.

PUT /api/tasks/:id
Actualiza el estado "completed" de una tarea o cualquier dato enviado desde el frontend.

DELETE /api/tasks/:id
Elimina una tarea por su ID.

La base de datos fue generada con Prisma e incluye un modelo con los campos id, title, description y completed. Prisma se encarga de mapear las operaciones del backend hacia la base de datos SQLite.

El servidor Express utiliza CORS habilitado globalmente para permitir solicitudes desde el frontend.

4. Frontend: Funcionamiento interno

El frontend contiene:

index.html
Interfaz gráfica con el formulario para crear tareas y el listado.

styles.css
Estilos básicos de la aplicación.

app.js
Archivo encargado de realizar las peticiones fetch al backend.

El funcionamiento general es:

Al cargar la página, el script ejecuta una función que solicita todas las tareas al backend y las muestra.

Cuando el usuario crea una nueva tarea, se envía la información mediante POST a la API y luego se recarga la lista.

El botón "Completar" o "Desmarcar" envía una actualización a la API usando el método PUT.

El botón "Eliminar" envía una petición DELETE.

Todo se renderiza dinámicamente sin necesidad de recargar la página completa.

5. Problema encontrado: Error CORS al usar Live Server

Al ejecutar el frontend desde Live Server o abriendo el archivo directamente en el navegador, aparece el siguiente error:

"Solicitud de origen cruzado bloqueada: La política de mismo origen no permite la lectura de recursos remotos en http://localhost:4000/api/tasks

."

Este error ocurre porque Live Server ejecuta la página en un puerto distinto (generalmente 5500) y el backend está en el puerto 4000, lo cual provoca una restricción del navegador por política de CORS.

Comportamiento observado

La aplicación funciona correctamente únicamente cuando se ejecuta usando Live Preview de VS Code, debido a que este entorno maneja las solicitudes de forma distinta y no bloquea la petición.

Posible solución recomendada

Configurar CORS en Express de forma más explícita, permitiendo específicamente el origen donde se está ejecutando el frontend. Por ejemplo:

Permitir el origen específico donde está corriendo Live Server (ejemplo: http://127.0.0.1:5500

).

También podría activarse un modo abierto de CORS para desarrollo, aunque no es lo recomendado en producción.

6. Estructura del repositorio final

El repositorio principal debe contener dos carpetas separadas:

/backend
    - server.js
    - prisma/
    - routes/
    - controllers/
    - package.json

/frontend
    - index.html
    - styles.css
    - app.js


Este diseño permite trabajar el backend y frontend como proyectos independientes, pero dentro de un mismo repositorio unificado para entrega académica.

7. Instrucciones para ejecutar el proyecto
Backend

Entrar a la carpeta backend.

Instalar dependencias con:
npm install

Generar cliente de Prisma:
npx prisma generate

Ejecutar migración inicial:
npx prisma migrate dev

Iniciar el servidor:
npm run dev
o
node server.js

Frontend

Abrir la carpeta frontend.

Abrir index.html usando:

Live Preview (funciona correctamente)

Live Server (puede presentar error CORS)

8. Resumen final

El proyecto implementa una aplicación fullstack completa con backend moderno (Express + Prisma + SQLite) y frontend interactivo en HTML y JavaScript. Se realizaron todas las operaciones CRUD y se manejó el consumo de API desde el frontend. Además, se documentó el error de CORS y su explicación, así como recomendaciones para resolverlo.