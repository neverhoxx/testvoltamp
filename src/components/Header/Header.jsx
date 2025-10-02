import React, { useState } from 'react';
import { ROUTES } from '../../utils/routes.js';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/VOLTAMP logo 1-1.png';

export const Header = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [openArrows, setOpenArrows] = useState(null);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredItem(id);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const navItems = [
        {
            id: 1,
            color: location.pathname !== "/standart" ? '#0b3954' : '#d2691e',
            name: "Standardpaneeli süsteemid",
            href: "",
            hasArrow: true,
            content: (
                <div className="header-systems-categories-block__container">
                    <Link className='see-all-products-link'>
                        <h4 className='seeAllProducts'>
                            STANDARDPANEELI SÜSTEEMID
                        </h4>
                    </Link>
                    <div className="header-systems-categories-content">
                        <div className="header-systems-categories-block">
                            <h2 className='header-systems-categories-block-title'>
                                Solax
                            </h2>
                            <ul className="header-systems-categories-block-list">
                                <li className="header-systems-categories-block-item">
                                    <Link className='header-systems-categories-block-link'>
                                        -Hübriidinverter AFCI toega
                                    </Link>
                                </li>
                                <li className="header-systems-categories-block-item">
                                    <Link className='header-systems-categories-block-link'>
                                        -Akusüsteem
                                    </Link>
                                </li>
                                <li className="header-systems-categories-block-item">
                                    <Link className='header-systems-categories-block-link'>
                                        -Lisaseadmed
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        { id: 2, color: location.pathname !== "/päikesekatus" ? '#0b3954' : '#d2691e', name: "Integreeritav päikesekatus", href: "", hasArrow: false, content: null },
        { id: 3, color: location.pathname !== "/kontroll" ? '#0b3954' : '#d2691e', name: "Päikeseparkide kontroll ja hooldus", href: "", hasArrow: false, content: null },
        {
            id: 4,
            color: location.pathname !== "/products" ? '#0b3954' : '#d2691e',
            name: "Products",
            href: "",
            hasArrow: location.pathname !== "/products",
            content: (
                <div className='header-products-categories-block__container'>
                    <div className="header-products-categories-content">
                        <div className="header-products-categories-block">
                            <h2 className='header-products-categories-block-title'>
                                <Link to={`/products/solax`}>Solax</Link>
                            </h2>
                            <ul className="header-products-categories-block-list">
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Hübriidinverter
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akusüsteem
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Lisaseadmed
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-products-categories-block">
                            <h2 className='header-products-categories-block-title'>
                                <Link>Huawei</Link>
                            </h2>
                            <ul className="header-products-categories-block-list">
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akuinverter
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akusüsteem
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Lisaseadmed
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-products-categories-block">
                            <h2 className='header-products-categories-block-title'>
                                <Link>Tigo</Link>
                            </h2>

                            <ul className="header-products-categories-block-list">
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akuinverter
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akusüsteem
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Lisaseadmed
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-products-categories-block">
                            <h2 className='header-products-categories-block-title victron'>
                                <Link>Victron Energy</Link>
                            </h2>
                            <ul className="header-products-categories-block-list">
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Inverter
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Akusüsteemid
                                    </Link>
                                </li>
                                <li className="header-products-categories-block-item">
                                    <Link className='header-products-categories-block-link'>
                                        -Lisaseadmed
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link to={ROUTES.PRODUCTS} className='see-all-products-link'>
                            <h4 className='seeAllProducts-btn'>
                                SEE ALL PRODUCTS
                            </h4>
                        </Link>
                    </div>

                </div>
            ),
        },
        {
            id: 5,
            color: location.pathname !== "/pildigalerii" ? '#0b3954' : '#d2691e',
            name: "Pildigalerii",
            href: "",
            hasArrow: true,
            content: (
                <div>
                    <div className="header-products-categories-block">Gallery Item 1</div>
                    <div className="header-products-categories-block">Gallery Item 2</div>
                </div>
            ),
        },
        { id: 6, color: location.pathname !== "/kasulikku" ? '#0b3954' : '#d2691e', name: "Kasulikku", href: "", hasArrow: false, content: null },
    ];

    return (
        <div>
            <header className="header">
                <div className="sub-header">
                    <div className="sub-header__container __container">
                        Võta ühendust: Info@voltamp.ee, või tel: +372 555 343 14
                    </div>
                </div>
                <div className="header__container __container">
                    <div className="header-logo">
                        <Link className="header-logo-link" to={ROUTES.HOME}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="header-nav-item"

                                    onMouseEnter={() => {
                                        handleMouseEnter(item.id);
                                    }}

                                >
                                    <a className="header-nav-link" style={{ color: item.color }} >
                                        {item.name}
                                        {item.hasArrow &&
                                            (hoveredItem === item.id && item.content ? (
                                                <svg
                                                    className="header-arrow"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 5.707 5.354 8.354a.5.5 0 11-.708-.708l3-3z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="header-arrow"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.646 7.646a.5.5 0 01.708 0L8 10.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 4.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            ))}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="header-nav-menu-btn" onClick={openMenu}>
                            <div className={`menu-btn ${isOpen ? "active" : ""}`}></div>
                        </div>
                    </nav>
                </div>
            </header >

            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
                <ul className="burger-nav-list">
                    {navItems.map((item) => (
                        <li key={item.id} className="burger-nav-item">
                            <a href={item.href} className="burger-nav-link">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {
                navItems.map((item) =>
                    hoveredItem === item.id && item.content && (
                        <div
                            className="header-products-categoties open"
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="__container header-products-categories__container">
                                {item.content}
                            </div>
                        </div>
                    )
                )
            }

        </div >
    );
};

export default Header;
