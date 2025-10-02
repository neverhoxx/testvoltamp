import { useState } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return {
        cart,
        addToCart,
        removeFromCart,
    };
};
