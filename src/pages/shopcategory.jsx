import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import './CSS/Shopcategory.css';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/item';

const Shopcategory   
 = (props) => {
  const { all_product } = useContext(ShopContext);   

  const [sortOption, setSortOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  const sortedProducts = [...all_product].sort((a, b) => {
    if (sortOption === 'price') {
      return a.new_price - b.new_price;
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of   
 {sortedProducts.length} Products
        </p>
        <div className="shopcategory-sort" onClick={handleSortClick}>
          Sort by <img src={dropdown_icon} alt="" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div onClick={() => handleSortOptionClick('price')}>Price (Low to High)</div>
              <div onClick={() => handleSortOptionClick('name')}>Name (A-Z)</div>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">   

        Explore More
      </div>
    </div>
  );
}

export default Shopcategory;   
