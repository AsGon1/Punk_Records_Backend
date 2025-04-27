# Punk_Records_Backend - Gestión de Usuarios

 es una aplicación backend que simula la gestión de de usuarios de una pagina pare reseñar animes y mangas. El sistema permite registrarse, iniciar sesión y realizar reseñas de aquellos medios que hayas hecho tus favoritos.

---

## Descripción del Proyecto

Este proyecto simula un sistema de gestión de usuarios y reseñas para animes y mangas. Los usuarios pueden:

- Registrarse en el sistema
- Iniciar sesión
- Realizar reseñas

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** + **Express**: Backend y enrutamiento
- **Pug**: Motor de plantillas para las vistas
- **Sequelize**: ORM para la conexión con MySQL
- **MySQL**: Base de datos relacional (diseñada con Workbench)
- **CSS**: Estilos personalizados para mejorar la presentación
- **Docker**: Contenedores para la base de datos y la aplicación

---

## 🐳 Docker

El proyecto está completamente dockerizado. Se utiliza **Docker Compose** para levantar tanto la base de datos MySQL como la aplicación en Node.js, en contenedores separados.

### 🔧 ¿Cómo levantar el proyecto con Docker?

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/punk_records_backend.git
   cd punk_records_backend