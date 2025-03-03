# UrbanVerb - Tienda Online

Hola! Bienvenido a **UrbanVerb**, mi tienda de ropa urbana hecha con React. Este es mi proyecto final para el curso de React en CoderHouse. La idea era hacer una tienda online que funcione bien y que sea fácil de usar.

Puedes ver la página funcionando acá: [UrbanVerb en Vercel](https://proyecto-final-fuentes-reactjs.vercel.app/).

## Funcionalidades

En UrbanVerb puedes:
- Ver productos por categorías
- Ver detalles de cada producto
- Agregar productos al carrito y que se guarden aunque cierres la página
- Hacer una compra llenando un formulario
- Guardar todo en Firebase

## Tecnologías usadas

Para hacer este proyecto usé:
- **React** para la interfaz
- **React Router DOM** para moverme entre páginas
- **Firebase/Firestore** para guardar productos y órdenes de compra
- **SweetAlert2** para mostrar alertas bonitas
- **CSS** para los estilos

## Cómo está organizado el código

Dividí el proyecto en varias partes para que sea más ordenado:

### Componentes que manejan datos
- `ItemListContainer`: Muestra los productos
- `ItemDetailContainer`: Muestra los detalles de un producto
- `CartPage`: Muestra lo que hay en el carrito
- `CheckoutForm`: Maneja el formulario de compra

### Componentes que solo muestran cosas
- `ProductCard`: Muestra cada producto en una tarjeta
- `ItemCount`: Permite elegir la cantidad de productos
- `Logo`: Muestra el logo de la tienda
- `CartWidget`: Ícono del carrito con la cantidad de productos
- `ButtonComponent`: Botón reutilizable

### Contextos
- **CartContext**: Maneja el carrito para que funcione en toda la app

## Cómo instalarlo en tu compu

Si quieres probarlo en tu PC, sigue estos pasos:

1. Clona el repositorio:

   git clone https://github.com/maxifuentes2/proyecto-final-fuentes-reactjs


2. Instala las dependencias:

   npm install


3. Ejecuta el proyecto:

   npm run dev

## Explicación rápida de cómo funciona

### Navegación
Usé **React Router** para moverse entre páginas. También usé `NavLink` para marcar en qué página estás. Se pueden ver productos por categorías o ver los detalles de uno en particular.

### Catálogo y detalles
Se muestran los productos con sus categorías. Cuando haces clic en un producto, ves más información y puedes agregarlo al carrito.

### Carrito de compras
Puedes agregar, quitar y modificar productos en el carrito. Todo se guarda en **localStorage** para que no se pierda si cierras la página. También hay un formulario para completar los datos y finalizar la compra.

### Firebase
Usé **Firestore** para guardar los productos y los pedidos. También se pueden hacer consultas para filtrar los productos por categoría.

## Cómo comprar en la tienda

1. Explora los productos en la tienda o en las categorías.
2. Haz clic en el que te guste para ver los detalles.
3. Elige cuántos quieres y agrégalos al carrito.
4. Ve al carrito y revisa tu compra.
5. Llena el formulario con tus datos.
6. Se genera una orden con un número de confirmación. 