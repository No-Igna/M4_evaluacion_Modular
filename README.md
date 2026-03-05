¿# Centro medico veterinario

es una web donde veterinarios pueden iniciar sesion, registrar mascotas tratadas y visualizar sus consultas previas dinamicamente.

## Descripción

El sistema permite administrar información básica de mascotas y mostrarla dinámicamente en la interfaz.  
La aplicación utiliza una estructura modular en JavaScript para separar responsabilidades como:

- Modelos de datos
- Componentes visuales
- Lógica de la aplicación
- Validaciones y utilidades

Esto facilita la organización del código y su mantenimiento.

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (ES6 Modules)**
- **Font Awesome**
- **Bootstrap Icons**

## Estructura del Proyecto
```
.
├── index.html
├── README.md
│
├── assets
│   ├── css
│   │   └── styles.css
│   │
│   └── js
│       ├── main.js
│       └── src
│           ├── components
│           │   └── cardMascotas.js
│           │
│           ├── models
│           │   ├── mascota.js
│           │   └── veterinario.js
│           │
│           ├── render
│           │   └── Render.js
│           │
│           └── utils
│               ├── AppManager.js
│               ├── Auth.js
│               ├── constants.js
│               ├── normalizer.js
│               └── validador.js
```

## Funcionalidades

- Registro de mascotas
- Organización del código mediante módulos
- Renderizado dinámico de tarjetas de mascotas
- Validación de datos
- Interfaz responsiva con Bootstrap

## Cómo ejecutar el proyecto

1. Clonar el repositorio o descargar el proyecto.

```bash
git clone https://github.com/No-Igna/M4_evaluacion_Modular
```
