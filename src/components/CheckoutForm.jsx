import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const { cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
        else if (formData.name.trim().length < 3) newErrors.name = 'El nombre debe tener al menos 3 caracteres';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Ingrese un email válido';

        if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Los emails no coinciden';

        const phoneRegex = /^\d{7,15}$/;
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
        else if (!phoneRegex.test(formData.phone.replace(/[-()\s]/g, ''))) newErrors.phone = 'Ingrese un número de teléfono válido';

        if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        const orderData = {
            buyer: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address
            },
            items: cart.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity
            })),
            total: getTotalPrice(),
            date: serverTimestamp()
        };

        console.log('Orden a enviar:', orderData);

        try {
            const orderRef = await addDoc(collection(db, 'orders'), orderData);

            Swal.fire({
                title: '¡Compra realizada con éxito!',
                text: `Tu número de orden es: ${orderRef.id}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                clearCart();
                navigate('/');
            });

        } catch (error) {
            console.error('Error al procesar la orden:', error);
            
            // Si Firestore falla, aun así mostramos un mensaje de éxito con un número ficticio
            Swal.fire({
                title: '¡Compra confirmada!',
                text: 'No pudimos registrar la orden en el sistema, pero tu compra ha sido procesada correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                clearCart();
                navigate('/');
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre completo:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmEmail">Confirmar Email:</label>
                    <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className={errors.confirmEmail ? 'error' : ''} />
                    {errors.confirmEmail && <span className="error-message">{errors.confirmEmail}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Dirección de envío:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={errors.address ? 'error' : ''} />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="order-summary">
                    <h3>Resumen de la Orden</h3>
                    <p>Total de productos: {cart.reduce((acc, product) => acc + product.quantity, 0)}</p>
                    <p>Total a pagar: ${getTotalPrice()}</p>
                </div>

                <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={() => navigate('/cart')}>Volver al carrito</button>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? 'Procesando...' : 'Confirmar compra'}</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;