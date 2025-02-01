import React from 'react';

import { Link } from 'react-router-dom';

import firstPic from '../../images/solar-roof-clean-energy-solar-panel-alternative-energy-svgrepo-com.svg';
import secondPic from '../../images/solar-energy-renewable-energy-svgrepo-com.svg';
import thirdPic from '../../images/solar-panels-solar-plates-sun-svgrepo-com.svg';
import fourthPic from '../../images/solar-battery-4-svgrepo-com.svg';

import solar from '../../images/ee19e3a0-1c34-4ba6-9063-0c08a4cbae4b-removebg-preview.png';

import { products } from '../../data/products';
import cart from "../../images/cart-large-2-svgrepo-com.svg";
import view from "../../images/arrow-right-svgrepo-com (1).svg";

import pic1 from "../../images/Снимок экрана 2025-01-18 002456.png";
import pic2 from "../../images/Снимок экрана 2025-01-18 004615.png";
import pic3 from "../../images/Снимок экрана 2025-01-18 005113.png";
import pic4 from "../../images/Снимок экрана 2025-01-18 005238.png";
import pic5 from "../../images/Снимок экрана 2025-01-18 005546.png";
import pic6 from "../../images/Снимок экрана 2025-01-18 005726.png";
import pic7 from "../../images/Снимок экрана 2025-01-18 005902.png";
import pic8 from "../../images/Снимок экрана 2025-01-18 010053.png";
import pic9 from "../../images/Снимок экрана 2025-01-18 010234.png";
import pic10 from "../../images/Снимок экрана 2025-01-18 010604.png";
import pic11 from "../../images/Снимок экрана 2025-01-18 010813.png";
import pic12 from "../../images/Снимок экрана 2025-01-18 010939.png";

import servicePic from "../../images/man-with-white-helmet-near-solar-panel.jpg";

