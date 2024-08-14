# JELOU AI TEST

Esta aplicación es una solución web moderna y escalable construida con Angular 17, diseñada para crear un listado de libros favoritos o para leer.

### Características Principales

- **Interfaz de Usuario Interactiva**: Ofrece una experiencia de usuario amigable, con un diseño moderno y adaptado a dispositivos móviles.

- **Gestión de Estado con Zustand**: Utiliza Zustand para gestionar el estado de la aplicación de manera eficiente, permitiendo una rápida respuesta a las acciones del usuario.

- **Persistencia de Datos**: Los datos se almacenan en `localStorage`, lo que permite que la información se mantenga entre sesiones y se recupere incluso después de recargar la página.

- **Optimización del Rendimiento**: La aplicación está optimizada para ofrecer un rendimiento superior, con tiempos de carga reducidos y una respuesta rápida a las interacciones del usuario.

- **Modularidad y Escalabilidad**: El código está estructurado de manera modular, facilitando la ampliación de características y el mantenimiento a largo plazo.

### Tecnologías Utilizadas

- **React 18**: El framework principal para el desarrollo de la aplicación.
- **Zustand**: Para la gestión del estado de la aplicación.
- **TypeScript**: Para una mayor seguridad y facilidad en el desarrollo del código.
- **Tailwind Css**: Framework css para un mejor diseño y responsivo.
- **Daisy UI**: Sistema de diseño basado en Tailwind

## Instalación

Sigue estos pasos para levantar el proyecto en tu máquina local:

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/alejandr0pg/library-books.git
   cd library-books
   ```

2. **Instala las dependencias**

Asegúrate de estar en el directorio del proyecto y ejecuta:

```bash
npm install
```

### Configura el entorno

Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias. Puedes basarte en el archivo .env.example para configurarlo.

### Levanta el servidor de desarrollo

Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor:

```bash
ng serve
```

Esto levantará la aplicación en http://localhost:4200/ por defecto.

### Uso

Una vez que la aplicación esté corriendo, abre tu navegador y dirígete a http://localhost:4200/ para ver la aplicación en acción.
