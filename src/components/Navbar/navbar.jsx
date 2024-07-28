import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => { 
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='Navbar'>
            <div className="nav-logo">
                <p>GFG Fruit & Vegetable Market</p>
            </div> 
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link style= {{textDecoration: 'none'}} to='/'>Home</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link style= {{textDecoration: 'none'}} to='/mens'>Fruits</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style= {{textDecoration: 'none'}} to='/womens'>Veggies</Link>{menu === "womens" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/yourorders'><button>Your Orders</button></Link> {/* Added orderdetails button */}
                {localStorage.getItem('auth-token') ?
                    <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                    :
                    <Link to='/login'><button>Login</button></Link>
                }
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
