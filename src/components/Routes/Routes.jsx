import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Products } from '../Products/Products';
import { ProductDetails } from '../Products/ProductDetails';
import { SolaxProducts } from '../Products/ProductsLists/SolaxProducts';
import Cart from '../Products/Cart';
import { useCart } from '../../hooks/useCart';

export const AppRoutes = () => {
    const { cart, addToCart, removeFromCart } = useCart();
    return (

        <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:brand" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}></Route>
        </Routes>
    )
}
