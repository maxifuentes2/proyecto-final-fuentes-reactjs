import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../firebase/firebase'; 
import ItemDetail from './ItemDetailComponent'; 
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const productData = await getProduct(id); 
                setProduct(productData);
            } catch (error) {
                setError("Error al cargar el producto");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className='loading'>Cargando producto...</p>;
    if (error) return <p className='error'>{error}</p>;
    if (!product) return <p>Producto no encontrado.</p>;

    return <ItemDetail product={product} />;
}