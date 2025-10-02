import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useCart } from '../../../hooks/useCart';

const AllProductList = ({ sortedProducts, cartimg, view }) => {
    const { cart, addToCart, removeFromCart } = useCart();
    const { brand } = useParams();
    console.log(brand);

    let filteredProducts = sortedProducts;
    if (brand) {
        filteredProducts = sortedProducts.filter(product =>
            product.brand.toLowerCase() === brand.toLowerCase()
        );
    }

    return (
        <div className="products-list__container __container">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        {product.img ? (
                            <img className="product-pic" src={product.img} alt={product.name} />
                        ) : (
                            <p>Pole pilti</p>
                        )}
                        <p className="product-type">{product.type}</p>
                        <h3 className="product-name">{product.name}</h3>

                        <div className="price-block">
                            <h2>{product.price}€</h2>
                            <div className="cart-block">
                                <div className="add-to-cart-btn" onClick={() => addToCart(product)}>
                                    <img src={cartimg} alt="Add to cart" />
                                </div>
                                <div className="view-product-btn">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={view} alt="View product" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h2>POle</h2>
            )}
        </div>
    );
};

export default AllProductList;
