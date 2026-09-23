# IDRD Laboratorio - Backend

API REST para la gestión de materiales y proyectos desarrollada con NestJS.

---

## Requisitos

- Node.js 22+
- Docker y Docker Compose

---

## Configuración inicial

### 1. Clonar el repositorio e instalar dependencias

```bash
npm install
```

### 2. Variables de entorno

Crea un archivo `.env` en la raíz del backend con el siguiente contenido:

```env
POSTGRES_DB=idrd_materiales
POSTGRES_USER=idrd_user
POSTGRES_PASSWORD=idrd_password

DATABASE_URL="postgresql://idrd_user:idrd_password@localhost:5432/idrd_materiales?schema=public"
```

> **Nota:** El archivo `.env` está en `.gitignore` y no debe subirse al repositorio.

---

## Ejecución del proyecto

### 1. Iniciar la base de datos

Inicia el contenedor de PostgreSQL con Docker Compose:

```bash
docker compose up -d
```

### 2. Ejecutar migraciones de la base de datos

Aplica el esquema de Prisma a la base de datos:

```bash
npx prisma migrate dev
```

### 3. Iniciar el servidor

```bash
# Modo desarrollo (con recarga automática)
npm run start:dev
```

La API estará disponible en `http://localhost:3000`.

---

## Documentación (Swagger)

Una vez iniciado el servidor, puedes acceder a la documentación interactiva de la API en:

```
http://localhost:3000/api
```