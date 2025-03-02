
# UrbanVerb E-Commerce

Bienvenido a **UrbanVerb**, tu tienda online de ropa urbana favorita. Este proyecto fue desarrollado como parte del curso de React de CoderHouse, y es el proyecto final donde implementamos todas las funcionalidades necesarias para crear una tienda en línea moderna y funcional.

Puedes ver la página web en este [enlace de Vercel](https://proyecto-final-fuentes-reactjs.vercel.app/).

## Características

UrbanVerb ofrece una experiencia de compra completa, con las siguientes características:

- Navegación entre diferentes categorías de productos
- Visualización detallada de cada producto
- Carrito de compras con persistencia en el navegador (localStorage)
- Proceso de checkout con validación de formularios
- Integración con Firebase para almacenar productos y gestionar órdenes

## Tecnologías utilizadas

Para crear UrbanVerb, utilizamos algunas de las mejores herramientas del mundo del desarrollo web:

- **React** para la construcción de la interfaz de usuario
- **React Router DOM** para la navegación entre páginas
- **Firebase / Firestore** para la base de datos en la nube
- **SweetAlert2** para mostrar alertas visuales
- **CSS** para los estilos y diseño

## Estructura del proyecto

El proyecto sigue una estructura modular para mantener el código limpio y organizado. Separamos los componentes según su función:

### Componentes contenedores
Estos componentes gestionan la lógica y obtienen los datos que necesitamos para mostrar:
- `ItemListContainer`: Muestra el listado de productos
- `ItemDetailContainer`: Muestra los detalles de un producto individual
- `CartPage`: Muestra el carrito de compras
- `CheckoutForm`: Maneja el proceso de pago

### Componentes presentacionales
Estos componentes están enfocados solo en la interfaz de usuario (UI):
- `ProductCard`: Muestra la tarjeta de cada producto
- `ItemCount`: Muestra un selector de cantidad para los productos
- `Logo`: El logo de la tienda
- `CartWidget`: Muestra un icono del carrito con la cantidad de productos
- `ButtonComponent`: Un botón reutilizable en toda la app

### Contextos
- **CartContext**: Este contexto gestiona el estado global del carrito de compras, para que los productos añadidos estén disponibles en toda la aplicación.

## Instalación

Si quieres ejecutar el proyecto en tu máquina local, solo sigue estos pasos:

1. Clona este repositorio:

    git clone https://github.com/maxifuentes2/proyecto-final-fuentes-reactjs
    

2. Instala las dependencias necesarias:

    npm install


3. Inicia la aplicación:

    npm run dev


## Características principales

### Navegación
La navegación es fluida gracias a **React Router**. Además, usamos `NavLink` para resaltar la ruta activa y mejorar la experiencia del usuario. También creamos rutas dinámicas para las categorías y detalles de los productos.

### Catálogo y Detalle de Productos
Puedes ver una lista de productos filtrada por categorías y, al hacer clic en un producto, podrás ver todos sus detalles. Además, es posible añadir productos al carrito directamente desde la página de detalles. Implementamos renderizado condicional para mostrar mensajes de carga cuando es necesario.

### Carrito de Compras
El carrito permite añadir, eliminar y modificar productos. Además, todo lo que pongas en el carrito se guarda en tu navegador mediante **localStorage**, para que puedas continuar tu compra más tarde. Al finalizar la compra, se valida un formulario de checkout con la información del usuario.

### Integración con Firebase
Los productos y las órdenes de compra se almacenan en **Firestore** de Firebase. También implementamos consultas específicas que permiten filtrar los productos por categorías, ofreciendo una experiencia más personalizada.

## ¿Cómo comprar?

1. Navega por las categorías o directamente por la página principal de productos.
2. Haz clic en el producto que te interese para ver sus detalles.
3. Añade el producto al carrito seleccionando la cantidad que deseas.
4. Revisa tu carrito de compras y haz cualquier modificación que necesites.
5. Procede al checkout completando tu información personal.
6. ¡Recibe la confirmación de tu compra con el número de orden!

