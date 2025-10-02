import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';

import ProductCharacteristics from './ProductsCharacteristics';

export function ProductDetails() {
    const { id } = useParams();
    const productId = parseInt(id);

    const product = products.find(product => product.id === productId);


    return (
        <>
            <div className="product-det-page">
                <div className="__container">
                    <div className="product-details-block">
                        <img className='product-details-pic' src={product.img} alt="Picture" />
                        <div className="product-details">
                            <div className="product-details-name-block">
                                <h2 className="product-details-name">
                                    {product.name}
                                </h2>
                            </div>
                            <div className="product-details-type-block">
                                <h2 className="product-details-type">
                                    {product.type}
                                </h2>
                            </div>
                            <div className="product-details-price-block">
                                <h2 className="prosuct-details-name">
                                    {product.price}€
                                </h2>
                            </div>
                            <div className="add-product-to-cart-btn">
                                Lisa ostukorvi
                            </div>
                        </div>
                    </div>
                    {product.characteristics ? (
                        <ProductCharacteristics characteristics={product.characteristics} />
                    ) : (
                        <p>No characteristics available for this product.</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default ProductDetails;