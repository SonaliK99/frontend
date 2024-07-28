import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/productdisplay';
import Breadcrums from '../components/Breadcrums/breadcrums';
import DiscriptionBox from '../components/DiscriptionBox/discriptionbox.jsx';
import RelatedProducts from '../components/RelatedProducts/relatedproducts.jsx';



const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    // Find the product with the specified ID

    const product = all_product.find((e) => e.id === Number(productId));
    return ( 
      <div>
          <Breadcrums product={product}/>
          <ProductDisplay product={product} />
          <DiscriptionBox/>
          <RelatedProducts/>
      </div>
  );
  
};

export default Product;
