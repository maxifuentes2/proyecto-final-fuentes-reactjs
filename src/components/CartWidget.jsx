import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './CartWidget.css';

export default function CartWidget() {
    const { getTotalQuantity } = useCart();

    const cartCount = getTotalQuantity();
    console.log('Cantidad total en el carrito:', cartCount);

    useEffect(() => {
        if (cartCount === 0) {
            console.log('El carrito está vacío');
        }
    }, [cartCount]);

    return (
        <div className="carrito-contenedor">
            <img src="/carrito.svg" alt="Widget del carrito de compras" className="carrito" />
            <span className="carrito-cantidad">{cartCount || 0}</span>
        </div>
    );
}









