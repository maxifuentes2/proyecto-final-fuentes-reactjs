import { useParams } from 'react-router-dom';
import { useProducts } from '../firebase/firebase';
import ProductCard from './ProductCard';
import './ItemListContainer.css';

export default function ItemListContainer({ mensaje }) {
    const { category } = useParams(); 
    const { items, loading } = useProducts(category);

    if (loading) {
        return <p className="loading">Cargando productos...</p>; 
    }

    const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <main>
            <h1>{category ? capitalizar(category) : mensaje}</h1>
            <div className="product-list">
                {items.length > 0 ? (
                    items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </main>
    );
}







