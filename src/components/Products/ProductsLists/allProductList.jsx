import React from 'react';
import { Link } from 'react-router-dom';

const AllProductList = ({ sortedProducts, cart, view }) => {
    return (
        <div className="products-list__container __container">
            {sortedProducts.map((product) => (
                <div className="product-card" key={product.id}>
                    <img className="product-pic" src={product.img} alt="Product" />
                    <p className="product-type">{product.type}</p>
                    <h3 className="product-name">{product.name}</h3>

                    <div className="price-block">
                        <h2>{product.price}€</h2>
                        <div className="cart-block">
                            <div className="add-to-cart-btn">
                                <img src={cart} alt="Add to cart" />
                            </div>
                            <div className="view-product-btn">
                                <Link to={`/products/${product.id}`}>
                                    <img src={view} alt="View product" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProductList;