export const Home = () => {

    const popproducts = [
        { id: 1, name: "PV INVERTER 3F SOLAX X3-ULT-HÜBRIID-15.0-K AFCI", price: 2860, type: "Hübriidinverter", img: pic1, brand: "Solax", subtype: "Kontrollmoodul" },
        { id: 4, name: "PV ARVESTI SOLAX 3F VOOLUTRAFODEGA 200A", price: 152, type: "Lisaseadmed", img: pic4, brand: "Solax", subtype: "PV arvesti voolutrafodega" },
        { id: 5, name: "PV INVERTER 3F SUN2000-10KTL M1 HUAWEI", price: 1233, type: "Akuinverter", img: pic5, brand: "Huawei", subtype: "Kontrollmoodul" },
        { id: 6, name: "PV INVERTER 3F SUN 2000-12K-MAP0 13,2kW HUAWEI", price: 2114, type: "Akuinverter", img: pic6, brand: "Huawei", subtype: "Kontrollmoodul" }
    ];

    return (
        <div>
            <main className="page main-page">
                <div className="main-page-welcome-block">
                    <div className="main-page-welcome-block__container __container">
                        <div className="main-page-welcome-block-content">
                            <h1 className="main-page-welcome-block-title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h1>
                            <div className="main-page-welcome-block-btn">
                                Võta ühendust
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page-subwelcome-block">
                    <div className="main-page-subwelcome-block__container __container">
                        <div className="main-subwelcome-card">
                            <img src={firstPic} alt="icon" className="main-subwelcome-card-pic" />
                            <h2 className="main-subwelcome-title">
                                Some text
                            </h2>
                        </div>
                        <div className="main-subwelcome-card">
                            <img src={secondPic} alt="icon" className="main-subwelcome-card-pic" />
                            <h2 className="main-subwelcome-title">
                                Some text
                            </h2>
                        </div>
                        <div className="main-subwelcome-card">
                            <img src={thirdPic} alt="icon" className="main-subwelcome-card-pic" />
                            <h2 className="main-subwelcome-title">
                                Some text
                            </h2>
                        </div>
                        <div className="main-subwelcome-card">
                            <img src={fourthPic} alt="icon" className="main-subwelcome-card-pic" />
                            <h2 className="main-subwelcome-title">
                                Some text
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="main-page-products-block">
                    <div className="main-page-products__container __container">
                        <div className="main-page-products-text-block">
                            <h2 className="main-page-products-title">
                                Miks meie?
                            </h2>
                            <p className="main-page-products-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eveniet nemo corporis dolorum sequi magni excepturi harum quasi eligendi, inventore quisquam ex itaque qui error, impedit facere placeat quos nihil.
                            </p>
                        </div>
                        <div className='main-page-products-btn-block'>
                            <div className="main-page-products-btn">
                                Meie tooted
                            </div>
                        </div>
                    </div>

                </div>

                <div className="main-page-popular-products-block">
                    <div className="main-page-popular-products__container __container">
                        <h2 className="main-page-popular-products-title">
                            Populaarsed tooted
                        </h2>
                    </div>
                    <div className="main-page-products-list">
                        <div className="main-page-products-list__container __container">
                            {popproducts.map((popproduct) => (
                                <div className="product-card">
                                    <img className='product-pic' src={popproduct.img} alt="Photo" />
                                    <p className="product-type">
                                        {popproduct.type}
                                    </p>
                                    <h3 className="product-name">
                                        {popproduct.name}
                                    </h3>

                                    <div className="price-block">
                                        <h2 className="price">
                                            {popproduct.price}€
                                        </h2>
                                        <div className="cart-block">
                                            <div className="add-to-cart-btn">
                                                <img src={cart} alt="cart" />
                                            </div>
                                            <div className="view-product-btn">
                                                <Link to={`/products/${popproduct.id}`}><img src={view} alt="arrow" /></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="main-page-services-block">
                    <div className="__container main-page-services__container">
                        <h2 className="main-page-services-title">
                            Teenused
                        </h2>

                        <div className="main-page-services-content-container">
                            <div className="main-page-services-card">
                                <div className="main-page-services-card-text-block">
                                    <h2 className="main-page-services-card-title">
                                        Teenus 1
                                    </h2>
                                    <p className="main-page-services-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                    </p>
                                </div>

                                <img src={servicePic} alt="pic" className="main-page-services-card-pic" />
                            </div>
                            <div className="main-page-services-card">
                                <img src={servicePic} alt="pic" className="main-page-services-card-pic" />
                                <div className="main-page-services-card-text-block">
                                    <h2 className="main-page-services-card-title">
                                        Teenus 2
                                    </h2>
                                    <p className="main-page-services-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                    </p>
                                </div>


                            </div>
                            <div className="main-page-services-card">
                                <div className="main-page-services-card-text-block">
                                    <h2 className="main-page-services-card-title">
                                        Teenus 3
                                    </h2>
                                    <p className="main-page-services-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                    </p>
                                </div>

                                <img src={servicePic} alt="pic" className="main-page-services-card-pic" />
                            </div>
                            <div className="main-page-services-card">
                                <img src={servicePic} alt="pic" className="main-page-services-card-pic" />
                                <div className="main-page-services-card-text-block">
                                    <h2 className="main-page-services-card-title">
                                        Teenus 4
                                    </h2>
                                    <p className="main-page-services-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam minus optio recusandae velit? Fugiat a mollitia consequuntur distinctio, quia totam natus sit facilis ex, voluptate saepe repellendus deleniti ut.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-page-questions-block">
                    <div className="__container main-page-questions__container">
                        <h2 className="main-page-questions-title">
                            Tekkis küsimusi?
                        </h2>
                        <div className="main-page-questions-contacts">
                            <h3 className='main-page-questions-contacts-name'>Name or sth</h3>
                            <p>tel: +372 8888 8888<br />e-mail: info@voltamp.ee</p>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home;