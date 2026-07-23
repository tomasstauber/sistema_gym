Sistema Gym — Gestión de Clases

Aplicación para gestionar inscripción y reservas de clases de un gimnasio, con usuarios Administrador y Socio. Incluye login, alta/edición/baja de clases, búsqueda y reserva, y control de capacidad.
Este repo contiene la versión SPA (Vite + React) para evaluación rápida.

Estado: MVP funcional para demo académica. Plataforma: Windows.

## Funcionalidades

# Comunes

Autenticación (login / registro básico).

Manejo de sesión y validaciones básicas.

Persistencia local (LocalStorage) para la demo.

# Administrador

ABM de clases: nombre, instructor, fecha/hora, duración, capacidad (cupos).

Edición segura: evita eliminar clases con reservas activas.

Vista de detalles y reservas asociadas.

# Socio

Exploración de clases disponibles (filtro por día/horario).

Vista de detalles de clase (instructor, capacidad restante).

Reserva / cancelación de reserva con control de cupos.

# Extras de usabilidad

Modales consistentes para ver/editar.

Mensajería de errores y confirmaciones simples.

Datos semilla opcionales para arrancar más rápido.

## Stack técnico

Vite + React (SPA)

React Router (navegación)

Tailwind CSS (estilos)

LocalStorage (persistencia simple sin backend)

## Configuración y scripts
Requisitos: Node.js 18+ (Windows).
# instalar dependencias
npm install

# entorno de desarrollo
npm run dev

# build de producción
npm run build

# previsualizar build
npm run preview
