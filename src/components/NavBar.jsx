import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 
import './NavBar.css';
import Logo from './Logo';
import CartWidget from './CartWidget';

export default function NavBar() {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header>
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <div>
                    <Link to="/category/remeras" className='botonesheader'>Remeras</Link>
                    <Link to="/category/hoodies" className='botonesheader'>Hoodies</Link>
                    <Link to="/category/pantalones" className='botonesheader'>Pantalones</Link>
                </div>
                <Link to="/cart">
                    <CartWidget cartCount={totalItems} />
                </Link>
            </nav>           
        </header>    
    );
}



