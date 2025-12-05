Sistema de Gestión de Tareas

Aplicación fullstack para administrar tareas diarias con backend REST API y frontend vanilla JavaScript.

Información del Proyecto

**Desarrollado por:** [Thomas Isaza Isaza]  
**Materia:** [Node.js]    
**Universidad:** [Analisis y desarrollo de software]  
**Fecha:** [4 Diciembre 2025]

## Descripción

Sistema completo de gestión de tareas que permite crear, leer, actualizar y eliminar (CRUD) tareas. Implementa una arquitectura cliente-servidor con API REST, base de datos PostgreSQL y frontend responsive.

## Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework para API REST
- **Prisma ORM** - Object-Relational Mapping para PostgreSQL
- **PostgreSQL** - Base de datos relacional
- **CORS** - Middleware para peticiones cross-origin

### Frontend
- **HTML5** - Estructura
- **CSS3** - Estilos y diseño responsive
- **JavaScript Vanilla** - Lógica del cliente (Fetch API)

### Herramientas
- **Git & GitHub** - Control de versiones
- **VS Code** - Editor de código
- **Nodemon** - Auto-restart del servidor en desarrollo

## Estructura del Proyecto

\`\`\`
trabajo-BACK-FRONTEND/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma        # Modelo de datos
│   │   └── migrations/          # Migraciones de BD
│   ├── src/
│   │   ├── controllers/         # Lógica de negocio
│   │   │   └── tasksController.js
│   │   ├── routes/              # Rutas de la API
│   │   │   └── tasks.js
│   │   └── server.js            # Servidor Express
│   ├── .env                     # Variables de entorno
│   ├── package.json
│   └── .gitignore
├── fronted/                     # Frontend
│   ├── index.html               # Página principal
│   ├── styles.css               # Estilos
│   └── app.js                   # Lógica del cliente
├── README.md                    # Este archivo
└── .gitignore
\`\`\`

## Instalación y Configuración

### Prerrequisitos
- Node.js v18 o superior
- PostgreSQL instalado o cuenta en [Neon.tech](https://neon.tech)
- Git

## 🔌 API Endpoints

### **Base URL:** `http://localhost:3000/api/tasks`

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| GET | `/api/tasks` | Obtener todas las tareas | - |
| GET | `/api/tasks/:id` | Obtener tarea por ID | - |
| POST | `/api/tasks` | Crear nueva tarea | `{ title, description }` |
| PUT | `/api/tasks/:id` | Actualizar tarea | `{ title?, description?, completed? }` |
| DELETE | `/api/tasks/:id` | Eliminar tarea | - |

### Ejemplos de uso

**Crear tarea:**
\`\`\`bash
curl -X POST http://localhost:3000/api/task \
  -H "Content-Type: application/json" \
  -d '{"title":"Estudiar Node.js","description":"Repasar Express y Prisma"}'
\`\`\`

**Obtener todas las tareas:**
\`\`\`bash
curl http://localhost:3000/api/tasks
\`\`\`

**Actualizar tarea:**
\`\`\`bash
curl -X PUT http://localhost:3000/api/task/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
\`\`\`

**Eliminar tarea:**
\`\`\`bash
curl -X DELETE http://localhost:3000/api/task/1
\`\`\`

## Modelo de Datos

\`\`\`prisma
model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
\`\`\`

## Características

- ✅ CRUD completo de tareas
- ✅ Interfaz responsive y moderna
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ Base de datos PostgreSQL
- ✅ API RESTful
- ✅ Diseño con gradientes y animaciones
- ✅ Feedback visual al usuario

## Capturas de Pantalla

[Aquí puedes agregar screenshots de tu aplicación]

## Pruebas

Para probar la aplicación:

1. Crear varias tareas
2. Marcar tareas como completadas
3. Eliminar tareas
4. Verificar que los cambios persistan (recargar la página)

## Scripts Disponibles

### Backend
\`\`\`bash
npm start          # Inicia el servidor
npm run dev        # Inicia con nodemon (auto-reload)
npx prisma studio  # Abre interfaz gráfica de la BD
npx prisma migrate dev  # Crea nueva migración
\`\`\`

## Variables de Entorno

Crea un archivo `.env` en la carpeta `backend/`:

\`\`\`env
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
PORT=3000
NODE_ENV=development
\`\`\`

## Problemas Comunes

**Error: Cannot find module 'express'**
\`\`\`bash
cd backend && npm install
\`\`\`

**Error: Prisma Client not generated**
\`\`\`bash
npx prisma generate
\`\`\`

**Puerto 3000 en uso**
- Cambia el puerto en `backend/src/server.js`
- O detén el proceso: `lsof -ti:3000 | xargs kill`

## Aprendizajes

Este proyecto me permitió:
- Implementar una API REST completa con Express
- Utilizar Prisma ORM para gestionar base de datos
- Consumir APIs con Fetch en JavaScript vanilla
- Aplicar buenas prácticas de desarrollo web
- Estructurar un proyecto fullstack moderno

## Contribuciones

Este es un proyecto académico. No se aceptan contribuciones externas.

## Licencia

Proyecto académico - [SENA-Analisis y desarrollo de software] 2025

## Contacto

**[Tu Nombre]**
- Email: tu-email@ejemplo.com
- GitHub: [https://github.com/ThomasIsaza04/FBEND-Proyecto-FInal]

---

Proyecto desarrollado como trabajo final de [Node.js]
