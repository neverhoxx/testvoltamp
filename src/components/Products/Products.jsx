import React, { useState, useEffect } from 'react';
import Larrow from "../../images/arrow-right-svgrepo-com.svg";
import Rarrow from "../../images/arrow-left-svgrepo-com.svg";

import wishlist from "../../images/heart-svgrepo-com.svg";
import cart from "../../images/cart-large-2-svgrepo-com.svg";
import view from "../../images/arrow-right-svgrepo-com (1).svg";
import invertor from "../../images/71s015zBNgL._AC_SL1200_.jpg";
import { products } from '../../data/products';
import { Link, useLocation } from 'react-router-dom';
import AllProductList from './ProductsLists/allProductList';
import SolaxProducts from './ProductsLists/SolaxProducts';


export const Products = () => {
    const [sortedSolaxList, setSortedSolaxList] = useState([]);
    const [openProductsCategories, setOpenProductsCategories] = useState(false);
    const [sortOption, setSortOption] = useState("name");
    const location = useLocation();

    const toggleProductsCategories = () => {
        setOpenProductsCategories(!openProductsCategories);
    };

    useEffect(() => {
        const solaxList = products.filter(product => product.brand === "Solax");
        setSortedSolaxList(solaxList);
    }, []);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "priceAsc") {
            return a.price - b.price;
        } else if (sortOption === "priceDesc") {
            return b.price - a.price;
        }
        return 0;
    });

    const sortedFilteredSolaxList = [...sortedSolaxList].sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "priceAsc") {
            return a.price - b.price;
        } else if (sortOption === "priceDesc") {
            return b.price - a.price;
        }
        return 0;
    });

    const renderProductList = () => {
        if (location.pathname === "/products") {
            return <AllProductList sortedProducts={sortedProducts} cart={cart} view={view} />;
        } else if (location.pathname === "/products/solax") {
            return <SolaxProducts sortedSolaxList={sortedFilteredSolaxList} cart={cart} view={view} />;
        } else {
            return null;
        }
    };

    return (
        <div>
            <div className="page products-page">

                <div className="products-list-properties">
                    <div className="products-list-properties__container __container">
                        <div className="products-list-properties-options-block">
                            <select className='products-list-properties-options' onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                                <option value="name">Sorteeri nime järgi</option>
                                <option value="priceAsc">Sorteeri hinna järgi (kasvavalt)</option>
                                <option value="priceDesc">Sorteeri hinna järgi (kahanevalt)</option>
                            </select>
                        </div>
                        <div className="products-list-properties-cart-block">

                            <div className="products-list-properties-cart prop-icon-block">
                                <img src={cart} alt="" className="products-list-properties-cart-img prop-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-list">{renderProductList()}</div>

                <div className="VictronEnergy">
                    <h1 className="VictronEnergy_title">
                        Victron Energy
                    </h1>
                    <img className='VictronEnergy_img' src="" alt="VictronEnergy" />
                    <div className="VictronEnergy_btn">
                        Küsige pakkumist
                    </div>
                </div>

                <div className={`products-categories-open-btn ${openProductsCategories ? "openedd" : ""}`} onClick={toggleProductsCategories}>
                    <img src={openProductsCategories ? Rarrow : Larrow} alt="dsf" className="products-categories-open-btn-img" />
                </div>

                <div className={`products-page-categories-block ${openProductsCategories ? "opened" : ""}`}>
                    <h2>Kategooriad</h2>
                </div>
            </div >


        </div>
    )
}

export default Products;

