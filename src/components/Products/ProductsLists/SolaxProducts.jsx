import React from 'react';
import { Link } from 'react-router-dom';

export const SolaxProducts = ({ sortedSolaxList = [], cartIMG, view }) => {
    if (!sortedSolaxList || sortedSolaxList.length === 0) {
        return <p>No products available in this category.</p>;
    }

    return (
        <div className="products-list__container __container">
            {sortedSolaxList.map((solaxProduct) => (
                <div className="product-card" key={solaxProduct.id}>
                    <img className="product-pic" src={solaxProduct.img} alt="Product" />
                    <p className="product-type">{solaxProduct.type}</p>
                    <h3 className="product-name">{solaxProduct.name}</h3>

                    <div className="price-block">
                        <h2>{solaxProduct.price}€</h2>
                        <div className="cart-block">
                            <div className="add-to-cart-btn">
                                <img src={cartIMG} alt="Add to cart" />
                            </div>
                            <div className="view-product-btn">
                                <Link to={`/products/${solaxProduct.id}`}>
                                    <img src={view} alt="View product" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SolaxProducts;
