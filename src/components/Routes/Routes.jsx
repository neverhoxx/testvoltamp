import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Products } from '../Products/Products';
import { ProductDetails } from '../Products/ProductDetails';
import { SolaxProducts } from '../Products/ProductsLists/SolaxProducts';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/solax" element={<SolaxProducts />} />
            <Route path="products/:id" element={<ProductDetails />} />
        </Routes>
    )
}
