import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

import { useState } from "react"; 
import Favicon from "react-favicon"; 

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [faviconUrl] = useState("images/logo_burj.jpg"); 

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    <Favicon url={faviconUrl} />

      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button hidden onClick={openMenu}>&#9776;</button>
            <img class="product-image" padding-bottom='100' width='100' padding='10' src="images/logo.png" alt="product" />
            <Link to="/">Inicio</Link>
          </div>
          <div className="header-links">
            <a hidden href="cart.html">Pedidos</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Entrar</Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categorias</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
          <img class="product-image" width='150' padding='10' src="images/logo.png" alt="product" />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
