import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={decrement} className='boton-restar'>-</button>
            <span>{count}</span>
            <button onClick={increment} className='boton-sumar'>+</button>
            <button onClick={() => onAdd(count)} className="add-to-cart-btn">Agregar al carrito</button>
        </div>
    );
}


