import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart-container page'>
            <div className="cart-card-block">
                <h2 className='cart-block-title'>Sinu ostukorv</h2>
                {cartItems.length === 0 ? (
                    <p>Empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.name} - {item.price}€</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
                <p>
                    Summa: {cartItems.reduce((total, item) => total + item.price, 0)} €
                </p>

                <div className="cart-block-return-btn">
                    ← Back to products
                </div>
            </div>
        </div>
    );
};

export default Cart;