
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./container/home/Home";
import Orderlist from "./container/orderlist/Orderlist";
import Notifications from "./container/notifications/Notifications";
import Cart from "./container/cart/Cart";
import More from "./container/more/More";
import Navbar from "./container/navbar/Navbar";
import Product from "./container/productpage/Product";
import Final from "./container/final/Final";


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orderlist" element={<Orderlist />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/more" element={<More />} />
          <Route path="/product" element={<Product />} />
          <Route path="/final" element={<Final />} />
          <Route path="*" element={<div>404 error</div>} />
        </Routes>
      </Router>
  );
}

export default App;
