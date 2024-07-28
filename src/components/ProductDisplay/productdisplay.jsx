import React, { useContext } from 'react' 
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay =(props) => {
    const {product} = props;
    const {addtocart} = useContext(ShopContext);



 return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
    <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
    <div className="productdisplay-img">
        <img className='productdisplay-img' src={product.image} alt=""/>
    </div>
    </div>
    <div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
</div>
<div className="productdisplay-right-prices">
<div className="productdisplay-right-price-old">{product.old_price}Rs</div>
<div className="productdisplay-right-price-new">{product.new_price}Rs</div>
</div> 
   <div className="productdisplay-right-discription">
   Our selection of fruits is handpicked to offer you the juiciest and most flavorful options, perfect for snacking, desserts, or adding a sweet touch to any dish.
   </div>
   <div className="productdisplay-right-size">
    <h1> Select Size </h1>
    <div className="productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
   </div>
   
   <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
   <p className='productdisplay-right-category'><span>Category :</span> veggies, fresh, premium</p>
   <p className='productdisplay-right-category'><span>Tags :</span>Latest</p>
    </div>
    </div>
 )
}

export default ProductDisplay