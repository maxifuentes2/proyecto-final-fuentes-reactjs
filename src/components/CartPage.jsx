import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    console.log(cart);

    if (cart.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>EL CARRITO ESTÁ VACÍO.</h2>
            </div>
        );
    }

    const handleRemoveFromCart = (productId) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Vas a eliminar este producto del carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(productId);
                Swal.fire('Producto eliminado', '', 'success');
            }
        });
    };

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Vas a vaciar todo el carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire('Carrito vaciado', '', 'success');
            }
        });
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="carrito-contenido">
            <h2>Carrito de Compras</h2>
            {cart.map(product => (
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.name} className="cart-item-image" />
                    <div className="cart-item-details">
                        <h4>{product.name} (x{product.quantity})</h4>
                        <p>Subtotal: ${product.price * product.quantity}</p>
                    </div>
                    <button onClick={() => handleRemoveFromCart(product.id)} className='vaciar'>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${getTotalPrice()}</h3>
            <div className="cart-actions">
                <button onClick={handleClearCart} className="vaciar">Vaciar carrito</button>
                <button onClick={handleCheckout} className="comprar">Finalizar compra</button>
            </div>
        </div>
    );
};

export default CartPage;
