import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../firebase/firebase'; 
import './ItemDetailContainer.css';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const { addToCart } = useCart(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1); 
    const [goToCart, setGoToCart] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProduct(id); 
                setProduct(productData);
            } catch (error) {
                console.error("Error loading product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className='cargando'>Cargando producto...</p>;

    if (!product) return <p>Producto no encontrado.</p>;

    const handleAddToCart = () => {
        addToCart(product, quantity); 
        setGoToCart(true);
        Swal.fire({
            title: `Agregaste ${quantity} ${quantity === 1 ? 'item' : 'items'} al carrito!`,
            icon: "success",
            draggable: true
        });
    };

    const handleOnAdd = (count) => {
        setQuantity(count);
    };

    const toggleModal = () => setShowModal(!showModal);

    return (
        <div className="item-detail-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description.substring(0, 100)}...</p>
            <button className="show-more-btn" onClick={toggleModal}>Mostrar más</button>
            <p className="price">Precio: ${product.price}</p>
            
            {!goToCart ? (
                <div>
                    {product.stock > 0 ? (
                        <>
                            <div className="quantity-selector">
                                <label htmlFor="quantity">Cantidad:</label>
                                <select 
                                    id="quantity" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                >
                                    {[...Array(product.stock).keys()].map(i => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                Agregar al carrito
                            </button>
                        </>
                    ) : (
                        <button disabled className="out-of-stock-btn">
                            No disponible
                        </button>
                    )}
                </div>
            ) : (
                <div className="go-to-cart">
                    <Link to="/cart" className="go-to-cart-btn">Ir al carrito</Link>
                    <button 
                        className="continue-shopping-btn" 
                        onClick={() => setGoToCart(false)}
                    >
                        Seguir comprando
                    </button>
                </div>
            )}
            {showModal && (
                <div className="modal" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={toggleModal}>&times;</span>
                        <div className="description">{product.description}</div>
                    </div>
                </div>
            )}
        </div>
    );
}