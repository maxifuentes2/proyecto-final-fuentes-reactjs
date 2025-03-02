import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
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
                    <NavLink to="/category/remeras" className={({ isActive }) => isActive ? 'headerbutton active-link' : 'headerbutton'}>
                        Remeras
                    </NavLink>
                    <NavLink to="/category/hoodies" className={({ isActive }) => isActive ? 'headerbutton active-link' : 'headerbutton'}>
                        Hoodies
                    </NavLink>
                    <NavLink to="/category/pantalones" className={({ isActive }) => isActive ? 'headerbutton active-link' : 'headerbutton'}>
                        Pantalones
                    </NavLink>
                </div>
                <Link to="/cart">
                    <CartWidget cartCount={totalItems} />
                </Link>
            </nav>           
        </header>    
    );
}