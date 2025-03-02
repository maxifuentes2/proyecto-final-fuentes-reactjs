# UrbanVerb E-Commerce

Este proyecto es una tienda online de ropa urbana desarrollada con React y Firebase, creado como proyecto final para el curso de React de CoderHouse.

## Características

- Navegación entre diferentes categorías de productos
- Visualización detallada de cada producto
- Carrito de compras con persistencia en localStorage
- Proceso de checkout con validación de formularios
- Integración con Firebase para almacenamiento de productos y órdenes

## Tecnologías utilizadas

- React
- React Router DOM
- Firebase/Firestore
- SweetAlert2
- CSS para estilos

## Estructura del proyecto

El proyecto sigue una estructura modular con separación de componentes según sus responsabilidades:

- **Componentes contenedores**: Manejan la lógica y obtención de datos
  - ItemListContainer
  - ItemDetailContainer
  - CartPage
  - CheckoutForm

- **Componentes presentacionales**: Se centran en la UI
  - ProductCard
  - ItemCount
  - Logo
  - CartWidget
  - ButtonComponent

- **Contextos**:
  - CartContext: Gestiona el estado global del carrito de compras

## Instalación

1. Clona este repositorio

git clone https://github.com/maxifuentes2/proyecto-final-fuentes-reactjs


2. Instala las dependencias

npm install


3. Configura Firebase
   - Crea un proyecto en Firebase
   - Habilita Firestore
   - Configura las credenciales en `firebase.js`
   - Crea una colección `products` con los productos de la tienda

4. Inicia la aplicación

npm run dev

## Características principales

### Navegación
- La aplicación implementa React Router para una navegación SPA fluida
- Utiliza NavLink para mejorar la UX indicando la ruta actual mediante estilos
- Genera rutas dinámicas para categorías y detalles de productos

### Catálogo y detalle
- Muestra un listado de productos con filtrado por categoría
- Detalle completo de cada producto con opción de agregar al carrito
- Rendering condicional para estados de carga

### Carrito de compras
- Añadir, eliminar y modificar productos
- Persistencia de datos en localStorage
- Finalización de compra con formulario validado

### Integración de firebase
- Almacenamiento de productos en Firestore
- Creación de órdenes de compra
- Consultas específicas con filtros por categoría

## Compra

1. El usuario navega por las categorías o la página principal
2. Selecciona un producto para ver sus detalles
3. Añade el producto al carrito (seleccionando cantidad)
4. Accede al carrito para revisar su selección
5. Procede al checkout completando un formulario validado
6. Recibe confirmación con el número de orden
