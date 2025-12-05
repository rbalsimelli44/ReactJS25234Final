# 🛒 eCommerce React App

Este proyecto es una **aplicación eCommerce desarrollada con React JS, Vite y Bootsrap**, que implementa un sistema de carrito de compras, conexión a una API de productos, rutas dinámicas y protegidas.  

Se utilizan **Bootstrap** para el diseño responsivo y **FontAwesome** para íconos.

## 🚀 Tecnologías utilizadas

- ⚛️ **React JS** (con Vite)
- 🎨 **Bootstrap 5**
- 💎 **FontAwesome**
- 🔄 **React Router DOM**
- 🌐 **Fetch API / Axios**
- 🪝 **Hooks (useState, useEffect)**
- 🔐 **Rutas protegidas**


## 🧩 Estructura del proyecto

public/
├── sounds/
│ └── Three_O`Clock_BLues.mp3
| 
├── videos/
│ └── Visita_Comunidad_Guarani.mp4
| 
src/
├── assets/
│ ├── icons/
│ ├── images/
│ └── logos/
| 
├── components/
│ ├── layout/
│ | ├── Carrito.jsx
│ | ├── Main.jsx
│ | ├── Footer.jsx
│ | ├── Navbar.jsx
│ | ├── Gallery.jsx
│ | └── Header.jsx
| |
│ ├── utils/
│ | ├── EliminarProducto.jsx
│ | ├── formatPrice.jsx
│ | ├── FormularioProducto.jsx
│ | ├── Botones.jsx
│ | ├── Formulario.jsx
│ | ├── MockAPI.jsx
│ | ├── SocialIcons.jsx
│ └─└── Titulos.jsx
│
├── context/
│ | ├── AuthContext.jsx
│ | ├── CartContext.jsx
│ | ├── DefContext.jsx
│ └─└── ProdContext.jsx
|
├── hooks/
│ | ├── useAuthContext.jsx
│ | ├── useCartContext.jsx
│ └─└── useProdContext.jsx
|
├── pages/
│ ├── Contacto.jsx
│ ├── DetalleProducto.jsx
│ ├── IniciarSesion.jsx
│ ├── Inicio.jsx
│ ├── Navbar.jsx
│ ├── Nosotros.jsx
│ ├── Opiniones.jsx
│ ├── Pagar.jsx
│ ├── Productos.jsx
│ ├── RutaProtegida.jsx
│ └── Servicios.jsx
│
├── routes/
│ └── AppRoutes.jsx
│
├── styles/
│ ├── App.css
│ ├── AppRoutes.css
│ ├── carrito.css
│ ├── contacto.css
│ ├── detalleProducto.css
│ ├── footer.css
│ ├── formulario.css
│ ├── gallery.css
│ ├── header.css
│ ├── index.css
│ ├── navbar.css
│ ├── nosotros.css
│ ├── opiniones.css
│ ├── productos.css
│ └── servicios.css
|
├── App.jsx
└── main.jsx

## 🧠 Requerimientos implementados

### ✅ **Requerimiento #1: Gestión del Carrito y Autenticación de Usuarios**

**Objetivo:** Carrito de compras funcional y restringir el acceso a secciones privadas mediante
autenticación de usuarios.

**Características:**
- Componente `ProductList` para mostrar los productos disponibles.
- Hook `useState` para manejar el estado del carrito.
- Evento `onClick` en cada producto para **agregarlo al carrito**.
- Componente `Cart` para **mostrar los productos seleccionados**.
- Diseño base del eCommerce con un `Layout` que incluye `Navbar` y `Footer`.


### 🌐 **Requerimiento #2: CRUD de Productos con MockAPI**

**Objetivo:** Permitir la administración completa del catálogo de productos mediante operaciones de creación, lectura,
actualización y eliminación.

**Características:**
- Uso de `useEffect` para **consumir la API de productos**.
- Estado de carga (`loading`) y manejo de errores (`error`).
- Actualización dinámica de la interfaz al obtener los datos.
- Ampliación del carrito con productos provenientes de la API.
- Diseño actualizado con tarjetas de productos (Bootstrap Cards).


### 🧭 **Requerimiento #3: Optimización de Diseño y Responsividad**

**Objetivo:** Mejorar la apariencia y la accesibilidad del sitio utilizando herramientas modernas de diseño y estilización.

**Características:**
- Uso de **React Router DOM**.
- Rutas implementadas para `Home`, `Productos`, `Carrito`, `Login` y `404`.
- Componente separado para cada sección.
- Estado de carga y manejo de errores en las vistas.
- Navegación fluida entre productos y páginas.
