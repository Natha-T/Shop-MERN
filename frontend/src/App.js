
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './index.css';
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getProducts} from './redux/features/Product/productSlice';
import { Toaster } from "react-hot-toast";
import CheckoutSuccess from "./component/Cart/CheckoutSuccess";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    }, []);









  return (
<div class="container">
  <Toaster/>
    <BrowserRouter>
      <Routes>
    

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-success" element={<CheckoutSuccess/>} />
     
      </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;
