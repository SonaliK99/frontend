import React from 'react';
import Hero from '../components/Hero/hero'; // Correct the import path
import Popular from '../components/Popular/popular';
import Offers from '../components/Offers/offers';
import NewCollection from '../components/NewCollection/newcollection';
import Newsletter from '../components/NewLetter/newletter';
const Shop = () => {
  return ( 
    <div>
      <Hero /> {/* Use the Hero component */}
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
    </div>
  );
}

export default Shop;

