import React, {useState, useEffect} from 'react' 
import './relatedproducts.css'
import Item from '../Item/item'

const RelatedProducts =() => {

    const [popularProducts,setPopularProducts] = useState([]);

useEffect (()=> {
fetch('http://localhost:4000/popularinwomen').then((response) =>response.json()).then((data)=> setPopularProducts(data));
},[])

 return (
    <div className='relatedproducts'>
<h1>Related Products</h1>
<hr />
<div className="relatedproducts-item">
{popularProducts.map((item,i) =>{
      return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
</div>
    </div>
 )
}

export default RelatedProducts