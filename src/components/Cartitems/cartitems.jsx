import React, { useContext } from 'react'; 
import './cartitems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removefromcart } = useContext(ShopContext);
    const total = getTotalCartAmount(); // Calculate total value here

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                 if(cartItems[e.id] >0) {
                    return (
                        <div key={e.id}> 
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>{e.new_price} Rs</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]} Rs</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removefromcart(e.id)}} alt="" />
                            </div>
                            <hr /> 
                        </div>
                    );    
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{total} Rs</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>{total} Rs</h3>
                        </div>
                    </div>
                    <Link to={`/orderdetails?total=${total}`}>
    <button>PROCEED TO CHECKOUT</button>
</Link>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
