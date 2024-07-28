import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopcategory';
import Loginsignup from './pages/loginsignup';
import Product from './pages/product';
import Cart from './pages/cart';
import Footer from './components/Footer/footer';
import mens_banner from './components/Assets/banner_mens.png';
import womens_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import OrderDetails from './pages/orderdetails'; // Import the OrderDetails component

function App() {
  return (
    <div> 
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
          <Route path='/orderdetails' element={<OrderDetails />} /> {/* Added route for OrderDetails */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
